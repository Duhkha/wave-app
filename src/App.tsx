import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SidebarProvider } from './providers/SidebarProvider'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import SidebarLayout from './components/SidebarLayout'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import Offers from './pages/Offers'

function App() {
  return (
    <Router>
      <SidebarProvider>
        <div className="min-h-screen">
          <TopBar />
          <Sidebar />
          <SidebarLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </SidebarLayout>
        </div>
      </SidebarProvider>
    </Router>
  )
}

export default App
