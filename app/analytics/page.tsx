import Layout from "@/components/kokonutui/layout";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", Revenue: 4000, Expenses: 2400 },
  { name: "Feb", Revenue: 3000, Expenses: 1398 },
  { name: "Mar", Revenue: 2000, Expenses: 9800 },
  { name: "Apr", Revenue: 2780, Expenses: 3908 },
  { name: "May", Revenue: 1890, Expenses: 4800 },
  { name: "Jun", Revenue: 2390, Expenses: 3800 },
];

export default function AnalyticsPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Analytics</h1>
        <div className="bg-white dark:bg-[#1F1F23] p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Revenue vs Expenses</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Revenue" fill="#8884d8" />
              <Bar dataKey="Expenses" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Layout>
  );
}
