'use client';

import React, { useState, useEffect } from 'react';
import { createClient } from '@/libs/supabase/client';
import { useRouter } from 'next/navigation';
import QuizHeader from '@/components/Quiz/QuizHeader';
import QuizCardsContainer from '@/components/Quiz/QuizCardsContainer';
import { Button } from "@/components/ui/button";

// Loading skeleton component
const LoadingSkeleton = () => (
  <div className="space-y-6 animate-pulse">
    <div className="h-16 bg-[#EEF5FF] rounded"></div>
    <div className="h-40 bg-[#EEF5FF] rounded"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="h-24 bg-[#EEF5FF] rounded"></div>
      ))}
    </div>
  </div>
);

const ExamPage = ({ params }) => {
  const router = useRouter();
  const supabase = createClient();
  const [examData, setExamData] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    let mounted = true;

    const fetchExamData = async () => {
      try {
        // First, get the exam data using the slug
        const { data: examData, error: examError } = await supabase
          .from('scoorly_exams')
          .select(`
            *,
            scoorly_exam_categories(name, description),
            scoorly_subjects(name)
          `)
          .eq('slug', params.slug)
          .single();

        if (examError) throw examError;
        if (!examData) throw new Error('Exam not found');

        // Then get questions using the exam's ID
        const { data: questionData, error: questionError } = await supabase
          .from('scoorly_questions')
          .select('*')
          .eq('exam_id', examData.id);

        if (questionError) throw questionError;

        const formattedQuestions = questionData.map(q => ({
          id: q.id,
          text: q.question_text,
          choices: [
            { id: 'a', text: q.choice_a, percentage: 0 },
            { id: 'b', text: q.choice_b, percentage: 0 },
            { id: 'c', text: q.choice_c, percentage: 0 },
            { id: 'd', text: q.choice_d, percentage: 0 },
            ...(q.choice_e ? [{ id: 'e', text: q.choice_e, percentage: 0 }] : []),
            ...(q.choice_f ? [{ id: 'f', text: q.choice_f, percentage: 0 }] : [])
          ],
          correct_choices: q.correct_choices,
          explanation: q.explanation,
          difficulty: q.difficulty_level || 'Medium',
          format: q.question_format || 'Multiple Choice',
          // Assuming these properties are set elsewhere when a question is pinned, incorrect, or attempted.
          isPinned: q.isPinned || false,
          isIncorrect: q.isIncorrect || false,
          isAttempted: q.isAttempted || false
        }));

        if (mounted) {
          setExamData(examData);
          setQuestions(formattedQuestions);
          setLoading(false);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        if (mounted) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    if (params.slug) {
      fetchExamData();
    }

    return () => {
      mounted = false;
    };
  }, [params.slug]);

  // Filter the questions based on search query and selected filter
  const filteredQuestions = questions.filter(question => {
    const matchesSearch = searchQuery 
      ? question.text.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    let matchesFilter = true;
    if (selectedFilter === 'pinned') {
      matchesFilter = question.isPinned;
    } else if (selectedFilter === 'incorrect') {
      matchesFilter = question.isIncorrect;
    } else if (selectedFilter === 'unused') {
      matchesFilter = !question.isAttempted;
    }

    return matchesSearch && matchesFilter;
  });

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-6">
        <LoadingSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-red-600">Error loading exam</h2>
          <p className="mt-2 text-gray-600">{error}</p>
          <Button 
            className="mt-4"
            onClick={() => router.push('/')}
          >
            Return to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <QuizHeader 
        examName={examData?.name || ''} 
        onSearchChange={handleSearchChange}
        onFilterChange={handleFilterChange}
        selectedCount={filteredQuestions.length}  // Passing the count of filtered questions
      />
      <br />
      <br />
      <div className="pt-32">
        <div className="max-w-6xl mx-auto px-4 py-6">
          {filteredQuestions.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#697785]">No questions found matching your criteria.</p>
            </div>
          ) : (
            <QuizCardsContainer questions={filteredQuestions} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ExamPage;
