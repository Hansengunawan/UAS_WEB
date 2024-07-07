import { Container, Navbar, Nav } from "react-bootstrap";


const NavigationBar = () => {
    return (
    <div className="font">
    <Navbar >
        <Container>
            <Navbar.Brand href="/" className="text-dark p-2">Logo</Navbar.Brand>
            <Nav className="gap-3 " >
                <Nav.Link href="/" className="text-dark fw-bold">Home</Nav.Link>
                <Nav.Link href="/" className="text-dark fw-bold" >Data Insiden</Nav.Link>
                <Nav.Link to="/Login" className="text-dark fw-bold" >Login Admin</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    </div>
    );
};

export default NavigationBar;
