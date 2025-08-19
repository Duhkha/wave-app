import React from 'react'

// Simulate components from your UI library with potential conflicting classes
// These represent what your actual library components might look like

export const MockButton: React.FC<{
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
}> = ({ children, variant = 'primary', size = 'md' }) => {
  // These classes might conflict with your app's button styles
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
  
  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-500", 
    danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500"
  }
  
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-sm", 
    lg: "px-6 py-3 text-base"
  }

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}>
      {children}
    </button>
  )
}

export const MockCard: React.FC<{
  children: React.ReactNode
  padding?: 'sm' | 'md' | 'lg'
}> = ({ children, padding = 'md' }) => {
  // These classes might conflict with your app's card styles
  const baseClasses = "bg-white rounded-lg shadow-sm border border-gray-200"
  
  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  }

  return (
    <div className={`${baseClasses} ${paddingClasses[padding]}`}>
      {children}
    </div>
  )
}

export const MockInput: React.FC<{
  placeholder?: string
  type?: string
  label?: string
}> = ({ placeholder, type = 'text', label }) => {
  // These classes might conflict with your app's input styles
  const inputClasses = "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
  const labelClasses = "block text-sm font-medium text-gray-700 mb-2"

  return (
    <div>
      {label && <label className={labelClasses}>{label}</label>}
      <input 
        type={type}
        placeholder={placeholder}
        className={inputClasses}
      />
    </div>
  )
}

export const MockBadge: React.FC<{
  children: React.ReactNode
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'gray'
}> = ({ children, color = 'blue' }) => {
  // These classes might conflict with your app's badge styles
  const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
  
  const colorClasses = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800", 
    red: "bg-red-100 text-red-800",
    yellow: "bg-yellow-100 text-yellow-800",
    gray: "bg-gray-100 text-gray-800"
  }

  return (
    <span className={`${baseClasses} ${colorClasses[color]}`}>
      {children}
    </span>
  )
}

// Simulate a complex component that might have deep style conflicts
export const MockDataTable: React.FC = () => {
  return (
    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">
              Role
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              John Doe
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <MockBadge color="green">Active</MockBadge>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Admin
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Jane Smith
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <MockBadge color="yellow">Pending</MockBadge>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              User
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

// Component that intentionally uses same classes as your app
export const ConflictingComponent: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">
        This uses same classes as your app components
      </h3>
      <p className="text-slate-600 mb-4">
        If your UI library uses the same classes, they might conflict with these styles.
      </p>
      <button className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Same button classes as your app
      </button>
    </div>
  )
}