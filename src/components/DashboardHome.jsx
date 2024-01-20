
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

const DahsboardHome = ({ children }) => {
    return (
        <Container>
            <div className='mt-4'>
                <h2>DahsboardHome</h2>
                <Outlet />
            </div>
        </Container>
    )
}

export default DahsboardHome