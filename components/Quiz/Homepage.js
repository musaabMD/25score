// // // // // // // // "use client"
// // // // // // // // import React, { useState } from 'react';
// // // // // // // // import { Pin } from 'lucide-react';

// // // // // // // // // Mock data for exams (extended to 10)
// // // // // // // // const exams = [
// // // // // // // //   { id: 1, name: 'Math', letter: 'M', color: '#FF6B6B', category: 'Science', questions: 50, description: 'Basic mathematics and algebra' },
// // // // // // // //   { id: 2, name: 'Physics', letter: 'P', color: '#4ECDC4', category: 'Science', questions: 40, description: 'Fundamental physics concepts' },
// // // // // // // //   { id: 3, name: 'Chemistry', letter: 'C', color: '#45B7D1', category: 'Science', questions: 45, description: 'General chemistry principles' },
// // // // // // // //   { id: 4, name: 'Biology', letter: 'B', color: '#96CEB4', category: 'Science', questions: 55, description: 'Introduction to life sciences' },
// // // // // // // //   { id: 5, name: 'English', letter: 'E', color: '#7986CB', category: 'Language', questions: 60, description: 'Grammar and comprehension' },
// // // // // // // //   { id: 6, name: 'History', letter: 'H', color: '#9575CD', category: 'Humanities', questions: 48, description: 'World history fundamentals' },
// // // // // // // //   { id: 7, name: 'Geography', letter: 'G', color: '#4DB6AC', category: 'Science', questions: 42, description: 'Earth and human geography' },
// // // // // // // //   { id: 8, name: 'Economics', letter: 'E', color: '#FF8A65', category: 'Social', questions: 45, description: 'Basic economic principles' },
// // // // // // // //   { id: 9, name: 'Psychology', letter: 'P', color: '#F06292', category: 'Social', questions: 52, description: 'Introduction to psychology' },
// // // // // // // //   { id: 10, name: 'Computer', letter: 'C', color: '#64B5F6', category: 'Technology', questions: 58, description: 'Computer science basics' }
// // // // // // // // ];

// // // // // // // // const HomePage = () => {
// // // // // // // //   const [pinnedExams, setPinnedExams] = useState(new Set());

// // // // // // // //   const togglePin = (examId) => {
// // // // // // // //     setPinnedExams(prev => {
// // // // // // // //       const newPinned = new Set(prev);
// // // // // // // //       if (newPinned.has(examId)) {
// // // // // // // //         newPinned.delete(examId);
// // // // // // // //       } else {
// // // // // // // //         newPinned.add(examId);
// // // // // // // //       }
// // // // // // // //       return newPinned;
// // // // // // // //     });
// // // // // // // //   };

// // // // // // // //   const sortedExams = [...exams].sort((a, b) => {
// // // // // // // //     if (pinnedExams.has(a.id) && !pinnedExams.has(b.id)) return -1;
// // // // // // // //     if (!pinnedExams.has(a.id) && pinnedExams.has(b.id)) return 1;
// // // // // // // //     return 0;
// // // // // // // //   });

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen bg-white">
// // // // // // // //       {/* Fixed Header */}
// // // // // // // //       <div className="fixed top-0 left-0 right-0 bg-white z-50">
// // // // // // // //         <div className="pt-6 pb-4 px-4">
// // // // // // // //           <div className="max-w-3xl mx-auto text-center">
// // // // // // // //             <div 
// // // // // // // //               className="w-14 h-14 rounded-2xl mx-auto mb-3 flex items-center justify-center text-white font-medium text-xl bg-blue-500"
// // // // // // // //             >
// // // // // // // //               E
// // // // // // // //             </div>
// // // // // // // //             <h1 className="text-2xl font-semibold text-gray-900">Exam Platform</h1>
// // // // // // // //             <p className="text-sm text-gray-500 mt-1">Prepare for your future</p>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* Scrollable Content */}
// // // // // // // //       <div className="pt-28">
// // // // // // // //         <div className="max-w-3xl mx-auto">
// // // // // // // //           {sortedExams.map((exam, index) => (
// // // // // // // //             <div 
// // // // // // // //               key={exam.id}
// // // // // // // //               className="border-t border-gray-100 first:border-t-0"
// // // // // // // //             >
// // // // // // // //               <div 
// // // // // // // //                 className="flex items-center px-4 py-4 cursor-pointer hover:bg-gray-50"
// // // // // // // //                 onClick={() => console.log(`Navigating to exam ${exam.id}`)}
// // // // // // // //               >
// // // // // // // //                 {/* Exam Logo */}
// // // // // // // //                 <div 
// // // // // // // //                   className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-medium text-lg shrink-0"
// // // // // // // //                   style={{ backgroundColor: exam.color }}
// // // // // // // //                 >
// // // // // // // //                   {exam.letter}
// // // // // // // //                 </div>

// // // // // // // //                 {/* Exam Details */}
// // // // // // // //                 <div className="flex-1 min-w-0 ml-4">
// // // // // // // //                   <div className="flex items-center gap-2">
// // // // // // // //                     <h2 className="font-medium text-base text-gray-900">{exam.name}</h2>
// // // // // // // //                     <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
// // // // // // // //                       {exam.category}
// // // // // // // //                     </span>
// // // // // // // //                   </div>
// // // // // // // //                   <p className="text-sm text-gray-600 mt-0.5">{exam.description}</p>
// // // // // // // //                   <div className="text-sm text-blue-600 mt-1">{exam.questions} Questions</div>
// // // // // // // //                 </div>

// // // // // // // //                 {/* Pin Button */}
// // // // // // // //                 <button 
// // // // // // // //                   className="ml-4 p-2"
// // // // // // // //                   onClick={(e) => {
// // // // // // // //                     e.stopPropagation();
// // // // // // // //                     togglePin(exam.id);
// // // // // // // //                   }}
// // // // // // // //                 >
// // // // // // // //                   <Pin 
// // // // // // // //                     className={`w-5 h-5 ${
// // // // // // // //                       pinnedExams.has(exam.id) 
// // // // // // // //                         ? 'text-red-500 fill-current' 
// // // // // // // //                         : 'text-gray-400'
// // // // // // // //                     }`}
// // // // // // // //                   />
// // // // // // // //                 </button>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default HomePage;
// // // // // // // 'use client';
// // // // // // // import React, { useState } from 'react';
// // // // // // // import { Pin } from 'lucide-react';

// // // // // // // const exams = [
// // // // // // //   { id: 1, name: 'Math', letter: 'M', color: '#FF6B6B', category: 'Science', questions: 50, description: 'Basic mathematics and algebra' },
// // // // // // //   { id: 2, name: 'Physics', letter: 'P', color: '#4ECDC4', category: 'Science', questions: 40, description: 'Fundamental physics concepts' },
// // // // // // //   { id: 3, name: 'Chemistry', letter: 'C', color: '#45B7D1', category: 'Science', questions: 45, description: 'General chemistry principles' },
// // // // // // //   { id: 4, name: 'Biology', letter: 'B', color: '#96CEB4', category: 'Science', questions: 55, description: 'Introduction to life sciences' },
// // // // // // //   { id: 5, name: 'English', letter: 'E', color: '#7986CB', category: 'Language', questions: 60, description: 'Grammar and comprehension' },
// // // // // // //   { id: 6, name: 'History', letter: 'H', color: '#9575CD', category: 'Humanities', questions: 48, description: 'World history fundamentals' },
// // // // // // //   { id: 7, name: 'Geography', letter: 'G', color: '#4DB6AC', category: 'Science', questions: 42, description: 'Earth and human geography' },
// // // // // // //   { id: 8, name: 'Economics', letter: 'E', color: '#FF8A65', category: 'Social', questions: 45, description: 'Basic economic principles' },
// // // // // // //   { id: 9, name: 'Psychology', letter: 'P', color: '#F06292', category: 'Social', questions: 52, description: 'Introduction to psychology' },
// // // // // // //   { id: 10, name: 'Computer', letter: 'C', color: '#64B5F6', category: 'Technology', questions: 58, description: 'Computer science basics' }
// // // // // // // ];

// // // // // // // const HomePage = () => {
// // // // // // //   const [pinnedExams, setPinnedExams] = useState(new Set());

// // // // // // //   const togglePin = (examId) => {
// // // // // // //     setPinnedExams(prev => {
// // // // // // //       const newPinned = new Set(prev);
// // // // // // //       if (newPinned.has(examId)) {
// // // // // // //         newPinned.delete(examId);
// // // // // // //       } else {
// // // // // // //         newPinned.add(examId);
// // // // // // //       }
// // // // // // //       return newPinned;
// // // // // // //     });
// // // // // // //   };

// // // // // // //   const sortedExams = [...exams].sort((a, b) => {
// // // // // // //     if (pinnedExams.has(a.id) && !pinnedExams.has(b.id)) return -1;
// // // // // // //     if (!pinnedExams.has(a.id) && pinnedExams.has(b.id)) return 1;
// // // // // // //     return 0;
// // // // // // //   });

// // // // // // //   return (
// // // // // // //     <section className="bg-white">
// // // // // // //       <div className="bg-white">
// // // // // // //         <div className="py-6 px-4">
// // // // // // //           <div className="max-w-3xl mx-auto text-center">
// // // // // // //             <div 
// // // // // // //               className="w-14 h-14 rounded-2xl mx-auto mb-3 flex items-center justify-center text-white font-medium text-xl bg-blue-500"
// // // // // // //             >
// // // // // // //               E
// // // // // // //             </div>
// // // // // // //             <h1 className="text-2xl font-semibold text-gray-900">Exam Platform</h1>
// // // // // // //             <p className="text-sm text-gray-500 mt-1">Prepare for your future</p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <div className="max-w-3xl mx-auto pb-8">
// // // // // // //         {sortedExams.map((exam) => (
// // // // // // //           <div 
// // // // // // //             key={exam.id}
// // // // // // //             className="border-t border-gray-100 first:border-t-0"
// // // // // // //           >
// // // // // // //             <div 
// // // // // // //               className="flex items-center px-4 py-4 cursor-pointer hover:bg-gray-50"
// // // // // // //               onClick={() => console.log(`Navigating to exam ${exam.id}`)}
// // // // // // //             >
// // // // // // //               <div 
// // // // // // //                 className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-medium text-lg shrink-0"
// // // // // // //                 style={{ backgroundColor: exam.color }}
// // // // // // //               >
// // // // // // //                 {exam.letter}
// // // // // // //               </div>

// // // // // // //               <div className="flex-1 min-w-0 ml-4">
// // // // // // //                 <div className="flex items-center gap-2">
// // // // // // //                   <h2 className="font-medium text-base text-gray-900">{exam.name}</h2>
// // // // // // //                   <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
// // // // // // //                     {exam.category}
// // // // // // //                   </span>
// // // // // // //                 </div>
// // // // // // //                 <p className="text-sm text-gray-600 mt-0.5">{exam.description}</p>
// // // // // // //                 <div className="text-sm text-blue-600 mt-1">{exam.questions} Questions</div>
// // // // // // //               </div>

// // // // // // //               <button 
// // // // // // //                 className="ml-4 p-2"
// // // // // // //                 onClick={(e) => {
// // // // // // //                   e.stopPropagation();
// // // // // // //                   togglePin(exam.id);
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 <Pin 
// // // // // // //                   className={`w-5 h-5 ${
// // // // // // //                     pinnedExams.has(exam.id) 
// // // // // // //                       ? 'text-red-500 fill-current' 
// // // // // // //                       : 'text-gray-400'
// // // // // // //                   }`}
// // // // // // //                 />
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         ))}
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default HomePage;
// // // // // // 'use client';
// // // // // // import React, { useState } from 'react';
// // // // // // import { Pin } from 'lucide-react';

// // // // // // const exams = [
// // // // // //   { id: 1, name: 'Math', letter: 'M', color: '#FF6B6B', category: 'Science', questions: 50, description: 'Basic mathematics and algebra' },
// // // // // //   { id: 2, name: 'Physics', letter: 'P', color: '#4ECDC4', category: 'Science', questions: 40, description: 'Fundamental physics concepts' },
// // // // // //   { id: 3, name: 'Chemistry', letter: 'C', color: '#45B7D1', category: 'Science', questions: 45, description: 'General chemistry principles' },
// // // // // //   { id: 4, name: 'Biology', letter: 'B', color: '#96CEB4', category: 'Science', questions: 55, description: 'Introduction to life sciences' },
// // // // // //   { id: 5, name: 'English', letter: 'E', color: '#7986CB', category: 'Language', questions: 60, description: 'Grammar and comprehension' },
// // // // // //   { id: 6, name: 'History', letter: 'H', color: '#9575CD', category: 'Humanities', questions: 48, description: 'World history fundamentals' },
// // // // // //   { id: 7, name: 'Geography', letter: 'G', color: '#4DB6AC', category: 'Science', questions: 42, description: 'Earth and human geography' },
// // // // // //   { id: 8, name: 'Economics', letter: 'E', color: '#FF8A65', category: 'Social', questions: 45, description: 'Basic economic principles' },
// // // // // //   { id: 9, name: 'Psychology', letter: 'P', color: '#F06292', category: 'Social', questions: 52, description: 'Introduction to psychology' },
// // // // // //   { id: 10, name: 'Computer', letter: 'C', color: '#64B5F6', category: 'Technology', questions: 58, description: 'Computer science basics' }
// // // // // // ];

// // // // // // const HomePage = () => {
// // // // // //   const [pinnedExams, setPinnedExams] = useState(new Set());

// // // // // //   const togglePin = (examId) => {
// // // // // //     setPinnedExams(prev => {
// // // // // //       const newPinned = new Set(prev);
// // // // // //       if (newPinned.has(examId)) {
// // // // // //         newPinned.delete(examId);
// // // // // //       } else {
// // // // // //         newPinned.add(examId);
// // // // // //       }
// // // // // //       return newPinned;
// // // // // //     });
// // // // // //   };

// // // // // //   const sortedExams = [...exams].sort((a, b) => {
// // // // // //     if (pinnedExams.has(a.id) && !pinnedExams.has(b.id)) return -1;
// // // // // //     if (!pinnedExams.has(a.id) && pinnedExams.has(b.id)) return 1;
// // // // // //     return 0;
// // // // // //   });

// // // // // //   return (
// // // // // //     <div className="bg-white">
// // // // // //       {/* Fixed Hero Section */}
// // // // // //       <div className="fixed top-16 left-0 right-0 bg-white z-40   ">
// // // // // //         <div className="py-8 px-4">
// // // // // //           <div className="max-w-3xl mx-auto text-center">
// // // // // //             <div 
// // // // // //               className="w-14 h-14 rounded-2xl mx-auto mb-3 flex items-center justify-center text-white font-medium text-7xl"
// // // // // //             >
// // // // // //               🔥
// // // // // //             </div>
// // // // // //             <h1 className="text-2xl font-semibold text-gray-900">Prep for any exam</h1>
// // // // // //             <p className="text-sm text-gray-500 mt-1">Prepare for your future</p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // // <br />
// // // // // // <br />
// // // // // // <br />

// // // // // //       {/* Scrollable Exam List */}
// // // // // //       <div className="pt-52 pb-8">
// // // // // //         <div className="max-w-3xl mx-auto">
// // // // // //           {sortedExams.map((exam) => (
// // // // // //             <div 
// // // // // //               key={exam.id}
// // // // // //               className="border-t border-gray-100 first:border-t-0"
// // // // // //             >
// // // // // //               <div 
// // // // // //                 className="flex items-center px-4 py-4 cursor-pointer hover:bg-gray-50"
// // // // // //                 onClick={() => console.log(`Navigating to exam ${exam.id}`)}
// // // // // //               >
// // // // // //                 <div 
// // // // // //                   className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-medium text-lg shrink-0"
// // // // // //                   style={{ backgroundColor: exam.color }}
// // // // // //                 >
// // // // // //                   {exam.letter}
// // // // // //                 </div>

// // // // // //                 <div className="flex-1 min-w-0 ml-4">
// // // // // //                   <div className="flex items-center gap-2">
// // // // // //                     <h2 className="font-medium text-base text-gray-900">{exam.name}</h2>
// // // // // //                     <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
// // // // // //                       {exam.category}
// // // // // //                     </span>
// // // // // //                   </div>
// // // // // //                   <p className="text-sm text-gray-600 mt-0.5">{exam.description}</p>
// // // // // //                   <div className="text-sm text-blue-600 mt-1">{exam.questions} Questions</div>
// // // // // //                 </div>

// // // // // //                 <button 
// // // // // //                   className="ml-4 p-2"
// // // // // //                   onClick={(e) => {
// // // // // //                     e.stopPropagation();
// // // // // //                     togglePin(exam.id);
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   <Pin 
// // // // // //                     className={`w-5 h-5 ${
// // // // // //                       pinnedExams.has(exam.id) 
// // // // // //                         ? 'text-red-500 fill-current' 
// // // // // //                         : 'text-gray-400'
// // // // // //                     }`}
// // // // // //                   />
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default HomePage;
// // // // // // app/page.js
// // // // // // app/page.js
// // // // // 'use client';
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { Pin } from 'lucide-react';
// // // // // import { useRouter } from 'next/navigation';
// // // // // import { createClient } from '@/libs/supabase/client';

// // // // // // Color mapping for categories
// // // // // const categoryColors = {
// // // // //   'Science': '#4ECDC4',
// // // // //   'Language': '#7986CB',
// // // // //   'Mathematics': '#FF6B6B',
// // // // //   'Humanities': '#9575CD',
// // // // //   'Social': '#FF8A65',
// // // // //   'Technology': '#64B5F6',
// // // // //   'Arts': '#81C784',
// // // // //   'Business': '#FFB74D',
// // // // //   'Medicine': '#F06292',
// // // // //   'Engineering': '#4DB6AC'
// // // // // };

// // // // // const getExamStyle = (category) => {
// // // // //   return {
// // // // //     letter: category?.charAt(0)?.toUpperCase() || 'E',
// // // // //     color: categoryColors[category] || '#9E9E9E'
// // // // //   };
// // // // // };

// // // // // const HomePage = () => {
// // // // //   const router = useRouter();
// // // // //   const supabase = createClient();
// // // // //   const [exams, setExams] = useState([]);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState(null);
// // // // //   const [pinnedExams, setPinnedExams] = useState(new Set());

// // // // //   useEffect(() => {
// // // // //     fetchExams();
// // // // //   }, []);

// // // // //   const fetchExams = async () => {
// // // // //     try {
// // // // //       const { data, error } = await supabase
// // // // //         .from('scoorly_exams')
// // // // //         .select(`
// // // // //           id,
// // // // //           name,
// // // // //           description,
// // // // //           number_of_questions,
// // // // //           category_id,
// // // // //           scoorly_exam_categories (
// // // // //             name
// // // // //           )
// // // // //         `);

// // // // //       if (error) throw error;

// // // // //       const formattedExams = data.map(exam => {
// // // // //         const style = getExamStyle(exam.scoorly_exam_categories?.name);
// // // // //         return {
// // // // //           id: exam.id,
// // // // //           slug: exam.slug || exam.id,
// // // // //           name: exam.name,
// // // // //           description: exam.description || 'No description available',
// // // // //           questions: exam.number_of_questions || 0,
// // // // //           category: exam.scoorly_exam_categories?.name || 'Uncategorized',
// // // // //           letter: style.letter,
// // // // //           color: style.color
// // // // //         };
// // // // //       });

// // // // //       setExams(formattedExams);
// // // // //       setLoading(false);
// // // // //     } catch (err) {
// // // // //       setError(err.message);
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const togglePin = (examId) => {
// // // // //     setPinnedExams(prev => {
// // // // //       const newPinned = new Set(prev);
// // // // //       if (newPinned.has(examId)) {
// // // // //         newPinned.delete(examId);
// // // // //       } else {
// // // // //         newPinned.add(examId);
// // // // //       }
// // // // //       return newPinned;
// // // // //     });
// // // // //   };

// // // // //   const navigateToExam = (examSlug) => {
// // // // //     router.push(`/exams/${examSlug}`);
// // // // //   };

// // // // //   const sortedExams = [...exams].sort((a, b) => {
// // // // //     if (pinnedExams.has(a.id) && !pinnedExams.has(b.id)) return -1;
// // // // //     if (!pinnedExams.has(a.id) && pinnedExams.has(b.id)) return 1;
// // // // //     return 0;
// // // // //   });

// // // // //   if (error) {
// // // // //     return (
// // // // //       <div className="flex items-center justify-center h-screen">
// // // // //         <div className="text-center">
// // // // //           <h2 className="text-xl font-semibold text-red-600">Error loading exams</h2>
// // // // //           <p className="text-gray-600 mt-2">{error}</p>
// // // // //         </div>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <div className="bg-white min-h-screen">
// // // // //       {/* Fixed Hero Section */}
// // // // //       <div className="fixed top-0 left-0 right-0 bg-white z-40 border-b">
// // // // //         <div className="py-6 px-4">
// // // // //           <div className="max-w-3xl mx-auto text-center">
// // // // //             <div 
// // // // //               className="w-14 h-14 rounded-2xl mx-auto mb-3 flex items-center justify-center text-white font-medium text-5xl"
// // // // //             >
// // // // //               🎓
// // // // //             </div>
// // // // //             <h1 className="text-2xl font-semibold text-gray-900">Prep for any exam</h1>
// // // // //             <p className="text-sm text-gray-500 mt-1">Prepare for your future</p>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Scrollable Exam List with proper spacing */}
// // // // //       <div className="pt-40 pb-8">
// // // // //         <div className="max-w-3xl mx-auto">
// // // // //           {loading ? (
// // // // //             <div className="flex justify-center items-center py-20">
// // // // //               <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
// // // // //             </div>
// // // // //           ) : (
// // // // //             sortedExams.map((exam) => (
// // // // //               <div 
// // // // //                 key={exam.id}
// // // // //                 className="border-t border-gray-100 first:border-t-0 mx-4"
// // // // //               >
// // // // //                 <div 
// // // // //                   className="flex items-center px-4 py-4 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors duration-200"
// // // // //                   onClick={() => navigateToExam(exam.slug)}
// // // // //                 >
// // // // //                   <div 
// // // // //                     className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-medium text-lg shrink-0 shadow-sm"
// // // // //                     style={{ backgroundColor: exam.color }}
// // // // //                   >
// // // // //                     {exam.letter}
// // // // //                   </div>

// // // // //                   <div className="flex-1 min-w-0 ml-4">
// // // // //                     <div className="flex items-center gap-2">
// // // // //                       <h2 className="font-medium text-base text-gray-900">{exam.name}</h2>
// // // // //                       <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
// // // // //                         {exam.category}
// // // // //                       </span>
// // // // //                     </div>
// // // // //                     <p className="text-sm text-gray-600 mt-0.5">{exam.description}</p>
// // // // //                     <div className="text-sm text-blue-600 mt-1">{exam.questions} Questions</div>
// // // // //                   </div>

// // // // //                   <button 
// // // // //                     className="ml-4 p-2"
// // // // //                     onClick={(e) => {
// // // // //                       e.stopPropagation();
// // // // //                       togglePin(exam.id);
// // // // //                     }}
// // // // //                   >
// // // // //                     <Pin 
// // // // //                       className={`w-5 h-5 ${
// // // // //                         pinnedExams.has(exam.id) 
// // // // //                           ? 'text-red-500 fill-current' 
// // // // //                           : 'text-gray-400'
// // // // //                       }`}
// // // // //                     />
// // // // //                   </button>
// // // // //                 </div>
// // // // //               </div>
// // // // //             ))
// // // // //           )}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default HomePage;
// // // // // app/page.js
// // // // 'use client';
// // // // import React, { useState, useEffect } from 'react';
// // // // import { Pin } from 'lucide-react';
// // // // import { useRouter } from 'next/navigation';
// // // // import { createClient } from '@/libs/supabase/client';

// // // // // Color mapping for categories
// // // // const categoryColors = {
// // // //   'Science': '#4ECDC4',
// // // //   'Language': '#7986CB',
// // // //   'Mathematics': '#FF6B6B',
// // // //   'Humanities': '#9575CD',
// // // //   'Social': '#FF8A65',
// // // //   'Technology': '#64B5F6',
// // // //   'Arts': '#81C784',
// // // //   'Business': '#FFB74D',
// // // //   'Medicine': '#F06292',
// // // //   'Engineering': '#4DB6AC'
// // // // };

// // // // const getExamStyle = (category) => {
// // // //   return {
// // // //     letter: category?.charAt(0)?.toUpperCase() || 'E',
// // // //     color: categoryColors[category] || '#9E9E9E'
// // // //   };
// // // // };

// // // // const HomePage = () => {
// // // //   const router = useRouter();
// // // //   const supabase = createClient();
// // // //   const [exams, setExams] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);
// // // //   const [pinnedExams, setPinnedExams] = useState(new Set());

// // // //   useEffect(() => {
// // // //     fetchExams();
// // // //   }, []);

// // // //   const fetchExams = async () => {
// // // //     try {
// // // //       const { data, error } = await supabase
// // // //         .from('scoorly_exams')
// // // //         .select(`
// // // //           id,
// // // //           name,
// // // //           description,
// // // //           number_of_questions,
// // // //           slug,
// // // //           category_id,
// // // //           scoorly_exam_categories (
// // // //             name
// // // //           )
// // // //         `);

// // // //       if (error) throw error;

// // // //       const formattedExams = data.map(exam => {
// // // //         const style = getExamStyle(exam.scoorly_exam_categories?.name);
// // // //         return {
// // // //           id: exam.id,
// // // //           slug: exam.slug || exam.id,
// // // //           name: exam.name,
// // // //           description: exam.description || 'No description available',
// // // //           questions: exam.number_of_questions || 0,
// // // //           category: exam.scoorly_exam_categories?.name || 'Uncategorized',
// // // //           letter: style.letter,
// // // //           color: style.color
// // // //         };
// // // //       });

// // // //       setExams(formattedExams);
// // // //       setLoading(false);
// // // //     } catch (err) {
// // // //       setError(err.message);
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const togglePin = (examId) => {
// // // //     setPinnedExams(prev => {
// // // //       const newPinned = new Set(prev);
// // // //       if (newPinned.has(examId)) {
// // // //         newPinned.delete(examId);
// // // //       } else {
// // // //         newPinned.add(examId);
// // // //       }
// // // //       return newPinned;
// // // //     });
// // // //   };

// // // //   const navigateToExam = (examSlug) => {
// // // //     router.push(`/exams/${examSlug}`);
// // // //   };

// // // //   const sortedExams = [...exams].sort((a, b) => {
// // // //     if (pinnedExams.has(a.id) && !pinnedExams.has(b.id)) return -1;
// // // //     if (!pinnedExams.has(a.id) && pinnedExams.has(b.id)) return 1;
// // // //     return 0;
// // // //   });

// // // //   if (error) {
// // // //     return (
// // // //       <div className="flex items-center justify-center h-screen">
// // // //         <div className="text-center">
// // // //           <h2 className="text-xl font-semibold text-red-600">Error loading exams</h2>
// // // //           <p className="text-gray-600 mt-2">{error}</p>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="bg-white min-h-screen">
// // // //       {/* Fixed Hero Section */}
      
// // // //       <div className="fixed top-0 left-0 right-0 bg-white z-40 border-b">
// // // //         <div className="py-6 px-4">
// // // //           <div className="max-w-3xl mx-auto text-center">
            
// // // //             <div 
// // // //               className="w-14 h-14 rounded-2xl mx-auto mb-3 flex items-center justify-center text-white font-medium text-5xl"
// // // //             >
// // // //               🎓
// // // //             </div>
        
// // // //             <h1 className="text-2xl font-semibold text-gray-900">Prep for any exam</h1>
// // // //             <p className="text-sm text-gray-500 mt-1">Prepare for your future</p>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Scrollable Exam List with proper spacing */}
// // // //       <div className="pt-40 pb-8">
// // // //         <div className="max-w-3xl mx-auto">
// // // //           {loading ? (
// // // //             <div className="flex justify-center items-center py-20">
// // // //               <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
// // // //             </div>
// // // //           ) : (
// // // //             sortedExams.map((exam) => (
// // // //               <div 
// // // //                 key={exam.id}
// // // //                 className="border-t border-gray-100 first:border-t-0 mx-4"
// // // //               >
// // // //                 <div 
// // // //                   className="flex items-center px-4 py-4 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors duration-200"
// // // //                   onClick={() => navigateToExam(exam.slug)}
// // // //                 >
// // // //                   <div 
// // // //                     className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-medium text-lg shrink-0 shadow-sm"
// // // //                     style={{ backgroundColor: exam.color }}
// // // //                   >
// // // //                     {exam.letter}
// // // //                   </div>

// // // //                   <div className="flex-1 min-w-0 ml-4">
// // // //                     <div className="flex items-center gap-2">
// // // //                       <h2 className="font-medium text-base text-gray-900">{exam.name}</h2>
// // // //                       <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
// // // //                         {exam.category}
// // // //                       </span>
// // // //                     </div>
// // // //                     <p className="text-sm text-gray-600 mt-0.5">{exam.description}</p>
// // // //                     <div className="text-sm text-blue-600 mt-1">{exam.questions} Questions</div>
// // // //                   </div>

// // // //                   <button 
// // // //                     className="ml-4 p-2"
// // // //                     onClick={(e) => {
// // // //                       e.stopPropagation();
// // // //                       togglePin(exam.id);
// // // //                     }}
// // // //                   >
// // // //                     <Pin 
// // // //                       className={`w-5 h-5 ${
// // // //                         pinnedExams.has(exam.id) 
// // // //                           ? 'text-red-500 fill-current' 
// // // //                           : 'text-gray-400'
// // // //                       }`}
// // // //                     />
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             ))
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default HomePage;
// // // 'use client';

// // // import React, { useState, useEffect, useCallback } from 'react';
// // // import { Pin, Search } from 'lucide-react';
// // // import { useRouter } from 'next/navigation';
// // // import { createClient } from '@/libs/supabase/client';
// // // import { Input } from "@/components/ui/input";

// // // // Enhanced color mapping for categories with more vibrant colors
// // // const categoryColors = {
// // //   'Science': '#4ECDC4',
// // //   'Language': '#7986CB',
// // //   'Mathematics': '#FF6B6B',
// // //   'Humanities': '#9575CD',
// // //   'Social': '#FF8A65',
// // //   'Technology': '#64B5F6',
// // //   'Arts': '#81C784',
// // //   'Business': '#FFB74D',
// // //   'Medicine': '#F06292',
// // //   'Engineering': '#4DB6AC'
// // // };

// // // const getExamStyle = (category) => {
// // //   return {
// // //     letter: category?.charAt(0)?.toUpperCase() || 'E',
// // //     color: categoryColors[category] || '#9E9E9E'
// // //   };
// // // };

// // // // Loading skeleton component
// // // const LoadingSkeleton = () => (
// // //   <div className="space-y-4">
// // //     {[1, 2, 3, 4].map((i) => (
// // //       <div key={i} className="animate-pulse">
// // //         <div className="bg-gray-200 h-32 rounded-xl"></div>
// // //       </div>
// // //     ))}
// // //   </div>
// // // );

// // // const HomePage = () => {
// // //   const router = useRouter();
// // //   const supabase = createClient();
// // //   const [exams, setExams] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [pinnedExams, setPinnedExams] = useState(new Set());
// // //   const [searchTerm, setSearchTerm] = useState('');

// // //   useEffect(() => {
// // //     let mounted = true;
    
// // //     const fetchExams = async () => {
// // //       try {
// // //         const { data, error } = await supabase
// // //           .from('scoorly_exams')
// // //           .select(`
// // //             id,
// // //             name,
// // //             description,
// // //             number_of_questions,
// // //             slug,
// // //             category_id,
// // //             scoorly_exam_categories (
// // //               name
// // //             )
// // //           `);

// // //         if (error) throw error;

// // //         if (mounted) {
// // //           const formattedExams = data.map(exam => {
// // //             const style = getExamStyle(exam.scoorly_exam_categories?.name);
// // //             return {
// // //               id: exam.id,
// // //               name: exam.name,
// // //               description: exam.description || 'No description available',
// // //               questions: exam.number_of_questions || 0,
// // //               category: exam.scoorly_exam_categories?.name || 'Uncategorized',
// // //               letter: style.letter,
// // //               color: style.color,
// // //               slug: exam.slug
// // //             };
// // //           });

// // //           setExams(formattedExams);
// // //           setLoading(false);
// // //         }
// // //       } catch (err) {
// // //         if (mounted) {
// // //           setError(err.message);
// // //           setLoading(false);
// // //         }
// // //       }
// // //     };

// // //     fetchExams();

// // //     return () => {
// // //       mounted = false;
// // //     };
// // //   }, []);

// // //   const togglePin = useCallback((examId) => {
// // //     setPinnedExams(prev => {
// // //       const newPinned = new Set(prev);
// // //       if (newPinned.has(examId)) {
// // //         newPinned.delete(examId);
// // //       } else {
// // //         newPinned.add(examId);
// // //       }
// // //       return newPinned;
// // //     });
// // //   }, []);

// // //   const navigateToExam = useCallback((slug) => {
// // //     router.push(`/exams/${slug}`);
// // //   }, [router]);

// // //   const filteredExams = exams.filter(exam =>
// // //     exam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //     exam.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //     exam.category.toLowerCase().includes(searchTerm.toLowerCase())
// // //   );

// // //   const sortedExams = [...filteredExams].sort((a, b) => {
// // //     if (pinnedExams.has(a.id) && !pinnedExams.has(b.id)) return -1;
// // //     if (!pinnedExams.has(a.id) && pinnedExams.has(b.id)) return 1;
// // //     return 0;
// // //   });

// // //   if (error) {
// // //     return (
// // //       <div className="flex items-center justify-center h-screen">
// // //         <div className="text-center">
// // //           <h2 className="text-xl font-semibold text-red-600">Error loading exams</h2>
// // //           <p className="text-gray-600 mt-2">{error}</p>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="bg-white min-h-screen">
// // //       {/* Enhanced Hero Section with better spacing */}
// // //       <div className="fixed top-0 left-0 right-0 bg-white z-40 border-b shadow-sm">
// // //         <div className="py-8 px-4">
// // //           <div className="max-w-3xl mx-auto text-center">
// // //             <div className="w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center text-6xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
// // //               🎓
// // //             </div>
// // //             <h1 className="text-3xl font-bold text-gray-900">Prep for any exam</h1>
// // //             <p className="text-lg text-gray-600 mt-2">Master your future with confidence</p>
            
// // //             {/* Search Bar */}
// // //             <div className="mt-6 max-w-md mx-auto">
// // //               <div className="relative">
// // //                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
// // //                 <Input
// // //                   type="text"
// // //                   placeholder="Search exams..."
// // //                   value={searchTerm}
// // //                   onChange={(e) => setSearchTerm(e.target.value)}
// // //                   className="pl-10 w-full bg-gray-50 border-2 border-gray-200 focus:border-blue-500"
// // //                 />
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Scrollable Exam List with enhanced spacing and loading state */}
// // //       <div className="pt-48 pb-8"> {/* Increased top padding to prevent overlap */}
// // //         <div className="max-w-3xl mx-auto">
// // //           {loading ? (
// // //             <div className="px-4">
// // //               <LoadingSkeleton />
// // //             </div>
// // //           ) : sortedExams.length === 0 ? (
// // //             <div className="text-center py-20">
// // //               <p className="text-gray-500">No exams found matching your search.</p>
// // //             </div>
// // //           ) : (
// // //             sortedExams.map((exam) => (
// // //               <div 
// // //                 key={exam.id}
// // //                 className="mx-4 mb-4"
// // //               >
// // //                 <div 
// // //                   className="flex items-center p-4 cursor-pointer bg-white hover:bg-gray-50 rounded-xl border border-gray-200 shadow-sm transition-all duration-200 hover:shadow-md"
// // //                   onClick={() => navigateToExam(exam.slug)}
// // //                 >
// // //                   <div 
// // //                     className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-semibold text-lg shrink-0 shadow-sm transition-transform duration-200 transform hover:scale-105"
// // //                     style={{ backgroundColor: exam.color }}
// // //                   >
// // //                     {exam.letter}
// // //                   </div>

// // //                   <div className="flex-1 min-w-0 ml-4">
// // //                     <div className="flex items-center gap-2">
// // //                       <h2 className="text-lg font-semibold text-gray-900">{exam.name}</h2>
// // //                       <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
// // //                         {exam.category}
// // //                       </span>
// // //                     </div>
// // //                     <p className="text-sm text-gray-600 mt-1">{exam.description}</p>
// // //                     <div className="text-sm text-blue-600 mt-1 font-medium">
// // //                       {exam.questions} Questions
// // //                     </div>
// // //                   </div>

// // //                   <button 
// // //                     className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
// // //                     onClick={(e) => {
// // //                       e.stopPropagation();
// // //                       togglePin(exam.id);
// // //                     }}
// // //                   >
// // //                     <Pin 
// // //                       className={`w-5 h-5 ${
// // //                         pinnedExams.has(exam.id) 
// // //                           ? 'text-blue-500 fill-current' 
// // //                           : 'text-gray-400'
// // //                       }`}
// // //                     />
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             ))
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default HomePage;
// // 'use client';

// // import React, { useState, useEffect } from 'react';
// // import { Pin, Search } from 'lucide-react';
// // import { useRouter } from 'next/navigation';
// // import { createClient } from '@/libs/supabase/client';
// // import { Input } from "@/components/ui/input";

// // const categoryColors = {
// //   'Science': '#4ECDC4',
// //   'Language': '#7986CB',
// //   'Mathematics': '#FF6B6B',
// //   'Humanities': '#9575CD',
// //   'Social': '#FF8A65',
// //   'Technology': '#64B5F6',
// //   'Arts': '#81C784',
// //   'Business': '#FFB74D',
// //   'Medicine': '#F06292',
// //   'Engineering': '#4DB6AC'
// // };

// // const getExamStyle = (category) => {
// //   return {
// //     letter: category?.charAt(0)?.toUpperCase() || 'E',
// //     color: categoryColors[category] || '#9E9E9E'
// //   };
// // };

// // const LoadingSkeleton = () => (
// //   <div className="space-y-4">
// //     {[1, 2, 3, 4].map((i) => (
// //       <div key={i} className="animate-pulse">
// //         <div className="bg-gray-200 h-32 rounded-lg"></div>
// //       </div>
// //     ))}
// //   </div>
// // );

// // const HomePage = () => {
// //   const router = useRouter();
// //   const supabase = createClient();
// //   const [exams, setExams] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [pinnedExams, setPinnedExams] = useState(new Set());
// //   const [searchTerm, setSearchTerm] = useState('');

// //   useEffect(() => {
// //     const fetchExams = async () => {
// //       try {
// //         const { data, error } = await supabase
// //           .from('scoorly_exams')
// //           .select(`
// //             id,
// //             name,
// //             description,
// //             number_of_questions,
// //             slug,
// //             category_id,
// //             scoorly_exam_categories (
// //               name
// //             )
// //           `);

// //         if (error) throw error;

// //         const formattedExams = data.map(exam => {
// //           const style = getExamStyle(exam.scoorly_exam_categories?.name);
// //           return {
// //             id: exam.id,
// //             name: exam.name,
// //             description: exam.description || 'No description available',
// //             questions: exam.number_of_questions || 0,
// //             category: exam.scoorly_exam_categories?.name || 'Uncategorized',
// //             letter: style.letter,
// //             color: style.color,
// //             slug: exam.slug
// //           };
// //         });

// //         setExams(formattedExams);
// //         setLoading(false);
// //       } catch (err) {
// //         console.error('Error fetching exams:', err);
// //         setError(err.message);
// //         setLoading(false);
// //       }
// //     };

// //     fetchExams();
// //   }, []);

// //   const togglePin = (examId) => {
// //     setPinnedExams(prev => {
// //       const newPinned = new Set(prev);
// //       if (newPinned.has(examId)) {
// //         newPinned.delete(examId);
// //       } else {
// //         newPinned.add(examId);
// //       }
// //       return newPinned;
// //     });
// //   };

// //   const navigateToExam = (slug) => {
// //     router.push(`/exams/${slug}`);
// //   };

// //   const filteredExams = exams.filter(exam =>
// //     exam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //     exam.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //     exam.category.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   const sortedExams = [...filteredExams].sort((a, b) => {
// //     if (pinnedExams.has(a.id) && !pinnedExams.has(b.id)) return -1;
// //     if (!pinnedExams.has(a.id) && pinnedExams.has(b.id)) return 1;
// //     return 0;
// //   });

// //   if (error) {
// //     return (
// //       <div className="flex items-center justify-center h-screen">
// //         <div className="text-center">
// //           <h2 className="text-xl font-semibold text-red-600">Error loading exams</h2>
// //           <p className="text-gray-600 mt-2">{error}</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-white">
// //       {/* Hero Section */}
// //       <div className="bg-white py-12 px-4 mb-6">
// //         <div className="max-w-3xl mx-auto text-center">
// //           <br />
// //           <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
// //             <span className="text-4xl">🥇</span>
// //           </div>
// //           <h1 className="text-3xl font-bold text-gray-900 mb-3">Prep for any exam</h1>
// //           <p className="text-lg text-gray-600 mb-8">Master your future with confidence</p>
          
// //           {/* Search Bar */}
// //           <div className="max-w-xl mx-auto">
// //             <div className="relative">
// //               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
// //               <Input
// //                 type="text"
// //                 placeholder="Search exams..."
// //                 value={searchTerm}
// //                 onChange={(e) => setSearchTerm(e.target.value)}
// //                 className="pl-12 h-12 text-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Exam List */}
// //       <div className="max-w-3xl mx-auto px-4 pb-12">
// //         {loading ? (
// //           <LoadingSkeleton />
// //         ) : sortedExams.length === 0 ? (
// //           <div className="text-center py-12">
// //             <p className="text-gray-500">No exams found matching your search.</p>
// //           </div>
// //         ) : (
// //           <div className="space-y-4">
// //             {sortedExams.map((exam) => (
// //               <div 
// //                 key={exam.id}
// //                 className="bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200"
// //                 onClick={() => navigateToExam(exam.slug)}
// //               >
// //                 <div className="flex items-center p-4 cursor-pointer">
// //                   <div 
// //                     className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-semibold text-lg shrink-0 shadow-sm"
// //                     style={{ backgroundColor: exam.color }}
// //                   >
// //                     {exam.letter}
// //                   </div>

// //                   <div className="flex-1 min-w-0 ml-4">
// //                     <div className="flex items-center gap-2">
// //                       <h2 className="text-lg font-semibold text-gray-900">{exam.name}</h2>
// //                       <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
// //                         {exam.category}
// //                       </span>
// //                     </div>
// //                     <p className="text-sm text-gray-600 mt-1">{exam.description}</p>
// //                     <div className="text-sm text-blue-600 mt-1 font-medium">
// //                       {exam.questions} Questions
// //                     </div>
// //                   </div>

// //                   <button 
// //                     className="ml-4 p-2 hover:bg-gray-100 rounded-full"
// //                     onClick={(e) => {
// //                       e.stopPropagation();
// //                       togglePin(exam.id);
// //                     }}
// //                   >
// //                     <Pin 
// //                       className={`w-5 h-5 ${
// //                         pinnedExams.has(exam.id) 
// //                           ? 'text-blue-500 fill-current' 
// //                           : 'text-gray-400'
// //                       }`}
// //                     />
// //                   </button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default HomePage;
// 'use client';

// import React, { useState, useEffect } from 'react';
// import { Pin, Search } from 'lucide-react';
// import { useRouter } from 'next/navigation';
// import { createClient } from '@/libs/supabase/client';
// import { Input } from "@/components/ui/input";

// const categoryColors = {
//   'Science': '#4ECDC4',
//   'Language': '#7986CB',
//   'Mathematics': '#FF6B6B',
//   'Humanities': '#9575CD',
//   'Social': '#FF8A65',
//   'Technology': '#64B5F6',
//   'Arts': '#81C784',
//   'Business': '#FFB74D',
//   'Medicine': '#F06292',
//   'Engineering': '#4DB6AC'
// };

// const getExamStyle = (category) => {
//   return {
//     letter: category?.charAt(0)?.toUpperCase() || 'E',
//     color: categoryColors[category] || '#9E9E9E'
//   };
// };

// const LoadingSkeleton = () => (
//   <div className="space-y-4">
//     {[1, 2, 3, 4].map((i) => (
//       <div key={i} className="animate-pulse">
//         <div className="bg-[#EEF5FF] h-32 rounded-lg"></div>
//       </div>
//     ))}
//   </div>
// );

// const HomePage = () => {
//   // ... existing state management code ...

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <div className="bg-white py-12 px-4 mb-6">
//         <div className="max-w-3xl mx-auto text-center">
//           <br />
//           <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
//             <span className="text-4xl">🥇</span>
//           </div>
//           <h1 className="text-[#1F3546] text-3xl font-bold mb-3">Prep for any exam</h1>
//           <p className="text-[#697785] text-lg mb-8">Master your future with confidence</p>
          
//           {/* Search Bar */}
//           <div className="max-w-xl mx-auto">
//             <div className="relative">
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <Input
//                 type="text"
//                 placeholder="Search exams..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pl-12 h-12 text-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Exam List */}
//       <div className="max-w-3xl mx-auto px-4 pb-12">
//         {loading ? (
//           <LoadingSkeleton />
//         ) : sortedExams.length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-[#697785]">No exams found matching your search.</p>
//           </div>
//         ) : (
//           <div className="space-y-4">
//             {sortedExams.map((exam) => (
//               <div 
//                 key={exam.id}
//                 className="bg-[#EEF5FF] rounded-lg hover:bg-blue-50 transition-colors duration-200"
//                 onClick={() => navigateToExam(exam.slug)}
//               >
//                 <div className="flex items-center p-4 cursor-pointer">
//                   <div 
//                     className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-semibold text-lg shrink-0 shadow-sm"
//                     style={{ backgroundColor: exam.color }}
//                   >
//                     {exam.letter}
//                   </div>

//                   <div className="flex-1 min-w-0 ml-4 mr-4">
//                     <div className="flex items-start gap-2 flex-wrap">
//                       <h2 className="text-lg font-semibold text-[#1F3546] truncate max-w-[calc(100%-80px)]">
//                         {exam.name}
//                       </h2>
//                       <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/80 text-[#697785] whitespace-nowrap">
//                         {exam.category}
//                       </span>
//                     </div>
//                     <p className="text-sm text-[#697785] mt-1 line-clamp-2">{exam.description}</p>
//                     <div className="text-sm text-blue-600 mt-1 font-medium">
//                       {exam.questions} Questions
//                     </div>
//                   </div>

//                   <button 
//                     className="shrink-0 ml-auto p-2 hover:bg-white/50 rounded-full"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       togglePin(exam.id);
//                     }}
//                   >
//                     <Pin 
//                       className={`w-5 h-5 ${
//                         pinnedExams.has(exam.id) 
//                           ? 'text-blue-500 fill-current' 
//                           : 'text-[#697785]'
//                       }`}
//                     />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomePage;

'use client';

import React, { useState, useEffect } from 'react';
import { Pin, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/libs/supabase/client';
import { Input } from "@/components/ui/input";
import HomeHeader from "@/components/Quiz/HHeader";

const categoryColors = {
  'Science': '#2463EB',
  'Language': '#2463EB',
  'Mathematics': '#2463EB',
  'Humanities': '#2463EB',
  'Social': '#2463EB',
  'Technology': '#2463EB',
  'Arts': '#2463EB',
  'Business': '#2463EB',
  'Medicine': '#2463EB',
  'Engineering': '#2463EB'
};

const getExamStyle = (category) => {
  return {
    letter: category?.charAt(0)?.toUpperCase() || 'E',
    color: categoryColors[category] || '#2463EB'
  };
};

const LoadingSkeleton = () => (
  <div className="space-y-4">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="animate-pulse">
        <div className="bg-[#EEF5FF] h-32 rounded-lg"></div>
      </div>
    ))}
  </div>
);

const SearchBar = ({ searchTerm, setSearchTerm, isFixed }) => (
  <div className={`bg-white w-full z-40 transition-all duration-300 ${
    isFixed ? 'fixed top-16 left-0 right-0 shadow-md py-4' : 'py-8'
  }`}>
    <div className="max-w-3xl mx-auto px-4">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          type="text"
          placeholder="Search exams..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-12 h-12 text-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
        />
      </div>
    </div>
  </div>
);

const HomePage = () => {
  const router = useRouter();
  const supabase = createClient();
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pinnedExams, setPinnedExams] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const { data, error } = await supabase
          .from('scoorly_exams')
          .select(`
            id,
            name,
            description,
            number_of_questions,
            slug,
            category_id,
            scoorly_exam_categories (
              name
            )
          `);

        if (error) throw error;

        const formattedExams = data.map(exam => {
          const style = getExamStyle(exam.scoorly_exam_categories?.name);
          return {
            id: exam.id,
            name: exam.name,
            description: exam.description || 'No description available',
            questions: exam.number_of_questions || 0,
            category: exam.scoorly_exam_categories?.name || 'Uncategorized',
            letter: style.letter,
            color: style.color,
            slug: exam.slug
          };
        });

        setExams(formattedExams);
      } catch (err) {
        console.error('Error fetching exams:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExams();
  }, [supabase]);

  const filteredExams = exams.filter(exam =>
    exam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exam.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exam.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedExams = [...filteredExams].sort((a, b) => {
    if (pinnedExams.has(a.id) && !pinnedExams.has(b.id)) return -1;
    if (!pinnedExams.has(a.id) && pinnedExams.has(b.id)) return 1;
    return 0;
  });

  const togglePin = (examId, e) => {
    e.stopPropagation();
    setPinnedExams(prev => {
      const newPinned = new Set(prev);
      if (newPinned.has(examId)) {
        newPinned.delete(examId);
      } else {
        newPinned.add(examId);
      }
      return newPinned;
    });
  };

  const navigateToExam = (slug) => {
    router.push(`/exams/${slug}`);
  };

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-red-600">Error loading exams</h2>
          <p className="text-gray-600 mt-2">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <HomeHeader />
      
    <br />
    <br />
    <br />
    <br />
      {/* Hero Section */}
      <div className="bg-white px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <span className="text-4xl">🥇</span>
          </div>
          <h1 className="text-[#1F3546] text-3xl font-bold mb-3">Prep for any exam</h1>
          <p className="text-[#697785] text-lg mb-8">Master your future with confidence</p>
            {/* Fixed Search Bar */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} isFixed={isScrolled} />

        </div>
      </div>

      {/* Exam List */}
      <div className={`max-w-3xl mx-auto px-4 pb-12 ${isScrolled ? 'mt-24' : ''}`}>
        {loading ? (
          <LoadingSkeleton />
        ) : sortedExams.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[#697785]">No exams found matching your search.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {sortedExams.map((exam) => (
              <div 
                key={exam.id}
                onClick={() => navigateToExam(exam.slug)}
                className="bg-[#f5f9ff] rounded-lg border-2 border-blue-100 hover:bg-blue-100/50 hover:border-blue-200 transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-center p-4">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-semibold text-lg shrink-0 shadow-sm"
                    style={{ backgroundColor: exam.color }}
                  >
                    {exam.letter}
                  </div>

                  <div className="flex-1 min-w-0 ml-4 mr-4">
                    <div className="flex items-start gap-2 flex-wrap">
                      <h2 className="text-sm font-semibold text-[#1b2a6f] truncate max-w-[calc(100%-80px)]">
                        {exam.name}
                      </h2>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white text-[#697785] whitespace-nowrap">
                        {exam.category}
                      </span>
                    </div>
                    <p className="text-sm text-[#697785] mt-1 line-clamp-2">{exam.description}</p>
                    <div className="text-sm text-blue-600 mt-1 font-medium">
                      {exam.questions} Questions
                    </div>
                  </div>

                  <button 
                    onClick={(e) => togglePin(exam.id, e)}
                    className="shrink-0 ml-auto p-2 hover:bg-white/50 rounded-full"
                  >
                    <Pin 
                      className={`w-5 h-5 ${
                        pinnedExams.has(exam.id) 
                          ? 'text-red-500 fill-current' 
                          : 'text-[#697785] hover:text-[#4b5563]'
                      }`}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;