import React from "react";
import {
    Container,
    Row,
    Col,
    Nav,
    Navbar,
    Table,
    Button,
} from "react-bootstrap";
import "../../style/Dashboard.css"; // Import custom CSS for additional styling

const Dashboard = () => {
    return (
        <div className="dashboard">
        <Navbar bg="light" expand="lg" className="px-4 shadow-sm">
            <Navbar.Brand href="#">Dashboard Admin</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#">Keluar</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Container fluid className="mt-4">
            <Row>
            <Col md={2} className="bg-dark text-white sidebar">
                <div className="py-4 text-center">
                <img
                    src="https://via.placeholder.com/50"
                    alt="Logo"
                    className="mb-3"
                />
                <h5>Dashboard Admin</h5>
                </div>
                <Nav defaultActiveKey="/" className="flex-column">
                <Nav.Link href="#" className="text-white">
                    Website
                </Nav.Link>
                <Nav.Link href="#" className="text-white">
                    User
                </Nav.Link>
                <Nav.Link href="#" className="text-white active">
                    Data Tables
                </Nav.Link>
                </Nav>
            </Col>
            <Col md={10} className="content">
                <h2 className="mt-4">Data Tables</h2>
                <Table striped bordered hover className="mt-4">
                <thead>
                    <tr>
                    <th>No.</th>
                    <th>Nama Pelapor</th>
                    <th>Alamat Insiden</th>
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
        </div>
    );
};

export default Dashboard;
