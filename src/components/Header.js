import { Container, Navbar, Nav } from "react-bootstrap";
import '../style/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return ( 
        <header className="App-header">
        <Navbar >
            <Container>
            <Nav className="gap-1 " >
                    <Nav.Link href="/" className="text-light"><FontAwesomeIcon icon="fa-brands fa-instagram"/></Nav.Link>
                    <Nav.Link href="/" className="text-light fw-bold" >FB</Nav.Link>
                    <Nav.Link href="/" className="text-light fw-bold" >TWITTER</Nav.Link>
                    <Nav.Link href="/" className="text-light fw-bold" >YT</Nav.Link>
                    
            </Nav>
                <Nav className="gap-5" >
                    <Nav.Link href="/" className="text-light fw-bold">1-500-699</Nav.Link>
                    <Nav.Link href="/" className="text-light fw-bold" >Senin, 1 Juli 2024
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </header>
    );
};

export default Header;