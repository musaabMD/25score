// context/UserStatsContext.js
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { createClient } from "@/libs/supabase/client";

const UserStatsContext = createContext();

export function UserStatsProvider({ children }) {
  const [stats, setStats] = useState({
    currentStreak: 0,
    score: 0,
    timeLeft: 1800,
    isPro: false,
    loading: true
  });

  useEffect(() => {
    const fetchUserStats = async () => {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        // Fetch user stats
        const { data: userStats } = await supabase
          .from('scoorly_user_stats')
          .select('*')
          .eq('user_id', user.id)
          .single();

        // Fetch subscription status
        const { data: subscription } = await supabase
          .from('scoorly_subscriptions')
          .select('*')
          .eq('user_id', user.id)
          .single();

        setStats({
          currentStreak: userStats?.current_streak || 0,
          score: userStats?.average_score || 0,
          timeLeft: 1800, // 30 minutes default
          isPro: subscription?.is_pro || false,
          loading: false
        });
      }
    };

    fetchUserStats();
  }, []);

  // Update timer
  useEffect(() => {
    let timer;
    if (stats.timeLeft > 0) {
      timer = setInterval(() => {
        setStats(prev => ({
          ...prev,
          timeLeft: prev.timeLeft - 1
        }));
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [stats.timeLeft]);

  const updateStats = (newStats) => {
    setStats(prev => ({
      ...prev,
      ...newStats
    }));
  };

  return (
    <UserStatsContext.Provider value={{ stats, updateStats }}>
      {children}
    </UserStatsContext.Provider>
  );
}

export function useUserStats() {
  const context = useContext(UserStatsContext);
  if (!context) {
    throw new Error('useUserStats must be used within a UserStatsProvider');
  }
  return context;
}