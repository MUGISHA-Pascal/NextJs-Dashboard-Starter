import Layout from "@/components/dashboard-starter/layout"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

const members = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO",
    email: "john@example.com",
    phone: "+1 234 567 890",
    location: "New York, USA",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CTO",
    email: "jane@example.com",
    phone: "+1 234 567 891",
    location: "San Francisco, USA",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Bob Johnson",
    role: "CFO",
    email: "bob@example.com",
    phone: "+1 234 567 892",
    location: "Chicago, USA",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Alice Brown",
    role: "COO",
    email: "alice@example.com",
    phone: "+1 234 567 893",
    location: "London, UK",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Charlie Wilson",
    role: "CIO",
    email: "charlie@example.com",
    phone: "+1 234 567 894",
    location: "Toronto, Canada",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function MembersPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Team Members</h1>
        <div className="bg-white dark:bg-[#1F1F23] rounded-lg shadow overflow-hidden">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {members.map((member) => (
              <li key={member.id} className="p-6">
                <div className="flex items-center space-x-4">
                  <Image
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{member.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{member.role}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                    >
                      <Phone className="h-5 w-5" />
                    </a>
                    <div className="text-gray-400 flex items-center">
                      <MapPin className="h-5 w-5 mr-1" />
                      <span className="text-sm">{member.location}</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

