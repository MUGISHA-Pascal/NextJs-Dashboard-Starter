import Layout from "@/components/dashboard-starter/layout"
import { ArrowUpRight, ArrowDownLeft } from "lucide-react"

const transactions = [
  { id: 1, description: "Payment from Client A", amount: 5000, type: "income", date: "2023-06-15" },
  { id: 2, description: "Office Supplies", amount: 250, type: "expense", date: "2023-06-14" },
  { id: 3, description: "Subscription Revenue", amount: 1000, type: "income", date: "2023-06-13" },
  { id: 4, description: "Employee Salary", amount: 3000, type: "expense", date: "2023-06-12" },
  { id: 5, description: "Software License", amount: 500, type: "expense", date: "2023-06-11" },
]

export default function TransactionsPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Transactions</h1>
        <div className="bg-white dark:bg-[#1F1F23] rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-[#1F1F23] divide-y divide-gray-200 dark:divide-gray-700">
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {transaction.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    ${transaction.amount.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        transaction.type === "income" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {transaction.type === "income" ? (
                        <ArrowDownLeft className="mr-1 h-4 w-4" />
                      ) : (
                        <ArrowUpRight className="mr-1 h-4 w-4" />
                      )}
                      {transaction.type === "income" ? "Income" : "Expense"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {transaction.date}
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

