import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableFooter,
  TableCaption
} from "./table"

const meta: Meta<typeof Table> = {
  title: "components/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "A flexible and feature-rich table component with support for sorting, sticky headers, different sizes, and more.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size variant of the table",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    variant: {
      control: "select",
      options: ["default", "bordered", "minimal"],
      description: "Visual variant of the table",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    stickyHeader: {
      control: "boolean",
      description: "Makes the header sticky on scroll",
    },
    striped: {
      control: "boolean",
      description: "Adds zebra striping to rows",
    },
    hoverable: {
      control: "boolean",
      description: "Adds hover effect to rows",
      table: {
        defaultValue: { summary: "true" },
      },
    },
    bordered: {
      control: "boolean",
      description: "Adds borders to all cells",
    },
    loading: {
      control: "boolean",
      description: "Shows loading overlay",
    },
    caption: {
      control: "text",
      description: "Table caption text",
    },
    emptyMessage: {
      control: "text",
      description: "Message shown when table is empty",
    },
  },
}

export default meta
type Story = StoryObj<typeof Table>

// Sample data
const sampleUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User", status: "Inactive" },
  { id: 4, name: "Alice Williams", email: "alice@example.com", role: "Editor", status: "Active" },
  { id: 5, name: "Charlie Brown", email: "charlie@example.com", role: "User", status: "Active" },
]

// Basic Table
export const Default: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleUsers.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

// Small Size
export const SmallSize: Story = {
  render: (args) => (
    <Table {...args} size="sm">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleUsers.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

// Medium Size (Default)
export const MediumSize: Story = {
  render: (args) => (
    <Table {...args} size="md">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleUsers.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

// Large Size
export const LargeSize: Story = {
  render: (args) => (
    <Table {...args} size="lg">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleUsers.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

// Striped Rows
export const Striped: Story = {
  render: (args) => (
    <Table {...args} striped>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleUsers.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

// Hoverable Rows
export const Hoverable: Story = {
  render: (args) => (
    <Table {...args} hoverable>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleUsers.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

// Bordered
export const Bordered: Story = {
  render: (args) => (
    <Table {...args} bordered variant="bordered">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead align="center">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleUsers.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell align="center">{user.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

// Sticky Header
export const StickyHeader: Story = {
  render: (args) => (
    <Table {...args} stickyHeader striped>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[...sampleUsers, ...sampleUsers, ...sampleUsers, ...sampleUsers].map((user, idx) => (
          <TableRow key={idx}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story: "Scroll down to see the sticky header in action. The header stays visible while scrolling through the table content.",
      },
    },
  },
}

// With Footer
export const WithFooter: Story = {
  render: (args) => {
    const totalUsers = sampleUsers.length
    const activeUsers = sampleUsers.filter((u) => u.status === "Active").length

    return (
      <Table {...args}>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleUsers.map((user) => (
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
            <TableCell align="right">
              {totalUsers} ({activeUsers} active)
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  },
}

// With Caption
export const WithCaption: Story = {
  render: (args) => (
    <Table {...args} caption="User management table showing all registered users">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleUsers.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

// Loading State
export const Loading: Story = {
  render: (args) => (
    <Table {...args} loading>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleUsers.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

// Empty State
export const Empty: Story = {
  render: (args) => (
    <Table {...args} isEmpty emptyMessage="No users found. Add your first user to get started.">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* Empty */}
      </TableBody>
    </Table>
  ),
}

// Sortable Columns
export const Sortable: Story = {
  render: (args) => {
    const [sortConfig, setSortConfig] = useState<{
      key: string
      direction: "asc" | "desc"
    } | null>(null)

    const sortedUsers = [...sampleUsers].sort((a, b) => {
      if (!sortConfig) return 0

      const aValue = a[sortConfig.key as keyof typeof a]
      const bValue = b[sortConfig.key as keyof typeof b]

      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1
      return 0
    })

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
      <Table {...args}>
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
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Click on column headers to sort. Click again to reverse sort order, and once more to clear sorting.",
      },
    },
  },
}

// Clickable Rows
export const ClickableRows: Story = {
  render: (args) => {
    const [selectedId, setSelectedId] = useState<number | null>(null)

    return (
      <div className="space-y-4">
        <Table {...args}>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleUsers.map((user) => (
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
          <div className="p-4 bg-blue-50 rounded-md border border-blue-200">
            <p className="text-sm text-blue-900">
              Selected user ID: <strong>{selectedId}</strong>
            </p>
          </div>
        )}
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Click on any row to select it. The selected row is highlighted.",
      },
    },
  },
}

// Cell Alignment
export const CellAlignment: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHead align="left">Left Aligned</TableHead>
          <TableHead align="center">Center Aligned</TableHead>
          <TableHead align="right">Right Aligned</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleUsers.slice(0, 3).map((user) => (
          <TableRow key={user.id}>
            <TableCell align="left">{user.name}</TableCell>
            <TableCell align="center">{user.role}</TableCell>
            <TableCell align="right">{user.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

// Text Truncation
export const TextTruncation: Story = {
  render: (args) => {
    const longTextUsers = sampleUsers.map((user) => ({
      ...user,
      email: user.email + ".verylongdomainname.example.com",
    }))

    return (
      <Table {...args}>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email (Truncated)</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {longTextUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell truncate title={user.email}>
                {user.email}
              </TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  },
}

// Combined Features
export const CombinedFeatures: Story = {
  render: (args) => (
    <Table {...args} striped hoverable size="md" variant="default">
      <TableCaption>User management dashboard - showing all active users</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead align="center">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleUsers.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell align="center">
              <span
                className={`inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium ${
                  user.status === "Active"
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {user.status}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total Users</TableCell>
          <TableCell align="right">{sampleUsers.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story: "A table combining multiple features: striped rows, hover effects, caption, footer, and custom cell styling.",
      },
    },
  },
}

// Minimal Variant
export const MinimalVariant: Story = {
  render: (args) => (
    <Table {...args} variant="minimal">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleUsers.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}