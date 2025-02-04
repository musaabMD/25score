// // // 'use client';

// // // import React, { useState } from 'react';
// // // import { Card, CardContent } from "@/components/ui/card";
// // // import { Sheet, SheetContent } from '@/components/ui/sheet';
// // // import { Button } from '@/components/ui/button';
// // // import { Checkbox } from '@/components/ui/checkbox';
// // // import { Textarea } from '@/components/ui/textarea';
// // // import { Pin, Lightbulb, Flag, MessageCircle, ThumbsUp, ThumbsDown, Check, X } from 'lucide-react';

// // // // Quiz Question Component
// // // const QuizQuestion = ({ question }) => {
// // //   const [selectedAnswer, setSelectedAnswer] = useState(null);
// // //   const [showAnswers, setShowAnswers] = useState(false);
// // //   const [isPinned, setPinned] = useState(false);
// // //   const [activeSheet, setActiveSheet] = useState(null);
// // //   const [activeButtons, setActiveButtons] = useState({
// // //     flag: false,
// // //     comments: false,
// // //     lightbulb: false
// // //   });
// // //   const [feedbackIssues, setFeedbackIssues] = useState([]);
// // //   const [feedbackText, setFeedbackText] = useState('');
// // //   const [feedbackHelpful, setFeedbackHelpful] = useState(null);

// // //   const handleAnswerClick = (choiceId) => {
// // //     if (showAnswers && selectedAnswer === choiceId) {
// // //       setSelectedAnswer(null);
// // //       setShowAnswers(false);
// // //     } else {
// // //       setSelectedAnswer(choiceId);
// // //       setShowAnswers(true);
// // //     }
// // //   };

// // //   const getChoiceStyle = (choice) => {
// // //     const baseStyle = 'w-full p-4 text-left border rounded-lg transition-colors flex justify-between items-center';
// // //     if (!showAnswers) return `${baseStyle} bg-white hover:bg-gray-50`;
    
// // //     if (choice.id === selectedAnswer) {
// // //       return `${baseStyle} ${choice.correct ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500'}`;
// // //     }
// // //     if (choice.correct) return `${baseStyle} bg-green-100 border-green-500`;
// // //     return `${baseStyle} bg-gray-50`;
// // //   };

// // //   const toggleButton = (buttonName) => {
// // //     setActiveButtons(prev => ({
// // //       ...prev,
// // //       [buttonName]: !prev[buttonName]
// // //     }));
// // //   };

// // //   const issues = [
// // //     { id: 'typo', label: 'Typo' },
// // //     { id: 'incorrect', label: 'Question is incorrect' },
// // //     { id: 'unclear', label: 'Question is unclear' },
// // //     { id: 'other', label: 'Other issue' }
// // //   ];

// // //   return (
// // //     <div className="relative bg-white rounded-lg overflow-hidden">
// // //       {/* Pin Button */}
// // //       <button 
// // //         onClick={() => setPinned(!isPinned)} 
// // //         className="absolute top-4 right-4 z-10"
// // //       >
// // //         <Pin className={`w-5 h-5 ${isPinned ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} />
// // //       </button>

// // //       {/* Question Text */}
// // //       <div className="pt-12 px-4 pb-6">
// // //         <h2 className="text-xl font-medium">{question.text}</h2>
// // //       </div>

// // //       {/* Choices */}
// // //       <div className="px-4 space-y-3 mb-20">
// // //         {question.choices.map((choice) => (
// // //           <button
// // //             key={choice.id}
// // //             onClick={() => handleAnswerClick(choice.id)}
// // //             className={getChoiceStyle(choice)}
// // //           >
// // //             <div className="flex items-center gap-3">
// // //               <span className="font-medium">{choice.id.toUpperCase()}.</span>
// // //               <span>{choice.text}</span>
// // //             </div>
// // //             <div className="flex items-center gap-2">
// // //               {showAnswers && (
// // //                 <>
// // //                   <span className="text-sm text-gray-500">
// // //                     {choice.percentage}%
// // //                   </span>
// // //                   {choice.correct && <Check className="w-5 h-5 text-green-500" />}
// // //                   {choice.id === selectedAnswer && !choice.correct && 
// // //                     <X className="w-5 h-5 text-red-500" />
// // //                   }
// // //                 </>
// // //               )}
// // //             </div>
// // //           </button>
// // //         ))}
// // //       </div>

// // //       {/* Action Buttons */}
// // //       <div className="absolute bottom-0 left-0 right-0 bg-white border-t p-4 rounded-b-lg">
// // //         <div className="flex justify-between">
// // //           <button 
// // //             onClick={() => {
// // //               toggleButton('flag');
// // //               setActiveSheet('feedback');
// // //             }}
// // //             className="p-2 rounded-full"
// // //           >
// // //             <Flag className={`w-5 h-5 ${activeButtons.flag ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} />
// // //           </button>
// // //           <button 
// // //             onClick={() => {
// // //               toggleButton('comments');
// // //               setActiveSheet('comments');
// // //             }}
// // //             className="p-2 rounded-full flex items-center"
// // //           >
// // //             <MessageCircle 
// // //               className={`w-5 h-5 ${activeButtons.comments ? 'text-blue-500 fill-blue-500' : 'text-gray-600'}`} 
// // //             />
// // //             <span className="ml-1 text-sm text-gray-600">{question.comments}</span>
// // //           </button>
// // //           <button 
// // //             onClick={() => {
// // //               toggleButton('lightbulb');
// // //               setActiveSheet('explanation');
// // //             }}
// // //             className="p-2 rounded-full"
// // //           >
// // //             <Lightbulb 
// // //               className={`w-5 h-5 ${activeButtons.lightbulb ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'}`} 
// // //             />
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Side Sheet */}
// // //       <Sheet open={activeSheet !== null} onOpenChange={() => {
// // //         setActiveSheet(null);
// // //         setActiveButtons({
// // //           flag: false,
// // //           comments: false,
// // //           lightbulb: false
// // //         });
// // //       }}>
// // //         <SheetContent className="w-full sm:max-w-md">
// // //           {activeSheet === 'explanation' && (
// // //             <div className="pt-6">
// // //               <h3 className="text-lg font-medium mb-4">Explanation</h3>
// // //               <p>{question.explanation}</p>
// // //             </div>
// // //           )}
// // //           {activeSheet === 'feedback' && (
// // //             <div className="pt-6 space-y-6">
// // //               <h3 className="text-lg font-medium">Provide Feedback</h3>
              
// // //               <div className="space-y-4">
// // //                 {issues.map((issue) => (
// // //                   <div key={issue.id} className="flex items-center space-x-2">
// // //                     <Checkbox 
// // //                       id={issue.id}
// // //                       checked={feedbackIssues.includes(issue.id)}
// // //                       onCheckedChange={(checked) => {
// // //                         if (checked) {
// // //                           setFeedbackIssues([...feedbackIssues, issue.id]);
// // //                         } else {
// // //                           setFeedbackIssues(feedbackIssues.filter(i => i !== issue.id));
// // //                         }
// // //                       }}
// // //                     />
// // //                     <label htmlFor={issue.id}>{issue.label}</label>
// // //                   </div>
// // //                 ))}
// // //               </div>

// // //               <Textarea
// // //                 placeholder="Describe the issue..."
// // //                 value={feedbackText}
// // //                 onChange={(e) => setFeedbackText(e.target.value)}
// // //                 className="min-h-[100px]"
// // //               />

// // //               <div className="space-y-4">
// // //                 <p className="font-medium">Did you find this question helpful?</p>
// // //                 <div className="flex gap-4">
// // //                   <Button
// // //                     variant={feedbackHelpful === true ? "default" : "outline"}
// // //                     onClick={() => setFeedbackHelpful(true)}
// // //                     className="flex items-center gap-2"
// // //                   >
// // //                     <ThumbsUp className="w-4 h-4" />
// // //                     Yes
// // //                   </Button>
// // //                   <Button
// // //                     variant={feedbackHelpful === false ? "default" : "outline"}
// // //                     onClick={() => setFeedbackHelpful(false)}
// // //                     className="flex items-center gap-2"
// // //                   >
// // //                     <ThumbsDown className="w-4 h-4" />
// // //                     No
// // //                   </Button>
// // //                 </div>
// // //               </div>

// // //               <Button 
// // //                 className="w-full"
// // //                 onClick={() => {
// // //                   setActiveSheet(null);
// // //                   setActiveButtons(prev => ({...prev, flag: false}));
// // //                 }}
// // //               >
// // //                 Submit Feedback
// // //               </Button>
// // //             </div>
// // //           )}
// // //           {activeSheet === 'comments' && (
// // //             <div className="pt-6">
// // //               <h3 className="text-lg font-medium mb-4">Comments ({question.comments})</h3>
// // //               <p>Discussion thread for this question</p>
// // //             </div>
// // //           )}
// // //         </SheetContent>
// // //       </Sheet>
// // //     </div>
// // //   );
// // // };

// // // // Quiz Container Component
// // // const QuizCardsContainer = () => {
// // //   // Sample questions data
// // //   const questions = [
// // //     {
// // //       id: 1,
// // //       text: "What is the capital of France?",
// // //       choices: [
// // //         { id: 'a', text: 'London', percentage: 15 },
// // //         { id: 'b', text: 'Paris', percentage: 75, correct: true },
// // //         { id: 'c', text: 'Berlin', percentage: 5 },
// // //         { id: 'd', text: 'Madrid', percentage: 5 }
// // //       ],
// // //       explanation: "Paris is the capital and largest city of France.",
// // //       comments: 42
// // //     },
// // //     {
// // //       id: 2,
// // //       text: "Which programming language was created by Brendan Eich?",
// // //       choices: [
// // //         { id: 'a', text: 'Python', percentage: 10 },
// // //         { id: 'b', text: 'Java', percentage: 15 },
// // //         { id: 'c', text: 'JavaScript', percentage: 68, correct: true },
// // //         { id: 'd', text: 'PHP', percentage: 7 }
// // //       ],
// // //       explanation: "JavaScript was created by Brendan Eich while he was working at Netscape Communications Corporation.",
// // //       comments: 28
// // //     },
// // //     {
// // //       id: 3,
// // //       text: "What is the largest planet in our solar system?",
// // //       choices: [
// // //         { id: 'a', text: 'Saturn', percentage: 25 },
// // //         { id: 'b', text: 'Jupiter', percentage: 65, correct: true },
// // //         { id: 'c', text: 'Neptune', percentage: 5 },
// // //         { id: 'd', text: 'Mars', percentage: 5 }
// // //       ],
// // //       explanation: "Jupiter is the largest planet in our solar system, with a mass more than twice that of all other planets combined.",
// // //       comments: 35
// // //     }
// // //   ];

// // //   return (
// // //     <div className="min-h-screen bg-gray-50 px-4 py-6">
// // //       <div className="max-w-6xl mx-auto space-y-6">
// // //         {questions.map((question) => (
// // //           <Card key={question.id} className="shadow-md">
// // //             <CardContent className="p-0">
// // //               <QuizQuestion question={question} />
// // //             </CardContent>
// // //           </Card>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // export default QuizCardsContainer;
// // // 'use client';

// // // import React, { useState } from 'react';
// // // import { Card, CardContent } from "@/components/ui/card";
// // // import { Sheet, SheetContent } from '@/components/ui/sheet';
// // // import { Button } from '@/components/ui/button';
// // // import { Checkbox } from '@/components/ui/checkbox';
// // // import { Textarea } from '@/components/ui/textarea';
// // // import { Pin, Lightbulb, Flag, MessageCircle, ThumbsUp, ThumbsDown, Check, X } from 'lucide-react';

// // // // Quiz Question Component
// // // const QuizQuestion = ({ question }) => {
// // //   const [selectedAnswer, setSelectedAnswer] = useState(null);
// // //   const [showAnswers, setShowAnswers] = useState(false);
// // //   const [isPinned, setPinned] = useState(false);
// // //   const [activeSheet, setActiveSheet] = useState(null);
// // //   const [activeButtons, setActiveButtons] = useState({
// // //     flag: false,
// // //     comments: false,
// // //     lightbulb: false
// // //   });
// // //   const [feedbackIssues, setFeedbackIssues] = useState([]);
// // //   const [feedbackText, setFeedbackText] = useState('');
// // //   const [feedbackHelpful, setFeedbackHelpful] = useState(null);

// // //   const handleAnswerClick = (choiceId) => {
// // //     if (showAnswers && selectedAnswer === choiceId) {
// // //       setSelectedAnswer(null);
// // //       setShowAnswers(false);
// // //     } else {
// // //       setSelectedAnswer(choiceId);
// // //       setShowAnswers(true);
// // //     }
// // //   };

// // //   const getChoiceStyle = (choice) => {
// // //     const baseStyle = 'w-full p-4 text-left border rounded-lg transition-colors flex justify-between items-center';
// // //     if (!showAnswers) return `${baseStyle} bg-white hover:bg-gray-50`;
    
// // //     if (choice.id === selectedAnswer) {
// // //       return `${baseStyle} ${choice.correct ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500'}`;
// // //     }
// // //     if (choice.correct) return `${baseStyle} bg-green-100 border-green-500`;
// // //     return `${baseStyle} bg-gray-50`;
// // //   };

// // //   const toggleButton = (buttonName) => {
// // //     setActiveButtons(prev => ({
// // //       ...prev,
// // //       [buttonName]: !prev[buttonName]
// // //     }));
// // //   };

// // //   const issues = [
// // //     { id: 'typo', label: 'Typo' },
// // //     { id: 'incorrect', label: 'Question is incorrect' },
// // //     { id: 'unclear', label: 'Question is unclear' },
// // //     { id: 'other', label: 'Other issue' }
// // //   ];

// // //   return (
// // //     <div className="relative bg-white rounded-lg overflow-hidden">
// // //       {/* Pin Button */}
// // //       <button 
// // //         onClick={() => setPinned(!isPinned)} 
// // //         className="absolute top-4 right-4 z-10"
// // //       >
// // //         <Pin className={`w-5 h-5 ${isPinned ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} />
// // //       </button>

// // //       {/* Question Text */}
// // //       <div className="pt-12 px-4 pb-6">
// // //         <h2 className="text-xl font-medium">{question.text}</h2>
// // //       </div>

// // //       {/* Answer Choices */}
// // //       <div className="px-4 space-y-3 mb-20">
// // //         {question.choices.map((choice) => (
// // //           <button
// // //             key={choice.id}
// // //             onClick={() => handleAnswerClick(choice.id)}
// // //             className={getChoiceStyle(choice)}
// // //           >
// // //             <div className="flex items-center gap-3">
// // //               <span className="font-medium">{choice.id.toUpperCase()}.</span>
// // //               <span>{choice.text}</span>
// // //             </div>
// // //             <div className="flex items-center gap-2">
// // //               {showAnswers && (
// // //                 <>
// // //                   <span className="text-sm text-gray-500">
// // //                     {choice.percentage}%
// // //                   </span>
// // //                   {choice.correct && <Check className="w-5 h-5 text-green-500" />}
// // //                   {choice.id === selectedAnswer && !choice.correct && 
// // //                     <X className="w-5 h-5 text-red-500" />
// // //                   }
// // //                 </>
// // //               )}
// // //             </div>
// // //           </button>
// // //         ))}
// // //       </div>

// // //       {/* Action Buttons */}
// // //       <div className="absolute bottom-0 left-0 right-0 bg-white border-t p-4 rounded-b-lg">
// // //         <div className="flex justify-between">
// // //           <button 
// // //             onClick={() => {
// // //               toggleButton('flag');
// // //               setActiveSheet('feedback');
// // //             }}
// // //             className="p-2 rounded-full"
// // //           >
// // //             <Flag className={`w-5 h-5 ${activeButtons.flag ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} />
// // //           </button>
// // //           <button 
// // //             onClick={() => {
// // //               toggleButton('comments');
// // //               setActiveSheet('comments');
// // //             }}
// // //             className="p-2 rounded-full flex items-center"
// // //           >
// // //             <MessageCircle 
// // //               className={`w-5 h-5 ${activeButtons.comments ? 'text-blue-500 fill-blue-500' : 'text-gray-600'}`} 
// // //             />
// // //             <span className="ml-1 text-sm text-gray-600">{question.comments}</span>
// // //           </button>
// // //           <button 
// // //             onClick={() => {
// // //               toggleButton('lightbulb');
// // //               setActiveSheet('explanation');
// // //             }}
// // //             className="p-2 rounded-full"
// // //           >
// // //             <Lightbulb 
// // //               className={`w-5 h-5 ${activeButtons.lightbulb ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'}`} 
// // //             />
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Side Sheets */}
// // //       <Sheet open={activeSheet !== null} onOpenChange={() => {
// // //         setActiveSheet(null);
// // //         setActiveButtons({
// // //           flag: false,
// // //           comments: false,
// // //           lightbulb: false
// // //         });
// // //       }}>
// // //         <SheetContent className="w-full sm:max-w-md">
// // //           {activeSheet === 'explanation' && (
// // //             <div className="pt-6">
// // //               <h3 className="text-lg font-medium mb-4">Explanation</h3>
// // //               <p>{question.explanation}</p>
// // //             </div>
// // //           )}
// // //           {activeSheet === 'feedback' && (
// // //             <div className="pt-6 space-y-6">
// // //               <h3 className="text-lg font-medium">Provide Feedback</h3>
              
// // //               <div className="space-y-4">
// // //                 {issues.map((issue) => (
// // //                   <div key={issue.id} className="flex items-center space-x-2">
// // //                     <Checkbox 
// // //                       id={issue.id}
// // //                       checked={feedbackIssues.includes(issue.id)}
// // //                       onCheckedChange={(checked) => {
// // //                         if (checked) {
// // //                           setFeedbackIssues([...feedbackIssues, issue.id]);
// // //                         } else {
// // //                           setFeedbackIssues(feedbackIssues.filter(i => i !== issue.id));
// // //                         }
// // //                       }}
// // //                     />
// // //                     <label htmlFor={issue.id}>{issue.label}</label>
// // //                   </div>
// // //                 ))}
// // //               </div>

// // //               <Textarea
// // //                 placeholder="Describe the issue..."
// // //                 value={feedbackText}
// // //                 onChange={(e) => setFeedbackText(e.target.value)}
// // //                 className="min-h-[100px]"
// // //               />

// // //               <div className="space-y-4">
// // //                 <p className="font-medium">Did you find this question helpful?</p>
// // //                 <div className="flex gap-4">
// // //                   <Button
// // //                     variant={feedbackHelpful === true ? "default" : "outline"}
// // //                     onClick={() => setFeedbackHelpful(true)}
// // //                     className="flex items-center gap-2"
// // //                   >
// // //                     <ThumbsUp className="w-4 h-4" />
// // //                     Yes
// // //                   </Button>
// // //                   <Button
// // //                     variant={feedbackHelpful === false ? "default" : "outline"}
// // //                     onClick={() => setFeedbackHelpful(false)}
// // //                     className="flex items-center gap-2"
// // //                   >
// // //                     <ThumbsDown className="w-4 h-4" />
// // //                     No
// // //                   </Button>
// // //                 </div>
// // //               </div>

// // //               <Button 
// // //                 className="w-full"
// // //                 onClick={() => {
// // //                   // Here you would typically submit the feedback to your backend
// // //                   setActiveSheet(null);
// // //                   setActiveButtons(prev => ({...prev, flag: false}));
// // //                   setFeedbackIssues([]);
// // //                   setFeedbackText('');
// // //                   setFeedbackHelpful(null);
// // //                 }}
// // //               >
// // //                 Submit Feedback
// // //               </Button>
// // //             </div>
// // //           )}
// // //           {activeSheet === 'comments' && (
// // //             <div className="pt-6">
// // //               <h3 className="text-lg font-medium mb-4">Comments ({question.comments})</h3>
// // //               <p>Discussion thread for this question</p>
// // //             </div>
// // //           )}
// // //         </SheetContent>
// // //       </Sheet>
// // //     </div>
// // //   );
// // // };

// // // // Quiz Container Component
// // // const QuizCardsContainer = ({ questions = [] }) => {
// // //   return (
// // //     <div className="space-y-6">
// // //       {questions.map((question) => (
// // //         <Card key={question.id} className="shadow-md">
// // //           <CardContent className="p-0">
// // //             <QuizQuestion question={question} />
// // //           </CardContent>
// // //         </Card>
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // export default QuizCardsContainer;
// // // QuizCardsContainer.js
// // 'use client';

// // import React from 'react';
// // import { Card, CardContent } from '@/components/ui/card';
// // import QuizQuestion from './QuizQuestion';

// // const QuizCardsContainer = ({ questions = [] }) => {
// //   return (
// //     <div className="space-y-6">
// //       {questions.map((question) => (
// //         <Card key={question.id} className="shadow-md">
// //           <CardContent className="p-0">
// //             <QuizQuestion question={question} />
// //           </CardContent>
// //         </Card>
// //       ))}
// //     </div>
// //   );
// // };

// // export default QuizCardsContainer;
// import React, { useState } from 'react';
// import { Card, CardContent } from "@/components/ui/card";
// import { Sheet, SheetContent } from '@/components/ui/sheet';
// import { Pin, Lightbulb, Flag, MessageCircle, Check, X } from 'lucide-react';
// import Feedback from './feedback';
// import Comments from './comments';
// import Explanation from './explanation';

// const QuizQuestion = ({ question }) => {
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [showAnswers, setShowAnswers] = useState(false);
//   const [isPinned, setPinned] = useState(false);
//   const [activeSheet, setActiveSheet] = useState(null);
//   const [activeButtons, setActiveButtons] = useState({
//     flag: false,
//     comments: false,
//     lightbulb: false
//   });

//   const handleAnswerClick = (choiceId) => {
//     if (showAnswers && selectedAnswer === choiceId) {
//       setSelectedAnswer(null);
//       setShowAnswers(false);
//     } else {
//       setSelectedAnswer(choiceId);
//       setShowAnswers(true);
//     }
//   };

//   const getChoiceStyle = (choice) => {
//     const baseStyle = 'w-full p-4 text-left border rounded-lg transition-all flex justify-between items-center';
    
//     if (!showAnswers) return `${baseStyle} bg-gradient-to-r from-[#f5f9ff] to-[#f8faff] border-blue-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-50 hover:border-blue-200`;
    
//     if (choice.id === selectedAnswer) {
//       return `${baseStyle} ${choice.correct ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500'}`;
//     }
//     if (choice.correct) return `${baseStyle} bg-green-100 border-green-500`;
//     return `${baseStyle} bg-[#f5f9ff] border-blue-100`;
//   };

//   const toggleButton = (buttonName) => {
//     setActiveButtons(prev => ({
//       ...prev,
//       [buttonName]: !prev[buttonName]
//     }));
//   };

//   return (
//     <div className="relative bg-white rounded-lg overflow-hidden border-2 border-blue-100">
//       {/* Pin Button */}
//       <button 
//         onClick={() => setPinned(!isPinned)} 
//         className="absolute top-4 right-4 z-10"
//       >
//         <Pin className={`w-5 h-5 ${isPinned ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} />
//       </button>

//       {/* Question Text */}
//       <div className="pt-12 px-4 pb-6">
//         <h2 className="text-xl font-medium text-[#1b2a6f]">{question.text}</h2>
//       </div>

//       {/* Answer Choices */}
//       <div className="px-4 space-y-3 mb-20">
//         {question.choices.map((choice) => (
//           <button
//             key={choice.id}
//             onClick={() => handleAnswerClick(choice.id)}
//             className={getChoiceStyle(choice)}
//           >
//             <div className="flex items-center gap-3">
//               <span className="font-medium">{choice.id.toUpperCase()}.</span>
//               <span className="text-[#1b2a6f]">{choice.text}</span>
//             </div>
//             <div className="flex items-center gap-2">
//               {showAnswers && (
//                 <>
//                   <span className="text-sm text-gray-500">
//                     {choice.percentage}%
//                   </span>
//                   {choice.correct && <Check className="w-5 h-5 text-green-500" />}
//                   {choice.id === selectedAnswer && !choice.correct && 
//                     <X className="w-5 h-5 text-red-500" />
//                   }
//                 </>
//               )}
//             </div>
//           </button>
//         ))}
//       </div>

//       {/* Action Buttons */}
//       <div className="absolute bottom-0 left-0 right-0 bg-white border-t p-4 rounded-b-lg">
//         <div className="flex justify-between">
//           <button 
//             onClick={() => {
//               toggleButton('flag');
//               setActiveSheet('feedback');
//             }}
//             className="p-2 rounded-full hover:bg-gray-100"
//           >
//             <Flag className={`w-5 h-5 ${activeButtons.flag ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} />
//           </button>
//           <button 
//             onClick={() => {
//               toggleButton('comments');
//               setActiveSheet('comments');
//             }}
//             className="p-2 rounded-full flex items-center hover:bg-gray-100"
//           >
//             <MessageCircle 
//               className={`w-5 h-5 ${activeButtons.comments ? 'text-blue-500 fill-blue-500' : 'text-gray-600'}`} 
//             />
//             <span className="ml-1 text-sm text-gray-600">{question.comments}</span>
//           </button>
//           <button 
//             onClick={() => {
//               toggleButton('lightbulb');
//               setActiveSheet('explanation');
//             }}
//             className="p-2 rounded-full hover:bg-gray-100"
//           >
//             <Lightbulb 
//               className={`w-5 h-5 ${activeButtons.lightbulb ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'}`} 
//             />
//           </button>
//         </div>
//       </div>

//       {/* Side Sheet */}
//       <Sheet open={activeSheet !== null} onOpenChange={() => {
//         setActiveSheet(null);
//         setActiveButtons({
//           flag: false,
//           comments: false,
//           lightbulb: false
//         });
//       }}>
//         <SheetContent className="w-full sm:max-w-md">
//           {activeSheet === 'explanation' && (
//             <Explanation explanation={question.explanation} imagePlaceholder={true} />
//           )}
//           {activeSheet === 'feedback' && (
//             <Feedback onSubmit={() => {
//               setActiveSheet(null);
//               setActiveButtons(prev => ({ ...prev, flag: false }));
//             }} />
//           )}
//           {activeSheet === 'comments' && (
//             <Comments initialComments={[]} />
//           )}
//         </SheetContent>
//       </Sheet>
//     </div>
//   );
// };

// const QuizCardsContainer = ({ questions = [] }) => {
//   return (
//     <div className="space-y-6">
//       {questions.map((question) => (
//         <Card key={question.id} className="shadow-sm">
//           <CardContent className="p-0">
//             <QuizQuestion question={question} />
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default QuizCardsContainer;
// components/Quiz/QuizCardsContainer.js
'use client';

import React, { Suspense } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { Pin, Lightbulb, Flag, MessageCircle, Check, X } from 'lucide-react';
import Feedback from './Feedback';
import Comments from './Comments';
import Explanation from './Explanation';

const Loading = () => (
  <div className="animate-pulse">
    <div className="h-24 bg-gray-200 rounded-md mb-4"></div>
  </div>
);

const QuizQuestion = ({ question }) => {
  const [selectedAnswer, setSelectedAnswer] = React.useState(null);
  const [showExplanation, setShowExplanation] = React.useState(false);
  const [showComments, setShowComments] = React.useState(false);
  const [showFeedback, setShowFeedback] = React.useState(false);
  const [isPinned, setIsPinned] = React.useState(question.isPinned);

  const handleAnswerSelect = (choiceId) => {
    setSelectedAnswer(choiceId);
  };

  const togglePin = () => {
    setIsPinned(!isPinned);
  };

  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        {/* Question header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <p className="text-lg font-medium text-gray-900">{question.text}</p>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <button
              onClick={togglePin}
              className={`p-2 rounded-full transition-colors ${
                isPinned ? 'bg-yellow-100 text-yellow-600' : 'hover:bg-gray-100 text-gray-400'
              }`}
            >
              <Pin className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Answer choices */}
        <div className="space-y-3 mb-6">
          {question.choices.map((choice) => (
            <div
              key={choice.id}
              onClick={() => handleAnswerSelect(choice.id)}
              className={`p-4 rounded-lg border cursor-pointer transition-all ${
                selectedAnswer === choice.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-200'
              }`}
            >
              <div className="flex items-center">
                <span className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center mr-3 text-sm font-medium">
                  {choice.id.toUpperCase()}
                </span>
                <p className="flex-1">{choice.text}</p>
                {selectedAnswer === choice.id && (
                  <span className="ml-3">
                    {question.correct_choices.includes(choice.id) ? (
                      <Check className="w-6 h-6 text-green-500" />
                    ) : (
                      <X className="w-6 h-6 text-red-500" />
                    )}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3 text-sm">
          <button
            onClick={() => setShowExplanation(true)}
            className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
          >
            <Lightbulb className="w-4 h-4" />
            Explanation
          </button>
          <button
            onClick={() => setShowComments(true)}
            className="flex items-center gap-1 text-gray-600 hover:text-gray-700"
          >
            <MessageCircle className="w-4 h-4" />
            Comments
          </button>
          <button
            onClick={() => setShowFeedback(true)}
            className="flex items-center gap-1 text-gray-600 hover:text-gray-700"
          >
            <Flag className="w-4 h-4" />
            Report
          </button>
        </div>

        {/* Sliding panels */}
        <Sheet open={showExplanation} onOpenChange={setShowExplanation}>
          <SheetContent>
            <Suspense fallback={<Loading />}>
              <Explanation explanation={question.explanation} />
            </Suspense>
          </SheetContent>
        </Sheet>

        <Sheet open={showComments} onOpenChange={setShowComments}>
          <SheetContent>
            <Suspense fallback={<Loading />}>
              <Comments />
            </Suspense>
          </SheetContent>
        </Sheet>

        <Sheet open={showFeedback} onOpenChange={setShowFeedback}>
          <SheetContent>
            <Suspense fallback={<Loading />}>
              <Feedback onSubmit={() => setShowFeedback(false)} />
            </Suspense>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};

const QuizCardsContainer = ({ questions }) => {
  return (
    <div className="space-y-6">
      {questions.map((question) => (
        <Suspense key={question.id} fallback={<Loading />}>
          <QuizQuestion question={question} />
        </Suspense>
      ))}
    </div>
  );
};

export default QuizCardsContainer;