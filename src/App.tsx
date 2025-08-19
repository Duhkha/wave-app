import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SidebarProvider } from './providers/SidebarProvider'
import { ThemeProvider } from './contexts/ThemeContext'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import SidebarLayout from './components/SidebarLayout'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import ConflictTesting from './pages/ConflictTesting'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <SidebarProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <TopBar />
            <Sidebar />
            <SidebarLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/conflict-testing" element={<ConflictTesting />} />
              </Routes>
            </SidebarLayout>
          </div>
        </SidebarProvider>
      </Router>
    </ThemeProvider>
  )
}

export default App
