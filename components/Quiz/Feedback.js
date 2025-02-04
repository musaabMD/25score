// feedback.js
'use client';

import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

const Feedback = ({ onSubmit }) => {
  const [feedbackIssues, setFeedbackIssues] = useState([]);
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackHelpful, setFeedbackHelpful] = useState(null);

  const issues = [
    { id: 'typo', label: 'Typo' },
    { id: 'incorrect', label: 'Question is incorrect' },
    { id: 'unclear', label: 'Question is unclear' },
    { id: 'other', label: 'Other issue' }
  ];

  const handleIssueChange = (issueId, checked) => {
    if (checked) {
      setFeedbackIssues(prev => [...prev, issueId]);
    } else {
      setFeedbackIssues(prev => prev.filter(i => i !== issueId));
    }
  };

  const handleSubmit = () => {
    // Here you might send the feedback to your backend
    if (onSubmit) {
      onSubmit({ feedbackIssues, feedbackText, feedbackHelpful });
    }
    // Reset local state after submission
    setFeedbackIssues([]);
    setFeedbackText('');
    setFeedbackHelpful(null);
  };

  return (
    <div className="pt-6 space-y-6">
      <h3 className="text-lg font-medium">Provide Feedback</h3>
      
      <div className="space-y-4">
        {issues.map((issue) => (
          <div key={issue.id} className="flex items-center space-x-2">
            <Checkbox 
              id={issue.id}
              checked={feedbackIssues.includes(issue.id)}
              onCheckedChange={(checked) => handleIssueChange(issue.id, checked)}
            />
            <label htmlFor={issue.id}>{issue.label}</label>
          </div>
        ))}
      </div>

      <Textarea
        placeholder="Describe the issue..."
        value={feedbackText}
        onChange={(e) => setFeedbackText(e.target.value)}
        className="min-h-[100px]"
      />

      <div className="space-y-4">
        <p className="font-medium">Did you find this question helpful?</p>
        <div className="flex gap-4">
          <Button
            variant={feedbackHelpful === true ? "default" : "outline"}
            onClick={() => setFeedbackHelpful(true)}
            className="flex items-center gap-2"
          >
            <ThumbsUp className="w-4 h-4" />
            Yes
          </Button>
          <Button
            variant={feedbackHelpful === false ? "default" : "outline"}
            onClick={() => setFeedbackHelpful(false)}
            className="flex items-center gap-2"
          >
            <ThumbsDown className="w-4 h-4" />
            No
          </Button>
        </div>
      </div>

      <Button 
        className="w-full"
        onClick={handleSubmit}
      >
        Submit Feedback
      </Button>
    </div>
  );
};

export default Feedback;
