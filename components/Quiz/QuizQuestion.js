// QuizQuestion.js (or inline within your QuizCardsContainer file)
'use client';

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Pin, Lightbulb, Flag, MessageCircle, Check, X } from 'lucide-react';
import Feedback from './feedback';
import Comments from './comments';
import Explanation from './explanation';

const QuizQuestion = ({ question }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswers, setShowAnswers] = useState(false);
  const [isPinned, setPinned] = useState(false);
  const [activeSheet, setActiveSheet] = useState(null);
  const [activeButtons, setActiveButtons] = useState({
    flag: false,
    comments: false,
    lightbulb: false
  });

  const handleAnswerClick = (choiceId) => {
    if (showAnswers && selectedAnswer === choiceId) {
      setSelectedAnswer(null);
      setShowAnswers(false);
    } else {
      setSelectedAnswer(choiceId);
      setShowAnswers(true);
    }
  };

  const getChoiceStyle = (choice) => {
    const baseStyle = 'w-full p-4 text-left border rounded-lg transition-colors flex justify-between items-center';
    if (!showAnswers) return `${baseStyle} bg-white hover:bg-gray-50`;
    
    if (choice.id === selectedAnswer) {
      return `${baseStyle} ${choice.correct ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500'}`;
    }
    if (choice.correct) return `${baseStyle} bg-green-100 border-green-500`;
    return `${baseStyle} bg-gray-50`;
  };

  const toggleButton = (buttonName) => {
    setActiveButtons(prev => ({
      ...prev,
      [buttonName]: !prev[buttonName]
    }));
  };

  return (
    <div className="relative bg-white rounded-lg overflow-hidden">
      {/* Pin Button */}
      <button 
        onClick={() => setPinned(!isPinned)} 
        className="absolute top-4 right-4 z-10"
      >
        <Pin className={`w-5 h-5 ${isPinned ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} />
      </button>

      {/* Question Text */}
      <div className="pt-12 px-4 pb-6">
        <h2 className="text-xl font-medium">{question.text}</h2>
      </div>

      {/* Answer Choices */}
      <div className="px-4 space-y-3 mb-20">
        {question.choices.map((choice) => (
          <button
            key={choice.id}
            onClick={() => handleAnswerClick(choice.id)}
            className={getChoiceStyle(choice)}
          >
            <div className="flex items-center gap-3">
              <span className="font-medium">{choice.id.toUpperCase()}.</span>
              <span>{choice.text}</span>
            </div>
            <div className="flex items-center gap-2">
              {showAnswers && (
                <>
                  <span className="text-sm text-gray-500">
                    {choice.percentage}%
                  </span>
                  {choice.correct && <Check className="w-5 h-5 text-green-500" />}
                  {choice.id === selectedAnswer && !choice.correct && 
                    <X className="w-5 h-5 text-red-500" />
                  }
                </>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t p-4 rounded-b-lg">
        <div className="flex justify-between">
          <button 
            onClick={() => {
              toggleButton('flag');
              setActiveSheet('feedback');
            }}
            className="p-2 rounded-full"
          >
            <Flag className={`w-5 h-5 ${activeButtons.flag ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} />
          </button>
          <button 
            onClick={() => {
              toggleButton('comments');
              setActiveSheet('comments');
            }}
            className="p-2 rounded-full flex items-center"
          >
            <MessageCircle 
              className={`w-5 h-5 ${activeButtons.comments ? 'text-blue-500 fill-blue-500' : 'text-gray-600'}`} 
            />
            <span className="ml-1 text-sm text-gray-600">{question.comments}</span>
          </button>
          <button 
            onClick={() => {
              toggleButton('lightbulb');
              setActiveSheet('explanation');
            }}
            className="p-2 rounded-full"
          >
            <Lightbulb 
              className={`w-5 h-5 ${activeButtons.lightbulb ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'}`} 
            />
          </button>
        </div>
      </div>

      {/* Side Sheet */}
      <Sheet open={activeSheet !== null} onOpenChange={() => {
        setActiveSheet(null);
        setActiveButtons({
          flag: false,
          comments: false,
          lightbulb: false
        });
      }}>
        <SheetContent className="w-full sm:max-w-md">
          {activeSheet === 'explanation' && (
            <Explanation explanation={question.explanation} imagePlaceholder={true} />
          )}
          {activeSheet === 'feedback' && (
            <Feedback onSubmit={() => {
              // Optionally handle feedback submission here
              setActiveSheet(null);
              setActiveButtons(prev => ({ ...prev, flag: false }));
            }} />
          )}
          {activeSheet === 'comments' && (
            <Comments initialComments={[]} />
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default QuizQuestion;
