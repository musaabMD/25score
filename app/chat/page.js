// 'use client';

// import React, { useEffect, useState } from 'react';
// import { createClient } from "@/libs/supabase/client";
// import { redirect } from 'next/navigation';
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import HomeHeader from "@/components/Quiz/HHeader";
// import { 
//   MessageSquare, 
//   Shield, 
//   BookOpen, 
//   Users, 
//   Brain,
//   Sparkles,
//   Bot,
//   Clock
// } from 'lucide-react';

// const features = [
//   {
//     icon: Shield,
//     title: "Spam-Free Environment",
//     description: "Advanced filtering ensures only relevant, educational discussions."
//   },
//   {
//     icon: Brain,
//     title: "Study Smarter, Not Harder",
//     description: "Get focused help when you need it, reducing study stress."
//   },
//   {
//     icon: Users,
//     title: "Peer Learning",
//     description: "Connect with fellow students preparing for the same exams."
//   },
//   {
//     icon: Bot,
//     title: "AI-Powered Support",
//     description: "Get instant help with study techniques and exam strategies."
//   },
//   {
//     icon: BookOpen,
//     title: "Subject Experts",
//     description: "Access to verified tutors and subject matter specialists."
//   },
//   {
//     icon: Clock,
//     title: "24/7 Availability",
//     description: "Get help anytime, anywhere - your study companion is always ready."
//   }
// ];

// export default function ChatPage() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [requestSent, setRequestSent] = useState(false);

//   useEffect(() => {
//     const checkAuth = async () => {
//       const supabase = createClient();
//       const { data: { user: currentUser } } = await supabase.auth.getUser();
      
//       if (!currentUser) {
//         redirect('/signin');
//       }
      
//       setUser(currentUser);
//       setLoading(false);
//     };

//     checkAuth();
//   }, []);

//   const handleRequestAccess = async () => {
//     // Here you would typically send the request to your backend
//     setRequestSent(true);
//     // You could also store this in Supabase or your backend
//   };

//   if (loading) {
//     return null;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <HomeHeader />

//       <main className="pt-20 pb-16 px-4">
//         <div className="max-w-4xl mx-auto">
//           {/* Hero Section */}
//           <div className="text-center mb-12">
//             <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
//               <MessageSquare className="w-8 h-8 text-blue-500" />
//             </div>
//             <h1 className="text-4xl font-bold text-gray-900 mb-4">
//               Study Chat Coming Soon
//               <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
//                 Beta
//               </span>
//             </h1>
//             <p className="text-xl text-gray-600 mb-8">
//               A smarter way to study together and get help when you need it.
//             </p>
            
//             {!requestSent ? (
//               <Button 
//                 onClick={handleRequestAccess}
//                 className="bg-blue-600 hover:bg-blue-700"
//               >
//                 <Sparkles className="w-4 h-4 mr-2" />
//                 Request Beta Access
//               </Button>
//             ) : (
//               <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-lg">
//                 Request received! We'll notify you when access is granted.
//               </div>
//             )}
//           </div>

//           {/* Features Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//             {features.map((feature, index) => {
//               const Icon = feature.icon;
//               return (
//                 <Card key={index} className="border-2 border-gray-100">
//                   <CardContent className="p-6">
//                     <div className="flex items-start">
//                       <div className="flex-shrink-0 mr-4">
//                         <div className="p-2 bg-blue-50 rounded-lg">
//                           <Icon className="w-6 h-6 text-blue-500" />
//                         </div>
//                       </div>
//                       <div>
//                         <h3 className="text-lg font-semibold text-gray-900 mb-1">
//                           {feature.title}
//                         </h3>
//                         <p className="text-gray-600 text-sm">
//                           {feature.description}
//                         </p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               );
//             })}
//           </div>

//           {/* Access Requirements */}
//           <div className="bg-yellow-50 border-2 border-yellow-100 rounded-xl p-6">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">
//               Access Requirements
//             </h3>
//             <ul className="space-y-3">
//               <li className="flex items-center text-gray-700">
//                 <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
//                 Must be logged in to Scoorly
//               </li>
//               <li className="flex items-center text-gray-700">
//                 <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
//                 Complete at least one practice exam
//               </li>
//               <li className="flex items-center text-gray-700">
//                 <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
//                 Agree to community guidelines
//               </li>
//               <li className="flex items-center text-gray-700">
//                 <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
//                 Beta access approval
//               </li>
//             </ul>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }