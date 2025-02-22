import Layout from "../../components/Dashboard-starter/layout";
import dynamic from "next/dynamic";

const AnalyticsChart = dynamic(() => import("@/components/AnalyticsChart"), {
  ssr: false,
});

export default function AnalyticsPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Analytics</h1>
        <div className="bg-white dark:bg-[#1F1F23] p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Revenue vs Expenses</h2>
          <AnalyticsChart />
        </div>
      </div>
    </Layout>
  );
}
