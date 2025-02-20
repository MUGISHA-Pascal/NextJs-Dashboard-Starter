"use client"

import Layout from "@/components/dashboard-starter/layout"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"

const roles = [
  { id: 1, name: "Administrator", description: "Full access to all features" },
  { id: 2, name: "Manager", description: "Access to most features, excluding sensitive operations" },
  { id: 3, name: "Editor", description: "Can edit and publish content" },
  { id: 4, name: "Viewer", description: "Read-only access to content" },
  { id: 5, name: "Guest", description: "Limited access to public information" },
]

const permissions = [
  { id: 1, name: "View Dashboard", description: "Access to view the main dashboard" },
  { id: 2, name: "Manage Users", description: "Create, edit, and delete user accounts" },
  { id: 3, name: "Edit Content", description: "Create and modify content on the platform" },
  { id: 4, name: "Access Reports", description: "View and download analytical reports" },
  { id: 5, name: "Manage Billing", description: "Access to billing and payment information" },
]

export default function PermissionsPage() {
  const [rolePermissions, setRolePermissions] = useState<Record<number, Set<number>>>(
    roles.reduce((acc, role) => ({ ...acc, [role.id]: new Set() }), {}),
  )

  const togglePermission = (roleId: number, permissionId: number) => {
    setRolePermissions((prev) => {
      const newPermissions = new Set(prev[roleId])
      if (newPermissions.has(permissionId)) {
        newPermissions.delete(permissionId)
      } else {
        newPermissions.add(permissionId)
      }
      return { ...prev, [roleId]: newPermissions }
    })
  }

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Permissions</h1>
        <div className="bg-white dark:bg-[#1F1F23] rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Permission
                </th>
                {roles.map((role) => (
                  <th
                    key={role.id}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                  >
                    {role.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-[#1F1F23] divide-y divide-gray-200 dark:divide-gray-700">
              {permissions.map((permission) => (
                <tr key={permission.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {permission.name}
                    <p className="text-xs text-gray-500 dark:text-gray-400">{permission.description}</p>
                  </td>
                  {roles.map((role) => (
                    <td key={role.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      <Switch
                        checked={rolePermissions[role.id].has(permission.id)}
                        onCheckedChange={() => togglePermission(role.id, permission.id)}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

