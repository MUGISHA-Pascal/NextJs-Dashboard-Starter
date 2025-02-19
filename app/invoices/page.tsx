import Layout from "@/components/kokonutui/layout"
import { CheckCircle, Clock, AlertTriangle } from "lucide-react"

const invoices = [
  { id: 1, client: "Acme Corp", amount: 5000, status: "Paid", dueDate: "2023-06-30" },
  { id: 2, client: "Globex Inc", amount: 7500, status: "Pending", dueDate: "2023-07-15" },
  { id: 3, client: "Initech", amount: 3000, status: "Overdue", dueDate: "2023-06-15" },
  { id: 4, client: "Umbrella Corp", amount: 10000, status: "Paid", dueDate: "2023-07-31" },
  { id: 5, client: "Hooli", amount: 8500, status: "Pending", dueDate: "2023-08-15" },
]

export default function InvoicesPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Invoices</h1>
        <div className="bg-white dark:bg-[#1F1F23] rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Amount
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
              {invoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {invoice.client}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    ${invoice.amount.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        invoice.status === "Paid"
                          ? "bg-green-100 text-green-800"
                          : invoice.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {invoice.status === "Paid" && <CheckCircle className="mr-1 h-4 w-4" />}
                      {invoice.status === "Pending" && <Clock className="mr-1 h-4 w-4" />}
                      {invoice.status === "Overdue" && <AlertTriangle className="mr-1 h-4 w-4" />}
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {invoice.dueDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

