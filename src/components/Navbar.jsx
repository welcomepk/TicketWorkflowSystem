import { Container, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

const GlobalNavbar = () => {
    const { user, logout } = useUser()

    return <Navbar expand="lg" bg="dark" data-bs-theme="dark" className='text-white' >
        <Container>
            <Navbar.Brand as={NavLink} to="/dashboard">TicketWorkflow</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Item>
                        {
                            !user
                                ? <Nav.Link as={NavLink} to='/login' >Login</Nav.Link>
                                : `hello, ${user.employeeName}`
                        }
                    </Nav.Item>
                    <Nav.Item>

                        {
                            user && <Button variant='link' onClick={() => logout()} >Logout</Button>
                        }
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default GlobalNavbar