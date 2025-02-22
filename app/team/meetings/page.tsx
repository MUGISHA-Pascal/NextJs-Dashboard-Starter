import Layout from "../../../components/dashboard-starter/layout"
import { Calendar, Clock, Users, VideoIcon } from "lucide-react"

const meetings = [
  { id: 1, title: "Weekly Team Sync", date: "2023-06-20", time: "10:00 AM", attendees: 8, type: "Video Call" },
  { id: 2, title: "Project Kickoff", date: "2023-06-21", time: "2:00 PM", attendees: 12, type: "In-person" },
  { id: 3, title: "Client Presentation", date: "2023-06-22", time: "11:30 AM", attendees: 5, type: "Video Call" },
  { id: 4, title: "Budget Review", date: "2023-06-23", time: "3:00 PM", attendees: 4, type: "Video Call" },
  { id: 5, title: "Product Demo", date: "2023-06-24", time: "1:00 PM", attendees: 20, type: "Webinar" },
]

export default function MeetingsPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Upcoming Meetings</h1>
        <div className="bg-white dark:bg-[#1F1F23] rounded-lg shadow overflow-hidden">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {meetings.map((meeting) => (
              <li
                key={meeting.id}
                className="p-6 hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-150 ease-in-out"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <VideoIcon className="h-8 w-8 text-blue-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{meeting.title}</p>
                    <div className="flex items-center mt-1">
                      <Calendar className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                      <p className="text-sm text-gray-500 dark:text-gray-400">{meeting.date}</p>
                    </div>
                    <div className="flex items-center mt-1">
                      <Clock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                      <p className="text-sm text-gray-500 dark:text-gray-400">{meeting.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Users className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                      <p className="text-sm text-gray-500 dark:text-gray-400">{meeting.attendees} attendees</p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
                      {meeting.type}
                    </span>
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

