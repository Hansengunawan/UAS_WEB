import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import '../../style/Login.css' 
import NavigationBar from '../Navbar/NavigationBar'

const Login = () =>  {
    return (
        <div>
        <NavigationBar/>

        <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
        >
        <Row>
            <Col>
            <Card className="p-4 shadow-sm custom-form-control">
                <Card.Body className="p-3">
                <Card.Title
                    className="text-center mb-4 fw-bold"
                >
                    Login
                </Card.Title>
                <Form method='POST' action='http://localhost:9000/auth'>
                    <Form.Group controlId="formUsername" className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control className=" shadow-sm" type="text" name="username" placeholder="Enter username"/>
                    </Form.Group>
                    <Form.Group controlId="formPassword" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="shadow-sm " type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="success" type="submit" className="w-100 my-3 shadow-sm fw-bold" href="/dashboard-admin">
                    Submit
                    </Button>
                </Form>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        </Container>
        </div>
    );
}

export default Login;
