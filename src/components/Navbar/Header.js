import { Container, Navbar, Nav } from "react-bootstrap";
import '../../style/Header.css'
import React, { useState, useEffect } from 'react';


const Header = () => {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
        setCurrentTime(new Date());
        }, 1000); // update every 1 second
        return () => {
        clearInterval(timer);
        };
    }, []);

    return ( 
        <header className="App-header">
        <Navbar >
            <Container>
            <Nav className="gap-1 mx-5" >
                    <Nav.Link href="https://instagram.com" className="text-light"><i class="bi bi-instagram"/></Nav.Link>
                    <Nav.Link href="https://facebook.com" className="text-light fw-bold" ><i class="bi bi-facebook"></i></Nav.Link>
                    <Nav.Link href="https://twitter.com" className="text-light fw-bold" ><i class="bi bi-twitter"></i></Nav.Link>
                    <Nav.Link href="https://youtube.com" className="text-light fw-bold" ><i class="bi bi-youtube"></i></Nav.Link>
            </Nav>
                <Nav className="gap-5" >
                    <Nav.Link href="/" className="text-light fw-bold"><i class="bi bi-telephone"></i><span className="mx-3">1-500-699</span></Nav.Link>
                    <Nav.Link href="/" className="text-light fw-bold" ><i class="bi bi-calendar-event"></i><span className="mx-3">{currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </header>
    );
};

export default Header;