// app/dashboard/layout.js
import { redirect } from "next/navigation";
import { createClient } from "@/libs/supabase/server";
import config from "@/config";
import HomeHeader from "@/components/Quiz/HHeader";

export default async function DashboardLayout({ children }) {
  try {
    // Verify authentication
    const supabase = createClient();
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) {
      redirect(config.auth.loginUrl || '/signin');
    }

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Using HomeHeader for consistent navigation */}
        <HomeHeader />
        
        {/* Main Content with proper padding for fixed header */}
        <main className="pt-16">
          {children}
        </main>
      </div>
    );
  } catch (error) {
    console.error("Dashboard layout error:", error);
    redirect(config.auth.loginUrl || '/signin');
  }
}