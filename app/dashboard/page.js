// // app/dashboard/page.js
// import { createClient } from "@/libs/supabase/server";
// import DashboardStats from "@/components/Quiz/DashboardStats";

// export const dynamic = "force-dynamic";

// export default async function Dashboard() {
//   const supabase = createClient();
//   const { data: { user } } = await supabase.auth.getUser();

//   // Fetch all user stats and rankings
//   const { data: stats } = await supabase
//     .from('scoorly_user_stats')
//     .select('*')
//     .eq('user_id', user.id)
//     .single();

//   // Fetch user's rankings for each exam
//   const { data: examRankings } = await supabase
//     .rpc('get_user_rankings', { user_id: user.id });

//   // Fetch study time ranking
//   const { data: timeRanking } = await supabase
//     .rpc('get_study_time_ranking', { user_id: user.id });

//   // Fetch overall ranking
//   const { data: overallRank } = await supabase
//     .rpc('get_overall_ranking', { user_id: user.id });

//   // Fetch last week's activity
//   const { data: weeklyActivity } = await supabase
//     .rpc('get_weekly_activity', { user_id: user.id });

//   // Fetch user's subscription plan
//   const { data: subscription } = await supabase
//     .from('scoorly_subscriptions')
//     .select('*')
//     .eq('user_id', user.id)
//     .single();

//   const planFeatures = subscription?.is_pro ? {
//     name: 'Pro Plan',
//     features: ['Unlimited access', 'Premium content', 'Priority support', 'Advanced analytics'],
//     isPro: true
//   } : {
//     name: 'Free Plan',
//     features: ['Basic access', 'Limited questions', 'Community support'],
//     isPro: false
//   };

//   const dashboardData = {
//     currentStreak: stats?.current_streak || 0,
//     longestStreak: stats?.longest_streak || 0,
//     questionsAnswered: stats?.questions_answered || 0,
//     averageScore: stats?.average_score || 0,
//     hoursStudied: stats?.hours_studied || 0,
//     studyTimeRank: timeRanking || { rank: 0, total: 0 },
//     overallRank: overallRank || { rank: 0, total: 0 },
//     rankings: examRankings || [],
//     lastWeekActivity: weeklyActivity || [],
//     plan: planFeatures
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       <DashboardStats data={dashboardData} />
//     </div>
//   );
// }
// app/dashboard/page.js
import { createClient } from "@/libs/supabase/server";
import DashboardStats from "@/components/Quiz/DashboardStats";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Fetch all user stats and rankings
  const [
    statsResult,
    examRankingsResult,
    timeRankingResult,
    overallRankResult,
    weeklyActivityResult,
    subscriptionResult
  ] = await Promise.all([
    supabase
      .from('scoorly_user_stats')
      .select('*')
      .eq('user_id', user.id)
      .single(),
    supabase
      .rpc('get_user_rankings', { user_id: user.id }),
    supabase
      .rpc('get_study_time_ranking', { user_id: user.id }),
    supabase
      .rpc('get_overall_ranking', { user_id: user.id }),
    supabase
      .rpc('get_weekly_activity', { user_id: user.id }),
    supabase
      .from('scoorly_subscriptions')
      .select('*')
      .eq('user_id', user.id)
      .single()
  ]);

  const { data: stats } = statsResult;
  const { data: examRankings } = examRankingsResult;
  const { data: timeRanking } = timeRankingResult;
  const { data: overallRank } = overallRankResult;
  const { data: weeklyActivity } = weeklyActivityResult;
  const { data: subscription } = subscriptionResult;

  const planFeatures = subscription?.is_pro ? {
    name: 'Pro Plan',
    features: ['Unlimited access', 'Premium content', 'Priority support', 'Advanced analytics'],
    isPro: true
  } : {
    name: 'Free Plan',
    features: ['Basic access', 'Limited questions', 'Community support'],
    isPro: false
  };

  const dashboardData = {
    currentStreak: stats?.current_streak || 0,
    longestStreak: stats?.longest_streak || 0,
    questionsAnswered: stats?.questions_answered || 0,
    averageScore: stats?.average_score || 0,
    hoursStudied: stats?.hours_studied || 0,
    studyTimeRank: timeRanking || { rank: 0, total: 0 },
    overallRank: overallRank || { rank: 0, total: 0 },
    rankings: examRankings || [],
    lastWeekActivity: weeklyActivity || [],
    plan: planFeatures
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <DashboardStats data={dashboardData} />
    </div>
  );
}