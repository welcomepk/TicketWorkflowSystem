
import { Routes, Route, Navigate, useNavigate, useNavigation } from "react-router-dom"
import GlobalNavbar from "./components/Navbar"
import Login from "./pages/Login"
import { UserProvider } from "./contexts/UserContext"
import Dashboard from "./components/Dashboard"
import EmployeeDashboard from './components/EmployeeDashboard'
import AdminDashboard from './components/AdminDashboard'

// Application starts from here

function App() {

  return (
    <UserProvider>

      {/* Navbar for all pages */}
      <GlobalNavbar />

      {/* Routing for pages */}
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Dashboard for all pages */}
        <Route
          path="/dashboard"
          element={
            <Dashboard />
          }
        />
        <Route path="*" element={<Navigate to='/login' />} />
      </Routes>

    </UserProvider>
  )
}

export default App
