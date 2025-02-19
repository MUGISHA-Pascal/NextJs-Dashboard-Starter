import Layout from "@/components/kokonutui/layout"
import { CreditCard, DollarSign, BanknoteIcon as Bank } from "lucide-react"

const payments = [
  { id: 1, method: "Credit Card", amount: 500, date: "2023-06-15", last4: "1234" },
  { id: 2, method: "PayPal", amount: 750, date: "2023-06-14", email: "user@example.com" },
  { id: 3, method: "Bank Transfer", amount: 1000, date: "2023-06-13", accountNumber: "*****6789" },
  { id: 4, method: "Credit Card", amount: 250, date: "2023-06-12", last4: "5678" },
  { id: 5, method: "Bank Transfer", amount: 1500, date: "2023-06-11", accountNumber: "*****4321" },
]

export default function PaymentsPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Payments</h1>
        <div className="bg-white dark:bg-[#1F1F23] rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Method
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Details
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-[#1F1F23] divide-y divide-gray-200 dark:divide-gray-700">
              {payments.map((payment) => (
                <tr key={payment.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    <span className="inline-flex items-center">
                      {payment.method === "Credit Card" && <CreditCard className="mr-2 h-4 w-4" />}
                      {payment.method === "PayPal" && <DollarSign className="mr-2 h-4 w-4" />}
                      {payment.method === "Bank Transfer" && <Bank className="mr-2 h-4 w-4" />}
                      {payment.method}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    ${payment.amount.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {payment.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {payment.last4 && `Card ending in ${payment.last4}`}
                    {payment.email && payment.email}
                    {payment.accountNumber && `Account ${payment.accountNumber}`}
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

