"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative p-2 hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-full transition-colors"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300 transition-all" />
      ) : (
        <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}

