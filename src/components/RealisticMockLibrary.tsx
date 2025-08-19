import React from 'react'

// Simulate a UI library with a DIFFERENT design system
// This represents a more realistic scenario where conflicts would be visible

export const MaterialButton: React.FC<{
  children: React.ReactNode
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'primary' | 'secondary' | 'error'
}> = ({ children, variant = 'contained', color = 'primary' }) => {
  // Material Design style system - very different from your app
  const baseClasses = "uppercase tracking-wide font-semibold text-sm min-w-16 px-4 py-2 rounded transition-all duration-200 shadow-md hover:shadow-lg"
  
  const variantClasses = {
    contained: {
      primary: "bg-indigo-600 text-white hover:bg-indigo-700",
      secondary: "bg-pink-500 text-white hover:bg-pink-600", 
      error: "bg-red-500 text-white hover:bg-red-600"
    },
    outlined: {
      primary: "border-2 border-indigo-600 text-indigo-600 bg-transparent hover:bg-indigo-50",
      secondary: "border-2 border-pink-500 text-pink-500 bg-transparent hover:bg-pink-50",
      error: "border-2 border-red-500 text-red-500 bg-transparent hover:bg-red-50"
    },
    text: {
      primary: "text-indigo-600 bg-transparent hover:bg-indigo-50 shadow-none",
      secondary: "text-pink-500 bg-transparent hover:bg-pink-50 shadow-none",
      error: "text-red-500 bg-transparent hover:bg-red-50 shadow-none"
    }
  }

  return (
    <button className={`${baseClasses} ${variantClasses[variant][color]}`}>
      {children}
    </button>
  )
}

export const BootstrapCard: React.FC<{
  children: React.ReactNode
  header?: string
}> = ({ children, header }) => {
  // Bootstrap-style card - different from your app's cards
  return (
    <div className="border border-gray-300 rounded-none shadow-none bg-white">
      {header && (
        <div className="px-4 py-3 bg-gray-100 border-b border-gray-300 font-semibold text-gray-800">
          {header}
        </div>
      )}
      <div className="p-4">
        {children}
      </div>
    </div>
  )
}

export const AntDesignInput: React.FC<{
  placeholder?: string
  size?: 'small' | 'middle' | 'large'
  status?: 'error' | 'warning'
}> = ({ placeholder, size = 'middle', status }) => {
  // Ant Design style input - different sizing and borders
  const baseClasses = "border border-gray-400 bg-white text-gray-900 transition-colors duration-200"
  
  const sizeClasses = {
    small: "px-2 py-1 text-sm h-6 rounded",
    middle: "px-3 py-2 text-sm h-8 rounded",
    large: "px-3 py-3 text-base h-10 rounded"
  }

  const statusClasses = {
    error: "border-red-500 focus:border-red-500 focus:ring-red-200",
    warning: "border-yellow-500 focus:border-yellow-500 focus:ring-yellow-200"
  }

  const focusClasses = status ? statusClasses[status] : "focus:border-blue-500 focus:ring-blue-200"

  return (
    <input 
      type="text"
      placeholder={placeholder}
      className={`${baseClasses} ${sizeClasses[size]} ${focusClasses} focus:outline-none focus:ring-2`}
    />
  )
}

export const ChakraUIBadge: React.FC<{
  children: React.ReactNode
  colorScheme?: 'blue' | 'green' | 'red' | 'purple' | 'yellow'
  variant?: 'solid' | 'subtle' | 'outline'
}> = ({ children, colorScheme = 'blue', variant = 'solid' }) => {
  // Chakra UI style badges - different from your app
  const baseClasses = "inline-flex items-center font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider"
  
  const variants = {
    solid: {
      blue: "bg-blue-500 text-white",
      green: "bg-green-500 text-white",
      red: "bg-red-500 text-white", 
      purple: "bg-purple-500 text-white",
      yellow: "bg-yellow-500 text-black"
    },
    subtle: {
      blue: "bg-blue-100 text-blue-800",
      green: "bg-green-100 text-green-800",
      red: "bg-red-100 text-red-800",
      purple: "bg-purple-100 text-purple-800", 
      yellow: "bg-yellow-100 text-yellow-800"
    },
    outline: {
      blue: "border border-blue-500 text-blue-500 bg-transparent",
      green: "border border-green-500 text-green-500 bg-transparent",
      red: "border border-red-500 text-red-500 bg-transparent",
      purple: "border border-purple-500 text-purple-500 bg-transparent",
      yellow: "border border-yellow-500 text-yellow-500 bg-transparent"
    }
  }

  return (
    <span className={`${baseClasses} ${variants[variant][colorScheme]}`}>
      {children}
    </span>
  )
}

// Component that uses !important and inline styles (problematic)
export const ProblematicComponent: React.FC = () => {
  return (
    <div 
      className="p-4 rounded bg-white border"
      style={{
        backgroundColor: '#f8f9fa !important',
        borderColor: '#e9ecef !important',
        borderWidth: '2px !important',
        padding: '24px !important'
      } as React.CSSProperties}
    >
      <h3 
        className="text-lg font-semibold mb-2"
        style={{ 
          color: '#495057 !important',
          fontSize: '20px !important',
          fontWeight: '700 !important'
        } as React.CSSProperties}
      >
        Problematic Component
      </h3>
      <p style={{ color: '#6c757d !important' } as React.CSSProperties}>
        This component uses inline styles with !important - it will override Tailwind classes
      </p>
    </div>
  )
}

// Global CSS conflicts simulation
export const GlobalConflictComponent: React.FC = () => {
  return (
    <div className="global-conflict-test">
      <style>{`
        .global-conflict-test * {
          box-sizing: content-box !important;
          margin: 8px !important;
        }
        .global-conflict-test button {
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4) !important;
          border: none !important;
          color: white !important;
          padding: 12px 24px !important;
          border-radius: 25px !important;
        }
        .global-conflict-test input {
          border: 3px solid #ff6b6b !important;
          border-radius: 20px !important;
          padding: 12px !important;
          font-size: 16px !important;
        }
      `}</style>
      <h3>Global CSS Override Test</h3>
      <p>This component has global CSS that affects all child elements:</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        This button should look different
      </button>
      <input 
        type="text" 
        placeholder="This input should look different"
        className="w-full mt-2 px-3 py-2 border border-gray-300 rounded"
      />
    </div>
  )
}

// Different font system
export const TypographyConflictComponent: React.FC = () => {
  return (
    <div 
      style={{ 
        fontFamily: 'Comic Sans MS, cursive',
        lineHeight: '1.2',
        letterSpacing: '0.1em'
      }}
      className="p-4 bg-yellow-50 border border-yellow-300 rounded"
    >
      <h3 className="text-xl font-bold mb-2">Different Font System</h3>
      <p className="text-base">
        This component forces a different font family and typography settings
      </p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded mt-3">
        Button with different typography
      </button>
    </div>
  )
}