import * as React from "react"
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableFooter,
} from "@/design-system/components/Table/table"

// Sample data
const users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User", status: "Inactive" },
  { id: 4, name: "Alice Williams", email: "alice@example.com", role: "Editor", status: "Active" },
  { id: 5, name: "Charlie Brown", email: "charlie@example.com", role: "User", status: "Active" },
]

// Example 1: Basic Table
export function BasicTable() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Basic Table</h2>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

// Example 2: Different Sizes
export function TableSizes() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Table Sizes</h2>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Small</h3>
        <Table size="sm">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.slice(0, 3).map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Medium (Default)</h3>
        <Table size="md">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.slice(0, 3).map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Large</h3>
        <Table size="lg">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.slice(0, 3).map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

// Example 3: Striped & Hoverable
export function StripedHoverableTable() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Striped & Hoverable</h2>
      
      <Table striped hoverable>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

// Example 4: Sticky Header
export function StickyHeaderTable() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Sticky Header (Scroll to see)</h2>
      
      <div className="">
        <Table stickyHeader>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...users, ...users, ...users].map((user, idx) => (
              <TableRow key={idx}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

// Example 5: Sortable Columns
export function SortableTable() {
  const [sortConfig, setSortConfig] = React.useState<{
    key: string
    direction: "asc" | "desc"
  } | null>(null)

  const sortedUsers = React.useMemo(() => {
    if (!sortConfig) return users

    return [...users].sort((a, b) => {
      const aValue = a[sortConfig.key as keyof typeof a]
      const bValue = b[sortConfig.key as keyof typeof b]

      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1
      return 0
    })
  }, [sortConfig])

  const handleSort = (key: string) => {
    setSortConfig((current) => {
      if (!current || current.key !== key) {
        return { key, direction: "asc" }
      }
      if (current.direction === "asc") {
        return { key, direction: "desc" }
      }
      return null
    })
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Sortable Table</h2>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead
              sortable
              sorted={sortConfig?.key === "name" ? sortConfig.direction : false}
              onSort={() => handleSort("name")}
            >
              Name
            </TableHead>
            <TableHead
              sortable
              sorted={sortConfig?.key === "email" ? sortConfig.direction : false}
              onSort={() => handleSort("email")}
            >
              Email
            </TableHead>
            <TableHead
              sortable
              sorted={sortConfig?.key === "role" ? sortConfig.direction : false}
              onSort={() => handleSort("role")}
            >
              Role
            </TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

// Example 6: With Footer
export function TableWithFooter() {
  const totalUsers = users.length
  const activeUsers = users.filter((u) => u.status === "Active").length

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Table with Footer</h2>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total Users</TableCell>
            <TableCell align="right">{totalUsers} ({activeUsers} active)</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}

// Example 7: Bordered Table
export function BorderedTable() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Bordered Table</h2>
      
      <Table bordered variant="bordered">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead align="center">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell align="center">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  user.status === "Active" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-gray-100 text-gray-800"
                }`}>
                  {user.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

// Example 8: Loading State
export function LoadingTable() {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Loading State</h2>
      
      <button
        onClick={() => setLoading(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Reload
      </button>

      <Table loading={loading}>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

// Example 9: Empty State
export function EmptyTable() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Empty State</h2>
      
      <Table emptyMessage="No users found. Add your first user to get started.">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Empty - shows empty message */}
        </TableBody>
      </Table>
    </div>
  )
}

// Example 10: Clickable Rows
export function ClickableRowsTable() {
  const [selectedId, setSelectedId] = React.useState<number | null>(null)

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Clickable Rows</h2>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              clickable
              data-state={selectedId === user.id ? "selected" : undefined}
              onClick={() => setSelectedId(user.id)}
            >
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {selectedId && (
        <div className="p-4 bg-blue-50 rounded-md">
          <p className="text-sm">Selected user ID: {selectedId}</p>
        </div>
      )}
    </div>
  )
}

// Main Demo
export default function TableDemo() {
  return (
    <div className="max-w-6xl mx-auto p-8 space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-2">Table Component Examples</h1>
        <p className="text-gray-600">Comprehensive table component for your design system</p>
      </div>

      <BasicTable />
      <hr />
      
      <TableSizes />
      <hr />
      
      <StripedHoverableTable />
      <hr />
      
      <StickyHeaderTable />
      <hr />
      
      <SortableTable />
      <hr />
      
      <TableWithFooter />
      <hr />
      
      <BorderedTable />
      <hr />
      
      <LoadingTable />
      <hr />
      
      <EmptyTable />
      <hr />
      
      <ClickableRowsTable />
    </div>
  )
}