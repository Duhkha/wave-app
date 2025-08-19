# Wave App

A modern React application built with Vite, TypeScript, and Tailwind CSS, showcasing the `duhkha-wave-test` UI component library. This application serves as a demonstration of how to integrate and use the Wave UI library in a real-world project.

## 🚀 Tech Stack

- **React 19** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **duhkha-wave-test** - Custom UI component library

## 🎯 Project Overview

Wave App is designed as a demonstration application that showcases how to integrate the `duhkha-wave-test` UI library into a modern React application. It features:

- **Collapsible Sidebar Navigation** - Context-based sidebar with mobile support
- **Fixed Top Bar** - Navigation header with logo and dropdown functionality
- **Responsive Layout** - Adapts to desktop and mobile screens
- **Multiple Pages** - Home, Dashboard, Offers (using UI library), About, and Settings
- **Rich UI Components** - Powered by the duhkha-wave-test library

## 📦 Key Features

### Sidebar Navigation System
- **Collapsible Design** - Expands to 280px, collapses to 60px
- **Mobile Responsive** - Overlay mode on mobile devices
- **Context Management** - React Context for state management
- **Smooth Animations** - CSS transitions for all interactions

### UI Library Integration
The **Offers page** demonstrates the full power of the `duhkha-wave-test` library:
- **LayoutRenderer** - Dynamic component rendering system
- **Rich Components** - Testimonials, hero banners, feature grids, FAQs
- **Interactive Elements** - Filters, notifications, carousels
- **Responsive Design** - Mobile-first approach

## 🛠 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd wave-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Sidebar.tsx     # Main navigation sidebar
│   ├── TopBar.tsx      # Fixed header with logo/dropdown
│   ├── SidebarLayout.tsx   # Content layout wrapper
│   └── SidebarToggle.tsx   # Toggle button component
├── contexts/           # React Context definitions
│   └── SidebarContext.ts   # Sidebar state management
├── hooks/              # Custom React hooks
│   └── useSidebar.ts   # Sidebar context hook
├── pages/              # Route components
│   ├── Home.tsx        # Welcome page
│   ├── Dashboard.tsx   # Analytics dashboard
│   ├── Offers.tsx      # UI library showcase
│   ├── About.tsx       # About page
│   └── Settings.tsx    # Settings page
├── providers/          # Context providers
│   └── SidebarProvider.tsx # Sidebar state provider
└── assets/             # Static assets
    └── wave.png        # App logo
```

## 🎨 Using the UI Library

### Basic Integration

The `duhkha-wave-test` library is integrated through the `LayoutRenderer` component:

```tsx
import { LayoutRenderer, type LayoutConfig } from 'duhkha-wave-test'

const layoutConfig: LayoutConfig = [
  {
    type: "herobanner",
    props: {
      title: "Welcome to Wave",
      description: "Modern UI components for React",
      // ... other props
    }
  },
  {
    type: "testimonials",
    props: {
      title: "What Our Users Say",
      testimonials: [
        // ... testimonial data
      ]
    }
  }
]

export default function MyPage() {
  return <LayoutRenderer config={layoutConfig} />
}
```

### Available Components

The library provides numerous component types:
- **herobanner** - Hero sections with CTAs
- **testimonials** - Customer testimonial sections  
- **featuregrid** - Feature showcase grids
- **notification** - Alert/notification bars
- **filters** - Interactive filter controls
- **faq** - Expandable FAQ sections
- **carousel** - Image/content carousels
- **calculator** - Interactive calculators
- And many more...

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS v3 with custom configuration to support the UI library:

```js
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/duhkha-wave-test/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Routing
React Router is configured with the following routes:
- `/` - Home page
- `/dashboard` - Analytics dashboard
- `/offers` - UI library showcase
- `/about` - About page  
- `/settings` - Settings page

## 🎯 Key Implementation Details

### Sidebar Context Management
```tsx
// Sidebar state is managed through React Context
const { isOpen, toggleSidebar, openSidebar, closeSidebar } = useSidebar()
```

### Responsive Design
- **Desktop**: Sidebar pushes content when expanded
- **Mobile**: Sidebar overlays content with backdrop
- **Breakpoint**: 768px (Tailwind's `md` breakpoint)

### UI Library Integration
- Library CSS is imported in `main.tsx`
- Components are configured through TypeScript interfaces
- Full type safety with `LayoutConfig` type

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 Notes

This application serves as a reference implementation for integrating the `duhkha-wave-test` UI library. The **Offers page** demonstrates the full capabilities of the library with rich, interactive components that can be easily configured through the `LayoutRenderer` system.

The sidebar navigation system provides a professional application shell that can be easily customized and extended for different use cases.

## 🤝 Contributing

This is a demonstration application. For issues with the UI library components, please refer to the `duhkha-wave-test` package documentation.