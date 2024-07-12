import { Container, Navbar, Nav } from "react-bootstrap";
import '../../style/Navbar.css'
import logo from '../../images/logo.png'
import {Link} from 'react-router-dom'


const NavigationBar = () => {
    return (
    <div className="nav_bc">
    <Navbar >
        <Container>
            <Navbar.Brand className="text-dark p-2"><img src={logo} alt="logo" style={{ width: '50px', height: '50px' }}></img></Navbar.Brand>
            <Nav className="gap-3" >
                <Nav.Link>
                    <Link className="text-dark fw-bold text-decoration-none">Home</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link className="text-dark fw-bold text-decoration-none" >Data Insiden</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link exact className="text-dark fw-bold text-decoration-none" to={"/login"}>Login Admin</Link>
                </Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    </div>
    );
};

export default NavigationBar;
