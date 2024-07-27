import React from "react";
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {
    Container,
    Row,
    Col,
    Nav,
    Table,
    Button,
} from "react-bootstrap";
import "../../style/Dashboard.css"; // Import custom CSS for additional styling
import Logo from '../../images/logo.png';
import  { Link, redirect } from 'react-router-dom';
import Profile from '../../images/profile.png'
// import {Link, Routes, Route} from 'react-router-dom'
// import LandingPage from '../User/LandingPageUser'

const isAdmin = sessionStorage.getItem('admin') > 0

const Dashboard = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

//    if (!isAdmin) {
//        return <redirect to='/'/>;
//    }
//    else {
    return (
        <div className="dashboard">
        <Container fluid className="mt-4">
            <Row>
            <Col md={2} className="text-white sidebar">
                <div className="py-4 text-center">
                <img
                    src={Logo}
                    alt="Logo"
                    className="mb-3"
                />
                <h5 className="fw-bold">City Rescue</h5>
                </div>
                <Nav defaultActiveKey="/" className="flex-column">
                <Nav.Link>
                    <Link to="/" className="text-white text-decoration-none">
                    Website
                    </Link>
                </Nav.Link>
                <Nav.Link className="text-white" >
                    <Link onClick={handleShow} className="text-white text-decoration-none">
                    User
                    </Link>
                </Nav.Link>
                <Nav.Link href="#" className="text-white">
                    Data Tables
                </Nav.Link>
                <Nav.Link href="#" className="text-white">
                    <Link to="/" className="text-white text-decoration-none">
                    Sign Out
                    </Link>
                </Nav.Link>
                </Nav>
            </Col>
            <Col md={10} className="content">
                <h2 className="mt-4">Data Tables</h2>
                <Table striped bordered className="mt-4">
                <thead>
                    <tr>
                    <th>No.</th>
                    <th>Nama Pelapor</th>
                    <th>Alamat Insiden</th>
                    <th>Jenis Insiden</th>
                    <th>Status Insiden</th>
                    <th>Deskripsi Insiden</th>
                    <th>Aksi</th>

                    </tr>
                </thead>
                <tbody>
                    {[...Array(6)].map((_, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>BUDI</td>
                        <td>JLN. BUDI SANTOSO 20, RT 02/05</td>
                        <td>Kecelakaan</td>
                        <td>On Progress Handle</td>
                        <td>
                        Terjadi Kecelakaan Tabrak lari pelajar sekolah dengan ojek
                        </td>
                        <td>
                        <Button variant="success" className="mr-2">
                            <i className="bi bi-pencil-fill"></i>
                        </Button>
                        <Button variant="danger">
                            <i className="bi bi-trash-fill"></i>
                        </Button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </Table>
            </Col>
            </Row>
        </Container>
        
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton className="profile py-1" style={{border: '1px solid #B0E4DD'}}>
            <img
                        src={Logo}
                        alt="Logo"
                    />
            <Offcanvas.Title className="text-white">Profile</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body style={{ backgroundColor: '#fff', color: 'white', padding: '0px' }}>
            <div style={{ backgroundColor:'#007F6D', padding: '20px', height:'87vh'}}>
                <h4>Username</h4>
                <img src={Profile} alt="Profile" className='rounded-circle my-4'/>
                <div>
                    <h5>Nama :</h5> 
                    <p>BROK</p>
                </div>
                <div> 
                    <h5>Email :</h5> 
                    <p>BROK@MAIL.COM</p>
                    </div>
                <div>
                    <h5>No. Tlp :</h5> 
                    <p>08123456789</p>
                </div>
            </div>

                </Offcanvas.Body>
            </Offcanvas>
            </div>

    );
//    }
};

export default Dashboard;
