"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Bell, ChevronRight } from "lucide-react";
import Profile01 from "./profile-01";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

const breadcrumbMap: { [key: string]: BreadcrumbItem[] } = {
  "/dashboard": [{ label: "Dashboard-starter", href: "/dashboard" }],
  "/analytics": [
    { label: "Dashboard-starter", href: "/dashboard" },
    { label: "Analytics", href: "/analytics" },
  ],
  "/organization": [
    { label: "Dashboard-starter", href: "/dashboard" },
    { label: "Organization", href: "/organization" },
  ],
  "/projects": [
    { label: "Dashboard-starter", href: "/dashboard" },
    { label: "Projects", href: "/projects" },
  ],
  "/transactions": [
    { label: "Dashboard-starter", href: "/dashboard" },
    { label: "Transactions", href: "/transactions" },
  ],
  "/invoices": [
    { label: "Dashboard-starter", href: "/dashboard" },
    { label: "Invoices", href: "/invoices" },
  ],
  "/payments": [
    { label: "Dashboard-starter", href: "/dashboard" },
    { label: "Payments", href: "/payments" },
  ],
  "/members": [
    { label: "Dashboard-starter", href: "/dashboard" },
    { label: "Members", href: "/members" },
  ],
  "/permissions": [
    { label: "Dashboard-starter", href: "/dashboard" },
    { label: "Permissions", href: "/permissions" },
  ],
  "/chat": [
    { label: "Dashboard-starter", href: "/dashboard" },
    { label: "Chat", href: "/chat" },
  ],
  "/meetings": [
    { label: "Dashboard-starter", href: "/dashboard" },
    { label: "Meetings", href: "/meetings" },
  ],
  "/settings": [
    { label: "Dashboard-starter", href: "/dashboard" },
    { label: "Settings", href: "/settings" },
  ],
  "/help": [
    { label: "Dashboard-starter", href: "/dashboard" },
    { label: "Help", href: "/help" },
  ],
  "/finance/transactions": [
    { label: "Dashboard-starter", href: "/dashboard" },
    { label: "Finance", href: "/finance" },
    { label: "Transactions", href: "/finance/transactions" },
  ],
  "/finance/invoices": [
    { label: "Dashboard-starter", href: "/dashboard" },
    { label: "Finance", href: "/finance" },
    { label: "Invoices", href: "/finance/invoices" },
  ],
  "/finance/payments": [
    { label: "Dashboard-starter", href: "/dashboard" },
    { label: "Finance", href: "/finance" },
    { label: "Payments", href: "/finance/payments" },
  ],
  "/team/members": [
    { label: "Dashboard-starter", href: "/dashboard" },
    { label: "Team", href: "/team" },
    { label: "Members", href: "/team/members" },
  ],
  "/team/permissions": [
    { label: "Dashboard-starter", href: "/dashboard" },
    { label: "Team", href: "/team" },
    { label: "Permissions", href: "/team/permissions" },
  ],
  "/team/chat": [
    { label: "Dashboard-starter", href: "/dashboard" },
    { label: "Team", href: "/team" },
    { label: "Chat", href: "/team/chat" },
  ],
  "/team/meetings": [
    { label: "Dashboard-starter", href: "/dashboard" },
    { label: "Team", href: "/team" },
    { label: "Meetings", href: "/team/meetings" },
  ],
};

export default function TopNav() {
  const pathname = usePathname();

  // Wrap the breadcrumb calculation in a try-catch block
  const breadcrumbs = useMemo(() => {
    try {
      return (
        breadcrumbMap[pathname] || [
          { label: "Dashboard-starter", href: "/dashboard" },
        ]
      );
    } catch (error) {
      console.error("Error in breadcrumb calculation:", error);
      return [{ label: "Dashboard-starter", href: "/dashboard" }];
    }
  }, [pathname]);

  return (
    <nav className="px-3 sm:px-6 flex items-center justify-between bg-white dark:bg-[#0F0F12] border-b border-gray-200 dark:border-[#1F1F23] h-full">
      <div className="font-medium text-sm hidden sm:flex items-center space-x-1 truncate max-w-[300px]">
        {breadcrumbs.map((item, index) => (
          <div key={item.label} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 text-gray-500 dark:text-gray-400 mx-1" />
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-gray-900 dark:text-gray-100">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 sm:gap-4 ml-auto sm:ml-0">
        <button
          type="button"
          className="p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-full transition-colors"
        >
          <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300" />
        </button>

        <ThemeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <Image
              src="https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-01-n0x8HFv8EUetf9z6ht0wScJKoTHqf8.png"
              alt="User avatar"
              width={28}
              height={28}
              className="rounded-full ring-2 ring-gray-200 dark:ring-[#2B2B30] sm:w-8 sm:h-8 cursor-pointer"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            sideOffset={8}
            className="w-[280px] sm:w-80 bg-background border-border rounded-lg shadow-lg"
          >
            <Profile01 avatar="https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-01-n0x8HFv8EUetf9z6ht0wScJKoTHqf8.png" />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
