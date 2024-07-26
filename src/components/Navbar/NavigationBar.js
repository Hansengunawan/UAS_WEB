import { Container, Navbar, Nav } from "react-bootstrap";
import '../../style/Navbar.css';
import logo from '../../images/logo.png';
import {Link} from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';



const NavigationBar = () => {
    return (
    <div className="nav_bc">
    {["lg"].map((expand) => 
    (
    <Navbar key={expand} expand={expand} >
        <Container> 
            <Navbar.Brand className="text-dark p-2 brand"><img src={logo} alt="logo" style={{ width: '50px', height: '50px' }}></img></Navbar.Brand>
            <Navbar.Brand className="text-dark brand"><p className="m-auto fw-bold">City Rescue</p></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}placement="end"
            >
            <Offcanvas.Header closeButton className="head_navbar_responsive">
                <Offcanvas.Title className="text-white"id={`offcanvasNavbarLabel-expand-${expand}`}>
                    City Rescue
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Nav className="gap-3 ms-auto" >
                <Nav.Link>
                    <Link className="text-dark fw-bold text-decoration-none" to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link className="text-dark fw-bold text-decoration-none" to="/data-insiden">Data Insiden</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link exact className="text-dark fw-bold text-decoration-none" to="/login-admin">Login</Link>
                </Nav.Link>
            </Nav>
            </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
    </Navbar>
    ))}
    </div>
    );
};

export default NavigationBar;
