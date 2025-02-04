// // // // "use client";

// // // // import React, { useState } from 'react';
// // // // import { Button } from '@/components/ui/button';
// // // // import { Input } from '@/components/ui/input';
// // // // import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from '@/components/ui/sheet';
// // // // import { Card, CardContent } from "@/components/ui/card";
// // // // import { Textarea } from "@/components/ui/textarea";
// // // // import { Checkbox } from "@/components/ui/checkbox";
// // // // import { 
// // // //   DropdownMenu,
// // // //   DropdownMenuContent,
// // // //   DropdownMenuItem,
// // // //   DropdownMenuTrigger,
// // // // } from "@/components/ui/dropdown-menu";
// // // // import {
// // // //   Select,
// // // //   SelectContent,
// // // //   SelectItem,
// // // //   SelectTrigger,
// // // //   SelectValue,
// // // // } from '@/components/ui/select';
// // // // import { 
// // // //   ArrowLeft, 
// // // //   Search, 
// // // //   MessageSquare, 
// // // //   Flag,
// // // //   Filter, 
// // // //   Brain, 
// // // //   CheckCircle2, 
// // // //   XCircle,
// // // //   AlertTriangle 
// // // // } from 'lucide-react';
// // // // import { Badge } from "@/components/ui/badge";
// // // // import { questions } from '@/app/data/questions';

// // // // const QuizReview = () => {
// // // //   const [activeFilter, setActiveFilter] = useState('all');
// // // //   const [selectedSubject, setSelectedSubject] = useState('all');
// // // //   const [searchQuery, setSearchQuery] = useState('');
// // // //   const [newComment, setNewComment] = useState('');
// // // //   const [selectedAnswers, setSelectedAnswers] = useState({});
// // // //   const [pinnedQuestions, setPinnedQuestions] = useState(new Set());
// // // //   const [showFeedback, setShowFeedback] = useState({});
// // // //   const [feedbackText, setFeedbackText] = useState({});
// // // //   const [feedbackOptions, setFeedbackOptions] = useState({});
// // // //   const [showSearch, setShowSearch] = useState(false);

// // // //   const filters = [
// // // //     { id: 'all', label: 'All', icon: '📝', count: 100 },
// // // //     { id: 'pinned', label: 'Pinned', icon: '📌', count: 32 },
// // // //     { id: 'correct', label: 'Correct', icon: '✅', count: 57 },
// // // //     { id: 'wrong', label: 'Wrong', icon: '❌', count: 43 },
// // // //     { id: 'new', label: 'New', icon: '⭕', count: 43 },
// // // //   ];

// // // //   const feedbackChoices = [
// // // //     { id: 'typo', label: 'Contains typo' },
// // // //     { id: 'unclear', label: 'Question is unclear' },
// // // //     { id: 'wrong', label: 'Answer seems incorrect' },
// // // //     { id: 'explanation', label: 'Explanation needs improvement' }
// // // //   ];

// // // //   const getHeroText = () => {
// // // //     switch(activeFilter) {
// // // //       case 'pinned': return 'Pinned Questions';
// // // //       case 'correct': return 'Mastered Topics';
// // // //       case 'wrong': return 'Need Review';
// // // //       case 'new': return 'Ready to Try';
// // // //       default: return 'Exam Hero';
// // // //     }
// // // //   };

// // // //   const handleAnswerSelect = (questionId, choiceId) => {
// // // //     setSelectedAnswers(prev => ({
// // // //       ...prev,
// // // //       [questionId]: prev[questionId] === choiceId ? null : choiceId
// // // //     }));
// // // //   };

// // // //   const togglePin = (questionId) => {
// // // //     setPinnedQuestions(prev => {
// // // //       const newPinned = new Set(prev);
// // // //       if (newPinned.has(questionId)) {
// // // //         newPinned.delete(questionId);
// // // //       } else {
// // // //         newPinned.add(questionId);
// // // //       }
// // // //       return newPinned;
// // // //     });
// // // //   };

// // // //   const handleFeedbackOptionsChange = (questionId, optionId) => {
// // // //     setFeedbackOptions(prev => ({
// // // //       ...prev,
// // // //       [questionId]: {
// // // //         ...prev[questionId],
// // // //         [optionId]: !prev?.[questionId]?.[optionId]
// // // //       }
// // // //     }));
// // // //   };

// // // //   const submitFeedback = (questionId) => {
// // // //     const selectedOptions = feedbackOptions[questionId];
// // // //     const feedbackMessage = feedbackText[questionId];
// // // //     console.log('Feedback submitted:', { questionId, selectedOptions, feedbackMessage });
// // // //     setShowFeedback(prev => ({ ...prev, [questionId]: false }));
// // // //   };

// // // //   return (
// // // //     <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
// // // //       {/* Header */}
// // // //       <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-40">
// // // //         <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
// // // //           <div className="flex items-center space-x-4">
// // // //             <Button variant="ghost" size="icon">
// // // //               <ArrowLeft className="h-5 w-5" />
// // // //             </Button>
// // // //             <h1 className="text-xl font-semibold">Scoorly</h1>
// // // //           </div>
// // // //         </div>
// // // //       </header>

// // // //       <main className="mt-20 px-4 pb-20 max-w-7xl mx-auto">
// // // //         {/* Hero Text and Search */}
// // // //         <div className="mb-12 text-center">
// // // //           <div className="flex justify-center mb-4">
// // // //             <Brain className="h-12 w-12 text-blue-600" />
// // // //           </div>
// // // //           <h2 className="text-4xl font-bold mb-8">{getHeroText()}</h2>
          
// // // //           <div className="max-w-2xl mx-auto space-y-4">
// // // //             <div className="relative">
// // // //               <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
// // // //               <Input
// // // //                 placeholder="Search questions..."
// // // //                 value={searchQuery}
// // // //                 onChange={(e) => setSearchQuery(e.target.value)}
// // // //                 className="pl-10 h-12 text-lg"
// // // //               />
// // // //             </div>
// // // //             <Select value={selectedSubject} onValueChange={setSelectedSubject}>
// // // //               <SelectTrigger className="h-12 text-lg">
// // // //                 <SelectValue placeholder="Select Subject" />
// // // //               </SelectTrigger>
// // // //               <SelectContent>
// // // //                 {['All Subjects', 'Mathematics', 'Science', 'History', 'English'].map((subject) => (
// // // //                   <SelectItem key={subject} value={subject.toLowerCase()}>
// // // //                     {subject}
// // // //                   </SelectItem>
// // // //                 ))}
// // // //               </SelectContent>
// // // //             </Select>
// // // //           </div>
// // // //         </div>

// // // //         {/* Desktop Filter Buttons */}
// // // //         <div className="hidden md:grid grid-cols-5 gap-4 mb-8">
// // // //           {filters.map((filter) => (
// // // //             <Button
// // // //               key={filter.id}
// // // //               variant={activeFilter === filter.id ? "default" : "outline"}
// // // //               onClick={() => setActiveFilter(filter.id)}
// // // //               className="h-14 text-base"
// // // //             >
// // // //               <span className="text-xl mr-2">{filter.icon}</span>
// // // //               <span>{filter.label}</span>
// // // //               <span className="ml-2 opacity-70">({filter.count})</span>
// // // //             </Button>
// // // //           ))}
// // // //         </div>

// // // //         {/* Questions List */}
// // // //         <div className="space-y-8">
// // // //           {questions.map((question) => (
// // // //             <Card
// // // //               key={question.id}
// // // //               className="relative bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
// // // //             >
// // // //               <CardContent className="p-8">
// // // //                 {/* Pin Button */}
// // // //                 <Button 
// // // //                   variant="ghost" 
// // // //                   className="absolute top-4 right-4 text-2xl"
// // // //                   onClick={() => togglePin(question.id)}
// // // //                 >
// // // //                   <span>{pinnedQuestions.has(question.id) ? '📌' : '📍'}</span>
// // // //                 </Button>

// // // //                 {/* Subject Badge */}
// // // //                 <Badge className="mb-4 text-sm" variant="secondary">
// // // //                   {question.subject}
// // // //                 </Badge>

// // // //                 {/* Question */}
// // // //                 <h3 className="text-xl font-medium mb-8">{question.question}</h3>

// // // //                 {/* Choices */}
// // // //                 <div className="space-y-4 mb-8">
// // // //                   {question.choices.map((choice) => {
// // // //                     const isSelected = selectedAnswers[question.id] === choice.id;
// // // //                     return (
// // // //                       <button
// // // //                         key={choice.id}
// // // //                         onClick={() => handleAnswerSelect(question.id, choice.id)}
// // // //                         className={`w-full text-left p-6 rounded-lg border-2 ${
// // // //                           isSelected
// // // //                             ? isSelected && choice.correct
// // // //                               ? 'bg-green-50 border-green-500'
// // // //                               : 'bg-red-50 border-red-500'
// // // //                             : 'border-gray-300 hover:bg-gray-50'
// // // //                         } transition-colors duration-200`}
// // // //                       >
// // // //                         <div className="flex items-center justify-between">
// // // //                           <div className="flex items-center space-x-3">
// // // //                             <span className="font-medium text-lg">{choice.id.toUpperCase()}.</span>
// // // //                             <span className="text-lg">{choice.text}</span>
// // // //                           </div>
// // // //                           {isSelected && (
// // // //                             <div className="flex items-center space-x-4">
// // // //                               <span className="text-gray-500">{choice.percentage}%</span>
// // // //                               {choice.correct ? (
// // // //                                 <CheckCircle2 className="h-6 w-6 text-green-500" />
// // // //                               ) : (
// // // //                                 <XCircle className="h-6 w-6 text-red-500" />
// // // //                               )}
// // // //                             </div>
// // // //                           )}
// // // //                         </div>
// // // //                       </button>
// // // //                     );
// // // //                   })}
// // // //                 </div>

// // // //                 {/* Stats and Action Buttons */}
// // // //                 <div className="flex flex-col space-y-4">
// // // //                   {selectedAnswers[question.id] && (
// // // //                     <p className="text-gray-600">
// // // //                       {Math.round((question.correctAttempts / question.totalAttempts) * 100)}% of users answered correctly
// // // //                     </p>
// // // //                   )}

// // // //                   <div className="flex gap-2">
// // // //                     {/* Explanation */}
// // // //                     <Sheet>
// // // //                       <SheetTrigger asChild>
// // // //                         <Button variant="outline" className="flex-1">
// // // //                           <span className="text-xl">💡</span>
// // // //                         </Button>
// // // //                       </SheetTrigger>
// // // //                       <SheetContent>
// // // //                         <SheetHeader>
// // // //                           <SheetTitle>Explanation</SheetTitle>
// // // //                         </SheetHeader>
// // // //                         <div className="mt-6">
// // // //                           <p className="text-lg">{question.explanation}</p>
// // // //                         </div>
// // // //                       </SheetContent>
// // // //                     </Sheet>

// // // //                     {/* Comments */}
// // // //                     <Sheet>
// // // //                       <SheetTrigger asChild>
// // // //                         <Button variant="outline" className="flex-1">
// // // //                           <MessageSquare className="h-5 w-5 mr-2" />
// // // //                           {question.comments.length}
// // // //                         </Button>
// // // //                       </SheetTrigger>
// // // //                       <SheetContent>
// // // //                         <SheetHeader>
// // // //                           <SheetTitle>Comments</SheetTitle>
// // // //                         </SheetHeader>
// // // //                         <div className="mt-6 flex flex-col h-full">
// // // //                           <div className="flex-1 space-y-4">
// // // //                             {question.comments.map((comment, idx) => (
// // // //                               <div key={idx} className="border-b border-gray-200 pb-4">
// // // //                                 <p className="font-medium text-sm">{comment.user}</p>
// // // //                                 <p className="text-gray-600">{comment.text}</p>
// // // //                               </div>
// // // //                             ))}
// // // //                           </div>
// // // //                           <div className="mt-6 space-y-4">
// // // //                             <Textarea
// // // //                               placeholder="Add a comment..."
// // // //                               value={newComment}
// // // //                               onChange={(e) => setNewComment(e.target.value)}
// // // //                               className="min-h-[100px]"
// // // //                             />
// // // //                             <Button className="w-full">Post Comment</Button>
// // // //                           </div>
// // // //                         </div>
// // // //                       </SheetContent>
// // // //                     </Sheet>

// // // //                     {/* Report Issue */}
// // // //                     <Sheet>
// // // //                       <SheetTrigger asChild>
// // // //                         <Button variant="outline" className="flex-1">
// // // //                           <span className="text-xl">🚩</span>
// // // //                         </Button>
// // // //                       </SheetTrigger>
// // // //                       <SheetContent>
// // // //                         <SheetHeader>
// // // //                           <SheetTitle>Report Issue</SheetTitle>
// // // //                         </SheetHeader>
// // // //                         <div className="mt-6 space-y-6">
// // // //                           <div className="space-y-4">
// // // //                             {feedbackChoices.map((option) => (
// // // //                               <div key={option.id} className="flex items-center space-x-2">
// // // //                                 <Checkbox
// // // //                                   id={`${question.id}-${option.id}`}
// // // //                                   checked={feedbackOptions?.[question.id]?.[option.id]}
// // // //                                   onCheckedChange={() => handleFeedbackOptionsChange(question.id, option.id)}
// // // //                                 />
// // // //                                 <label 
// // // //                                   htmlFor={`${question.id}-${option.id}`}
// // // //                                   className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
// // // //                                 >
// // // //                                   {option.label}
// // // //                                 </label>
// // // //                               </div>
// // // //                             ))}
// // // //                           </div>
// // // //                           <Textarea
// // // //                             placeholder="Provide additional details..."
// // // //                             value={feedbackText[question.id] || ''}
// // // //                             onChange={(e) => setFeedbackText(prev => ({
// // // //                               ...prev,
// // // //                               [question.id]: e.target.value
// // // //                             }))}
// // // //                             className="min-h-[100px]"
// // // //                           />
// // // //                           <Button 
// // // //                             className="w-full" 
// // // //                             onClick={() => submitFeedback(question.id)}
// // // //                           >
// // // //                             Submit Feedback
// // // //                           </Button>
// // // //                         </div>
// // // //                       </SheetContent>
// // // //                     </Sheet>
// // // //                   </div>
// // // //                 </div>
// // // //               </CardContent>
// // // //             </Card>
// // // //           ))}
// // // //         </div>

// // // //         {/* Floating Action Buttons */}
// // // //         <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
// // // //           <Button 
// // // //             size="lg" 
// // // //             className="h-14 w-14 rounded-full shadow-lg"
// // // //             onClick={() => setShowSearch(true)}
// // // //           >
// // // //             <Search className="h-6 w-6" />
// // // //           </Button>
          
// // // //           <DropdownMenu>
// // // //             <DropdownMenuTrigger asChild>
// // // //               <Button 
// // // //                 size="lg" 
// // // //                 className="h-14 w-14 rounded-full shadow-lg"
// // // //               >
// // // //                 <Filter className="h-6 w-6" />
// // // //               </Button>
// // // //             </DropdownMenuTrigger>
// // // //             <DropdownMenuContent align="end" className="w-56">
// // // //               {filters.map((filter) => (
// // // //                 <DropdownMenuItem
// // // //                   key={filter.id}
// // // //                   onClick={() => setActiveFilter(filter.id)}
// // // //                   className={`flex items-center space-x-2 px-4 py-2 ${
// // // //                     activeFilter === filter.id ? 'bg-blue-50' : ''
// // // //                   }`}
// // // //                 >
// // // //                   <span>{filter.icon}</span>
// // // //                   <span>{filter.label}</span>
// // // //                   <span className="ml-auto text-sm text-gray-500">
// // // //                     {filter.count}
// // // //                   </span>
// // // //                 </DropdownMenuItem>
// // // //               ))}
// // // //             </DropdownMenuContent>
// // // //           </DropdownMenu>
// // // //         </div>
// // // //       </main>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default QuizReview;

// // // // // "use client";


// // // // // import React, { useState } from 'react';
// // // // // import { Button } from '@/components/ui/button';
// // // // // import { ArrowLeft } from 'lucide-react';
// // // // // import { Card, CardContent } from "@/components/ui/card";
// // // // // import { Progress } from "@/components/ui/progress";

// // // // // import QuizHero from '@/components/v1/QuizHero';
// // // // // import FloatingActionButtons, { FilterButtons } from '@/components/v1/FloatingActionButtons';
// // // // // import QuestionCard from '@/components/v1/QuestionCard';

// // // // // export default function QuizReview() {
// // // // //   const [activeFilter, setActiveFilter] = useState('all');
// // // // //   const [selectedSubject, setSelectedSubject] = useState('all');
// // // // //   const [searchQuery, setSearchQuery] = useState('');
// // // // //   const [selectedAnswers, setSelectedAnswers] = useState({});
// // // // //   const [pinnedQuestions, setPinnedQuestions] = useState(new Set());
// // // // //   const [showScore, setShowScore] = useState(false);
// // // // //   const [progress] = useState(75);
// // // // //   const [feedbackOptions, setFeedbackOptions] = useState({});
// // // // //   const [feedbackText, setFeedbackText] = useState({});

// // // // //   // Sample questions data
// // // // //   const questions = [
// // // // //     {
// // // // //       id: 1,
// // // // //       subject: 'Mathematics',
// // // // //       question: 'What is 2 + 2?',
// // // // //       choices: [
// // // // //         { id: 'a', text: '3', correct: false, percentage: 10 },
// // // // //         { id: 'b', text: '4', correct: true, percentage: 80 },
// // // // //         { id: 'c', text: '5', correct: false, percentage: 10 },
// // // // //       ],
// // // // //       explanation: 'Basic arithmetic: 2 + 2 = 4',
// // // // //       comments: [
// // // // //         { user: 'John', text: 'Great explanation!' },
// // // // //       ]
// // // // //     },
// // // // //   ];

// // // // //   const handleAnswerSelect = (questionId, choiceId) => {
// // // // //     setSelectedAnswers(prev => ({
// // // // //       ...prev,
// // // // //       [questionId]: prev[questionId] === choiceId ? null : choiceId
// // // // //     }));
// // // // //   };

// // // // //   const togglePin = (questionId) => {
// // // // //     setPinnedQuestions(prev => {
// // // // //       const newPinned = new Set(prev);
// // // // //       if (newPinned.has(questionId)) {
// // // // //         newPinned.delete(questionId);
// // // // //       } else {
// // // // //         newPinned.add(questionId);
// // // // //       }
// // // // //       return newPinned;
// // // // //     });
// // // // //   };

// // // // //   const handleFeedbackOptionsChange = (questionId, optionId) => {
// // // // //     setFeedbackOptions(prev => ({
// // // // //       ...prev,
// // // // //       [questionId]: {
// // // // //         ...prev[questionId],
// // // // //         [optionId]: !prev?.[questionId]?.[optionId]
// // // // //       }
// // // // //     }));
// // // // //   };

// // // // //   return (
// // // // //     <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pb-24">
// // // // //       {/* Header */}
// // // // //       <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-40">
// // // // //         <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
// // // // //           <div className="flex items-center space-x-4">
// // // // //             <Button variant="ghost" size="icon">
// // // // //               <ArrowLeft className="h-5 w-5" />
// // // // //             </Button>
// // // // //             <h1 className="text-xl font-semibold">Scoorly</h1>
// // // // //           </div>
// // // // //         </div>
// // // // //       </header>

// // // // //       <main className="mt-20 px-4 max-w-7xl mx-auto">
// // // // //         {/* Hero Section */}
// // // // //         <QuizHero
// // // // //           searchQuery={searchQuery}
// // // // //           setSearchQuery={setSearchQuery}
// // // // //           selectedSubject={selectedSubject}
// // // // //           setSelectedSubject={setSelectedSubject}
// // // // //         />

// // // // //         {/* Filter Buttons */}
// // // // //         <FilterButtons 
// // // // //           activeFilter={activeFilter} 
// // // // //           setActiveFilter={setActiveFilter} 
// // // // //         />

// // // // //         {/* Questions List */}
// // // // //         <div className="space-y-8">
// // // // //           {questions.map((question) => (
// // // // //             <QuestionCard
// // // // //               key={question.id}
// // // // //               question={question}
// // // // //               selectedAnswers={selectedAnswers}
// // // // //               onAnswerSelect={handleAnswerSelect}
// // // // //               pinnedQuestions={pinnedQuestions}
// // // // //               onTogglePin={togglePin}
// // // // //               feedbackOptions={feedbackOptions}
// // // // //               onFeedbackOptionsChange={handleFeedbackOptionsChange}
// // // // //               feedbackText={feedbackText}
// // // // //               onFeedbackTextChange={(id, text) => setFeedbackText(prev => ({ ...prev, [id]: text }))}
// // // // //               onSubmitFeedback={(id) => console.log('Feedback submitted:', id)}
// // // // //             />
// // // // //           ))}
// // // // //         </div>
// // // // //       </main>

// // // // //       {/* Floating Action Button */}
// // // // //       <FloatingActionButtons 
// // // // //         onShowScore={() => setShowScore(!showScore)} 
// // // // //         activeFilter={activeFilter}
// // // // //         setActiveFilter={setActiveFilter}
// // // // //         progress={progress}
// // // // //       />

// // // // //       {/* Score Modal */}
// // // // //       {showScore && (
// // // // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
// // // // //           <Card className="w-96 p-6">
// // // // //             <CardContent>
// // // // //               <h3 className="text-2xl font-bold mb-4">Your Progress</h3>
// // // // //               <div className="space-y-4">
// // // // //                 <Progress value={progress} className="h-4" />
// // // // //                 <p className="text-center text-lg font-medium">{progress}% Complete</p>
// // // // //                 <Button 
// // // // //                   onClick={() => setShowScore(false)}
// // // // //                   className="w-full"
// // // // //                 >
// // // // //                   Close
// // // // //                 </Button>
// // // // //               </div>
// // // // //             </CardContent>
// // // // //           </Card>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // "use client"

// // // import { useState, useEffect } from "react"
// // // import {
// // //   Search,
// // //   Pin,
// // //   PinIcon as PinFilled,
// // //   Lightbulb,
// // //   Flag,
// // //   MessageCircle,
// // //   SlidersHorizontal,
// // //   Award,
// // //   Timer,
// // // } from "lucide-react"

// // // import { Button } from "@/components/ui/button"
// // // import { Badge } from "@/components/ui/badge"
// // // import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// // // import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
// // // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// // // import { Input } from "@/components/ui/input"
// // // import { ScrollArea } from "@/components/ui/scroll-area"

// // // const QuizApp = () => {
// // //   const [selectedFilter, setSelectedFilter] = useState("all")
// // //   const [sheetContent, setSheetContent] = useState(null)
// // //   const [selectedSubject, setSelectedSubject] = useState("all")
// // //   const [searchQuery, setSearchQuery] = useState("")
// // //   const [timeSpent, setTimeSpent] = useState(0)
// // //   const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false)

// // //   useEffect(() => {
// // //     const timer = setInterval(() => {
// // //       setTimeSpent((prev) => prev + 1)
// // //     }, 1000)
// // //     return () => clearInterval(timer)
// // //   }, [])

// // //   const formatTime = (seconds) => {
// // //     const mins = Math.floor(seconds / 60)
// // //     const secs = seconds % 60
// // //     return `${mins}:${secs.toString().padStart(2, "0")}`
// // //   }

// // //   // Sample data (unchanged)
// // //   const questions = [
// // //     {
// // //       id: 1,
// // //       question: "What is the capital of France?",
// // //       choices: [
// // //         { id: "a", text: "London", percentage: 15 },
// // //         { id: "b", text: "Paris", percentage: 75 },
// // //         { id: "c", text: "Berlin", percentage: 5 },
// // //         { id: "d", text: "Madrid", percentage: 5 },
// // //       ],
// // //       correctAnswer: "b",
// // //       userAnswer: null,
// // //       isPinned: false,
// // //       comments: 12,
// // //       subject: "Geography",
// // //     },  {
// // //       id: 1,
// // //       question: "What is the capital of France?",
// // //       choices: [
// // //         { id: "a", text: "London", percentage: 15 },
// // //         { id: "b", text: "Paris", percentage: 75 },
// // //         { id: "c", text: "Berlin", percentage: 5 },
// // //         { id: "d", text: "Madrid", percentage: 5 },
// // //       ],
// // //       correctAnswer: "b",
// // //       userAnswer: null,
// // //       isPinned: false,
// // //       comments: 12,
// // //       subject: "Geography",
// // //     },  
// // //   ]

// // //   const filterCounts = {
// // //     all: 100,
// // //     pinned: 32,
// // //     correct: 57,
// // //     wrong: 43,
// // //     new: 43,
// // //   }

// // //   const userScore = {
// // //     total: 100,
// // //     correct: 57,
// // //     wrong: 43,
// // //     accuracy: "57%",
// // //     streak: 5,
// // //     pinned: 32,
// // //     subjects: {
// // //       Mathematics: { total: 40, correct: 25 },
// // //       Science: { total: 35, correct: 20 },
// // //       Geography: { total: 25, correct: 12 },
// // //     },
// // //   }

// // //   const FilterControls = () => (
// // //     <div className="space-y-4">
// // //       <Select value={selectedSubject} onValueChange={setSelectedSubject}>
// // //         <SelectTrigger className="w-full">
// // //           <SelectValue placeholder="Select Subject" />
// // //         </SelectTrigger>
// // //         <SelectContent>
// // //           <SelectItem value="all">All Subjects</SelectItem>
// // //           <SelectItem value="math">Mathematics</SelectItem>
// // //           <SelectItem value="science">Science</SelectItem>
// // //           <SelectItem value="geography">Geography</SelectItem>
// // //         </SelectContent>
// // //       </Select>
// // //       <div className="flex flex-wrap justify-center gap-2">
// // //         {Object.entries(filterCounts).map(([type, count]) => (
// // //           <Badge
// // //             key={type}
// // //             variant={selectedFilter === type ? "default" : "outline"}
// // //             className="cursor-pointer"
// // //             onClick={() => setSelectedFilter(type)}
// // //           >
// // //             {type.charAt(0).toUpperCase() + type.slice(1)} ({count})
// // //           </Badge>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   )

// // //   const QuestionCard = ({ question }) => {
// // //     const [userAnswer, setUserAnswer] = useState(question.userAnswer)
// // //     const [isPinned, setIsPinned] = useState(question.isPinned)

// // //     const handleAnswer = (choiceId) => {
// // //       if (!userAnswer) {
// // //         setUserAnswer(choiceId)
// // //       }
// // //     }

// // //     return (
// // //       <Card className="mb-6">
// // //         <CardHeader className="flex flex-row items-start justify-between space-y-0">
// // //           <CardTitle className="text-xl">{question.question}</CardTitle>
// // //           <Button variant="ghost" size="icon" onClick={() => setIsPinned(!isPinned)}>
// // //             {isPinned ? <PinFilled className="h-5 w-5 text-red-500" /> : <Pin className="h-5 w-5 text-gray-400" />}
// // //           </Button>
// // //         </CardHeader>
// // //         <CardContent className="pt-4">
// // //           <div className="space-y-3">
// // //             {question.choices.map((choice) => (
// // //               <button
// // //                 key={choice.id}
// // //                 onClick={() => handleAnswer(choice.id)}
// // //                 className={`w-full text-left p-4 rounded-lg border transition-colors ${
// // //                   userAnswer === choice.id
// // //                     ? "bg-blue-50 border-blue-400"
// // //                     : userAnswer && choice.id === question.correctAnswer
// // //                       ? "bg-green-50 border-green-400"
// // //                       : "border-gray-200 hover:bg-gray-50"
// // //                 }`}
// // //               >
// // //                 <div className="flex justify-between items-center">
// // //                   <span>
// // //                     <span className="font-medium mr-2">{choice.id.toUpperCase()}.</span>
// // //                     {choice.text}
// // //                   </span>
// // //                   {userAnswer && (
// // //                     <Badge variant="secondary" className="ml-2">
// // //                       {choice.percentage}%
// // //                     </Badge>
// // //                   )}
// // //                 </div>
// // //               </button>
// // //             ))}
// // //           </div>
// // //         </CardContent>
// // //         <CardFooter className="flex justify-center gap-4">
// // //           <Button variant="ghost" size="sm" onClick={() => setSheetContent("explanation")}>
// // //             <Lightbulb className="h-4 w-4 mr-2" />
// // //             Explanation
// // //           </Button>
// // //           <Button variant="ghost" size="sm" onClick={() => setSheetContent("feedback")}>
// // //             <Flag className="h-4 w-4 mr-2" />
// // //             Feedback
// // //           </Button>
// // //           <Button variant="ghost" size="sm" onClick={() => setSheetContent("comments")}>
// // //             <MessageCircle className="h-4 w-4 mr-2" />
// // //             Comments ({question.comments})
// // //           </Button>
// // //         </CardFooter>
// // //       </Card>
// // //     )
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-gray-50">
// // //       <div className="max-w-4xl mx-auto p-4 pb-20">
// // //         <div className="sticky top-0 z-10 bg-gray-50 pb-4">
// // //           <div className="flex items-center justify-between mb-4">
// // //             <h1 className="text-2xl font-bold">Quiz Practice</h1>
// // //             <div className="flex items-center space-x-2">
// // //               <Card className="flex items-center justify-center p-2">
// // //                 <Timer size={16} className="text-purple-600 mr-2" />
// // //                 <span className="text-sm font-medium">{formatTime(timeSpent)}</span>
// // //               </Card>
// // //               <Sheet>
// // //                 <SheetTrigger asChild>
// // //                   <Button variant="outline" size="icon">
// // //                     <Award className="h-4 w-4" />
// // //                   </Button>
// // //                 </SheetTrigger>
// // //                 <SheetContent>
// // //                   <SheetHeader>
// // //                     <SheetTitle>Your Score</SheetTitle>
// // //                   </SheetHeader>
// // //                   <div className="mt-4 space-y-4">
// // //                     <div className="grid grid-cols-2 gap-4">
// // //                       <Card>
// // //                         <CardHeader className="pb-2">
// // //                           <CardTitle className="text-sm font-medium">Total</CardTitle>
// // //                         </CardHeader>
// // //                         <CardContent>
// // //                           <p className="text-2xl font-bold">{userScore.total}</p>
// // //                         </CardContent>
// // //                       </Card>
// // //                       <Card>
// // //                         <CardHeader className="pb-2">
// // //                           <CardTitle className="text-sm font-medium">Correct</CardTitle>
// // //                         </CardHeader>
// // //                         <CardContent>
// // //                           <p className="text-2xl font-bold text-green-600">{userScore.correct}</p>
// // //                         </CardContent>
// // //                       </Card>
// // //                       <Card>
// // //                         <CardHeader className="pb-2">
// // //                           <CardTitle className="text-sm font-medium">Wrong</CardTitle>
// // //                         </CardHeader>
// // //                         <CardContent>
// // //                           <p className="text-2xl font-bold text-red-600">{userScore.wrong}</p>
// // //                         </CardContent>
// // //                       </Card>
// // //                       <Card>
// // //                         <CardHeader className="pb-2">
// // //                           <CardTitle className="text-sm font-medium">Accuracy</CardTitle>
// // //                         </CardHeader>
// // //                         <CardContent>
// // //                           <p className="text-2xl font-bold">{userScore.accuracy}</p>
// // //                         </CardContent>
// // //                       </Card>
// // //                     </div>
// // //                     <Card>
// // //                       <CardHeader>
// // //                         <CardTitle>Subjects</CardTitle>
// // //                       </CardHeader>
// // //                       <CardContent>
// // //                         <ul className="space-y-2">
// // //                           {Object.entries(userScore.subjects).map(([subject, data]) => (
// // //                             <li key={subject} className="flex justify-between items-center">
// // //                               <span>{subject}</span>
// // //                               <span className="font-medium">
// // //                                 {data.correct}/{data.total}
// // //                               </span>
// // //                             </li>
// // //                           ))}
// // //                         </ul>
// // //                       </CardContent>
// // //                     </Card>
// // //                   </div>
// // //                 </SheetContent>
// // //               </Sheet>
// // //             </div>
// // //           </div>
// // //           <div className="relative mb-4">
// // //             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
// // //             <Input
// // //               type="text"
// // //               placeholder="Search questions..."
// // //               className="pl-10"
// // //               value={searchQuery}
// // //               onChange={(e) => setSearchQuery(e.target.value)}
// // //             />
// // //           </div>
// // //           <div className="hidden md:flex justify-center space-x-2 mb-4">
// // //             {Object.entries(filterCounts).map(([type, count]) => (
// // //               <Badge
// // //                 key={type}
// // //                 variant={selectedFilter === type ? "default" : "outline"}
// // //                 className="cursor-pointer"
// // //                 onClick={() => setSelectedFilter(type)}
// // //               >
// // //                 {type.charAt(0).toUpperCase() + type.slice(1)} ({count})
// // //               </Badge>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         <ScrollArea className="h-[calc(100vh-16rem)]">
// // //           <div className="space-y-6 pr-4">
// // //             {questions.map((question) => (
// // //               <QuestionCard key={question.id} question={question} />
// // //             ))}
// // //           </div>
// // //         </ScrollArea>

// // //         {/* Floating filter button */}
// // //         <div className="fixed bottom-4 right-4 md:hidden">
// // //           <Sheet open={isFilterSheetOpen} onOpenChange={setIsFilterSheetOpen}>
// // //             <SheetTrigger asChild>
// // //               <Button variant="default" size="icon" className="rounded-full h-14 w-14">
// // //                 <SlidersHorizontal className="h-6 w-6" />
// // //               </Button>
// // //             </SheetTrigger>
// // //             <SheetContent side="bottom">
// // //               <SheetHeader>
// // //                 <SheetTitle>Filter Questions</SheetTitle>
// // //               </SheetHeader>
// // //               <div className="py-4">
// // //                 <FilterControls />
// // //               </div>
// // //             </SheetContent>
// // //           </Sheet>
// // //         </div>

// // //         {/* Sheet for explanations/feedback/comments */}
// // //         <Sheet open={!!sheetContent} onOpenChange={() => setSheetContent(null)}>
// // //           <SheetContent>
// // //             <SheetHeader>
// // //               <SheetTitle>
// // //                 {sheetContent === "explanation" && "Explanation"}
// // //                 {sheetContent === "feedback" && "Feedback"}
// // //                 {sheetContent === "comments" && "Comments"}
// // //               </SheetTitle>
// // //             </SheetHeader>
// // //             <div className="mt-6">
// // //               {/* Content based on type */}
// // //               {sheetContent === "explanation" && <p>This is where the explanation for the question would go.</p>}
// // //               {sheetContent === "feedback" && <p>This is where users can provide feedback on the question.</p>}
// // //               {sheetContent === "comments" && <p>This is where users can view and add comments about the question.</p>}
// // //             </div>
// // //           </SheetContent>
// // //         </Sheet>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // export default QuizApp
'use client';
import React from 'react';
import HomeHeader from '@/components/Quiz/HHeader';
import Header from '@/components/Header';
import { usePathname } from 'next/navigation';
import HomePage from '@/components/Quiz/Homepage';

const Page = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <main className="bg-gray-50">
      {isHomePage ? <HomeHeader /> : <Header />}
      <HomePage />
    </main>
  );
};

export default Page;