// // components/Dashboard/DashboardStats.js
// 'use client';

// import React from 'react';
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import Link from 'next/link';
// import { 
//   Flame, Trophy, Clock, Users, Crown, Star, 
//   TrendingUp, Target, Medal, Zap, Award, Sparkles
// } from 'lucide-react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { Suspense } from 'react';
// const DashboardStats = ({ data = {} }) => {
//   const {
//     currentStreak = 0,
//     longestStreak = 0,
//     questionsAnswered = 0,
//     averageScore = 0,
//     hoursStudied = 0,
//     targetHours = 100,
//     rankings = [],
//     studyTimeRank = { rank: 0, total: 0 },
//     overallRank = { rank: 0, total: 0 },
//     lastWeekActivity = Array(7).fill(0),
//     progressData = [],
//     subjects = [],
//     plan = {
//       name: 'Free Plan',
//       features: ['Basic access', 'Limited questions', 'Community support'],
//       isPro: false
//     }
//   } = data;

//   // Calculate progress percentage for gamification
//   const streakProgress = Math.min((currentStreak / 30) * 100, 100);
//   const studyProgress = (hoursStudied / targetHours) * 100;
//   const nextRankProgress = ((overallRank.total - overallRank.rank) / overallRank.total) * 100;

//   // Milestone messages
//   const getStreakMessage = () => {
//     if (streakProgress >= 100) return 'Milestone achieved! 🎉';
//     return `${30 - currentStreak} days to reach milestone!`;
//   };

//   const getStudyMessage = () => {
//     const remainingHours = targetHours - hoursStudied;
//     const weeklyTarget = Math.ceil(remainingHours / 7);
//     return `${weeklyTarget} hours/week to reach goal`;
//   };

//   const getRankMessage = () => {
//     if (overallRank.rank <= 10) return "You're in the top 10! 🏆";
//     return `${overallRank.rank - 10} ranks to reach top 10!`;
//   };

//   return (
//     <div className="space-y-8">
//       {/* Plan Status & Upgrade Banner */}
//       <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 shadow-sm">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center gap-4">
//             <div className="p-3 bg-white rounded-full">
//               <Crown className={`w-6 h-6 ${plan.isPro ? 'text-yellow-500' : 'text-gray-400'}`} />
//             </div>
//             <div>
//               <h2 className="text-lg font-semibold text-gray-900">{plan.name}</h2>
//               <p className="text-sm text-gray-600">Unlock your full potential</p>
//             </div>
//           </div>
//           {!plan.isPro && (
//             <Link href="/upgrade">
//               <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
//                 Upgrade to Pro
//                 <Sparkles className="w-4 h-4 ml-2" />
//               </Button>
//             </Link>
//           )}
//         </div>
//       </div>

//       {/* Achievement Progress */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Streak Progress */}
//         <Card className="bg-gradient-to-br from-orange-50 to-red-50">
//           <CardContent className="p-6">
//             <div className="flex items-center gap-3 mb-4">
//               <Flame className="w-6 h-6 text-orange-500" />
//               <h3 className="font-semibold text-gray-900">Streak Goal</h3>
//             </div>
//             <div className="space-y-2">
//               <div className="flex justify-between text-sm">
//                 <span>{currentStreak} days</span>
//                 <span>30 days</span>
//               </div>
//               <div className="h-2 bg-gray-200 rounded-full">
//                 <div 
//                   className="h-full bg-orange-500 rounded-full transition-all"
//                   style={{ width: `${streakProgress}%` }}
//                 />
//               </div>
//               <p className="text-sm text-gray-600">{getStreakMessage()}</p>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Study Progress */}
//         <Card className="bg-gradient-to-br from-purple-50 to-pink-50">
//           <CardContent className="p-6">
//             <div className="flex items-center gap-3 mb-4">
//               <Clock className="w-6 h-6 text-purple-500" />
//               <h3 className="font-semibold text-gray-900">Study Goal</h3>
//             </div>
//             <div className="space-y-2">
//               <div className="flex justify-between text-sm">
//                 <span>{hoursStudied} hours</span>
//                 <span>{targetHours} hours</span>
//               </div>
//               <div className="h-2 bg-gray-200 rounded-full">
//                 <div 
//                   className="h-full bg-purple-500 rounded-full transition-all"
//                   style={{ width: `${studyProgress}%` }}
//                 />
//               </div>
//               <p className="text-sm text-gray-600">{getStudyMessage()}</p>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Rank Progress */}
//         <Card className="bg-gradient-to-br from-blue-50 to-cyan-50">
//           <CardContent className="p-6">
//             <div className="flex items-center gap-3 mb-4">
//               <Trophy className="w-6 h-6 text-blue-500" />
//               <h3 className="font-semibold text-gray-900">Ranking Progress</h3>
//             </div>
//             <div className="space-y-2">
//               <div className="flex justify-between text-sm">
//                 <span>Rank #{overallRank.rank}</span>
//                 <span>Top 10</span>
//               </div>
//               <div className="h-2 bg-gray-200 rounded-full">
//                 <div 
//                   className="h-full bg-blue-500 rounded-full transition-all"
//                   style={{ width: `${nextRankProgress}%` }}
//                 />
//               </div>
//               <p className="text-sm text-gray-600">{getRankMessage()}</p>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {/* Stats cards here */}
//       </div>

//       {/* Charts and Rankings */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Activity Chart */}
//         <Card>
//           <CardContent className="p-6">
//             <h2 className="text-lg font-semibold text-gray-900 mb-4">Progress Trends</h2>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart data={progressData}>
//                   <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
//                   <XAxis dataKey="date" />
//                   <YAxis />
//                   <Tooltip />
//                   <Line 
//                     type="monotone" 
//                     dataKey="score" 
//                     stroke="#2563eb" 
//                     strokeWidth={2}
//                     dot={{ stroke: '#2563eb', fill: '#fff' }}
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Subject Performance */}
//         <Card>
//           <CardContent className="p-6">
//             <h2 className="text-lg font-semibold text-gray-900 mb-4">Subject Mastery</h2>
//             <div className="space-y-4">
//               {subjects.map((subject) => (
//                 <div key={subject.name} className="space-y-2">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                       <span className="text-sm font-medium text-gray-600">{subject.name}</span>
//                       {subject.rank <= 3 && <Award className="w-4 h-4 text-yellow-500" />}
//                     </div>
//                     <span className="text-sm font-medium text-gray-900">
//                       {subject.score}% (#{subject.rank})
//                     </span>
//                   </div>
//                   <div className="h-2 bg-gray-100 rounded-full">
//                     <div 
//                       className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
//                       style={{ width: `${subject.score}%` }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default DashboardStats;
// components/Dashboard/DashboardStats.js
'use client';

import React, { Suspense } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { 
  Flame, Trophy, Clock, Users, Crown, Star, 
  TrendingUp, Target, Medal, Zap, Award, Sparkles
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Loading = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  </div>
);

const DashboardContent = ({ data = {} }) => {
  const {
    currentStreak = 0,
    longestStreak = 0,
    questionsAnswered = 0,
    averageScore = 0,
    hoursStudied = 0,
    targetHours = 100,
    rankings = [],
    studyTimeRank = { rank: 0, total: 0 },
    overallRank = { rank: 0, total: 0 },
    lastWeekActivity = Array(7).fill(0),
    progressData = [],
    subjects = [],
    plan = {
      name: 'Free Plan',
      features: ['Basic access', 'Limited questions', 'Community support'],
      isPro: false
    }
  } = data;

  const streakProgress = Math.min((currentStreak / 30) * 100, 100);
  const studyProgress = (hoursStudied / targetHours) * 100;
  const nextRankProgress = ((overallRank.total - overallRank.rank) / overallRank.total) * 100;

  const getStreakMessage = () => {
    if (streakProgress >= 100) return 'Milestone achieved! 🎉';
    return `${30 - currentStreak} days to reach milestone!`;
  };

  const getStudyMessage = () => {
    const remainingHours = targetHours - hoursStudied;
    const weeklyTarget = Math.ceil(remainingHours / 7);
    return `${weeklyTarget} hours/week to reach goal`;
  };

  const getRankMessage = () => {
    if (overallRank.rank <= 10) return "You're in the top 10! 🏆";
    return `${overallRank.rank - 10} ranks to reach top 10!`;
  };

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 shadow-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white rounded-full">
              <Crown className={`w-6 h-6 ${plan.isPro ? 'text-yellow-500' : 'text-gray-400'}`} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">{plan.name}</h2>
              <p className="text-sm text-gray-600">Unlock your full potential</p>
            </div>
          </div>
          {!plan.isPro && (
            <Link href="/upgrade">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                Upgrade to Pro
                <Sparkles className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-orange-50 to-red-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Flame className="w-6 h-6 text-orange-500" />
              <h3 className="font-semibold text-gray-900">Streak Goal</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{currentStreak} days</span>
                <span>30 days</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-orange-500 rounded-full transition-all"
                  style={{ width: `${streakProgress}%` }}
                />
              </div>
              <p className="text-sm text-gray-600">{getStreakMessage()}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-pink-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-purple-500" />
              <h3 className="font-semibold text-gray-900">Study Goal</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{hoursStudied} hours</span>
                <span>{targetHours} hours</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-purple-500 rounded-full transition-all"
                  style={{ width: `${studyProgress}%` }}
                />
              </div>
              <p className="text-sm text-gray-600">{getStudyMessage()}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-6 h-6 text-blue-500" />
              <h3 className="font-semibold text-gray-900">Ranking Progress</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Rank #{overallRank.rank}</span>
                <span>Top 10</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-blue-500 rounded-full transition-all"
                  style={{ width: `${nextRankProgress}%` }}
                />
              </div>
              <p className="text-sm text-gray-600">{getRankMessage()}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Stats cards here */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Progress Trends</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={progressData}>
                  <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#2563eb" 
                    strokeWidth={2}
                    dot={{ stroke: '#2563eb', fill: '#fff' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Subject Mastery</h2>
            <div className="space-y-4">
              {subjects.map((subject) => (
                <div key={subject.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-600">{subject.name}</span>
                      {subject.rank <= 3 && <Award className="w-4 h-4 text-yellow-500" />}
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {subject.score}% (#{subject.rank})
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                      style={{ width: `${subject.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const DashboardStats = ({ data }) => {
  return (
    <Suspense fallback={<Loading />}>
      <DashboardContent data={data} />
    </Suspense>
  );
};

export default DashboardStats;