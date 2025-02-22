import Layout from "../../components/Dashboard-starter/layout";
import { Users, Briefcase, MapPin } from "lucide-react";

export default function OrganizationPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Organization</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-[#1F1F23] p-6 rounded-lg shadow">
            <div className="flex items-center space-x-3">
              <Users className="h-6 w-6 text-blue-500" />
              <h2 className="text-xl font-semibold">Employees</h2>
            </div>
            <p className="mt-2 text-3xl font-bold">1,234</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Total employees
            </p>
          </div>
          <div className="bg-white dark:bg-[#1F1F23] p-6 rounded-lg shadow">
            <div className="flex items-center space-x-3">
              <Briefcase className="h-6 w-6 text-green-500" />
              <h2 className="text-xl font-semibold">Departments</h2>
            </div>
            <p className="mt-2 text-3xl font-bold">12</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Active departments
            </p>
          </div>
          <div className="bg-white dark:bg-[#1F1F23] p-6 rounded-lg shadow">
            <div className="flex items-center space-x-3">
              <MapPin className="h-6 w-6 text-red-500" />
              <h2 className="text-xl font-semibold">Locations</h2>
            </div>
            <p className="mt-2 text-3xl font-bold">5</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Office locations
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
