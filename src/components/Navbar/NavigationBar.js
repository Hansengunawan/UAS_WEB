import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../../style/Navbar.css'
import logo from '../../images/logo.png'
import { Outlet } from "react-router-dom";

const NavigationBar = () => {
    return (
    <div className="nav_bc">
    <Navbar >
        <Container>
            <Navbar.Brand className="text-dark p-2"><img src={logo} alt="logo" style={{ width: '50px', height: '50px' }}></img></Navbar.Brand>
            <Nav className="gap-3" >
                <Nav.Link>
                    <Link className="text-dark fw-bold text-decoration-none" to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link className="text-dark fw-bold text-decoration-none" to={"/data-insiden"}>Data Insiden</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link exact className="text-dark fw-bold text-decoration-none" to="/login-admin">Login Admin</Link>
                </Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    <Outlet/>
    </div>
    );
};

export default NavigationBar;
