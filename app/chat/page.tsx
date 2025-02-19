"use client"

import type React from "react"

import Layout from "@/components/kokonutui/layout"
import { useState } from "react"
import { Send } from "lucide-react"

const initialMessages = [
  { id: 1, sender: "John Doe", content: "Hey team, how's the project coming along?", timestamp: "10:30 AM" },
  {
    id: 2,
    sender: "Jane Smith",
    content: "We're making good progress. The frontend is almost complete.",
    timestamp: "10:32 AM",
  },
  {
    id: 3,
    sender: "Bob Johnson",
    content: "Great to hear! I've just finished the API endpoints.",
    timestamp: "10:35 AM",
  },
]

export default function ChatPage() {
  const [messages, setMessages] = useState(initialMessages)
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        sender: "You",
        content: newMessage.trim(),
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages([...messages, message])
      setNewMessage("")
    }
  }

  return (
    <Layout>
      <div className="flex flex-col h-[calc(100vh-4rem)]">
        <h1 className="text-2xl font-bold mb-4">Team Chat</h1>
        <div className="flex-1 bg-white dark:bg-[#1F1F23] rounded-lg shadow overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "You" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${message.sender === "You" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"}`}
                >
                  <p className="font-medium text-sm">{message.sender}</p>
                  <p>{message.content}</p>
                  <p className="text-xs text-right mt-1 opacity-70">{message.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="p-4 bg-gray-100 dark:bg-gray-800">
            <div className="flex space-x-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

