import { Button, Form, Alert, Container, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUser } from '../contexts/UserContext'
import { useState } from "react";
import axios from "axios";

export default function Login({ onLogin }) {

    const [user, setUser] = useState({
        emailId: "",
        password: ""
    })
    const [error, setError] = useState('')

    const navigate = useNavigate();
    const { login } = useUser()

    const handleLogin = (e) => {
        e.preventDefault();

        const loginUser = async () => {
            const response = await axios.post('https://freeapi.miniprojectideas.com/api/Tickets/Login', user)
            const data = response.data
            console.log(data)
            if (!data.result) {
                setError(data.message)
                return;
            }
            login(data.data)
            navigate('/dashboard')
        }

        loginUser();
    }

    return (
        <Container>
            <Stack className="col-md-5 my-4 mx-auto" >
                {
                    !!error && <Alert variant='danger'>
                        {error}
                    </Alert>
                }
                <Form onSubmit={handleLogin} noValidate>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="emailId" onChange={(e) => setUser(pre => { return { ...pre, [e.target.name]: e.target.value } })} value={user.emailId} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" onChange={(e) => setUser(pre => { return { ...pre, [e.target.name]: e.target.value } })} value={user.password} type="password" placeholder="Password" />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Stack>

        </Container>
    )
}