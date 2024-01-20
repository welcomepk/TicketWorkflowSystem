
import { Container } from 'react-bootstrap'
import { Outlet, Navigate } from 'react-router-dom'
import { useUser } from '../contexts/UserContext'
import AdminDashboard from './AdminDashboard'
import EmployeeDashboard from './EmployeeDashboard'

const Dashboard = () => {
    const { user } = useUser()
    if (!user) return <Navigate to='/login' />
    const isAdmin = user.role === 'admin'

    return (
        <Container>
            <div className='mt-4'>
                <h2>Welcome, {user.employeeName}</h2>
                {isAdmin ? <AdminDashboard /> : <EmployeeDashboard />}
            </div>
        </Container>
    )
}

export default Dashboard