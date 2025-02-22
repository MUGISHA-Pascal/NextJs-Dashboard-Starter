import Layout from "../../components/Dashboard-starter/layout";
import { CheckCircle, Clock, AlertTriangle } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Website Redesign",
    status: "Completed",
    dueDate: "2023-06-30",
  },
  {
    id: 2,
    name: "Mobile App Development",
    status: "In Progress",
    dueDate: "2023-08-15",
  },
  { id: 3, name: "Data Migration", status: "Pending", dueDate: "2023-07-31" },
  {
    id: 4,
    name: "Cloud Infrastructure Setup",
    status: "In Progress",
    dueDate: "2023-09-30",
  },
  { id: 5, name: "AI Integration", status: "Pending", dueDate: "2023-10-31" },
];

export default function ProjectsPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Projects</h1>
        <div className="bg-white dark:bg-[#1F1F23] rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Due Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-[#1F1F23] divide-y divide-gray-200 dark:divide-gray-700">
              {projects.map((project) => (
                <tr key={project.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {project.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        project.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : project.status === "In Progress"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {project.status === "Completed" && (
                        <CheckCircle className="mr-1 h-4 w-4" />
                      )}
                      {project.status === "In Progress" && (
                        <Clock className="mr-1 h-4 w-4" />
                      )}
                      {project.status === "Pending" && (
                        <AlertTriangle className="mr-1 h-4 w-4" />
                      )}
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {project.dueDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
