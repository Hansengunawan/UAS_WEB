import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    Form,
    Button,
} from "react-bootstrap";
import "../style/DetailNews.css"; // Import custom CSS for additional styling
import Navbar from './NavigationBar'
import Group1 from '../images/Group1.png'

const NewsLayout = () => {
    return (
        <div>
        <Navbar/>


        <Container fluid className="p-0">
            <img
            src={Group1}
            alt="News"
            className="w-100"
            />
        </Container>

        <Container className="mt-4">
            <Row>
            <Col md={8}>
                <Card className="mb-4 shadow-sm">
                <Card.Body>
                    <Card.Title className="font-weight-bold">
                    JUDUL BERITA
                    </Card.Title>
                    <Card.Text>
                    ullamcorper nunc sed aliquam consectetur maecenas. Elementum
                    dictum enim in amet ornare. Nec quisque eleifend mauris
                    viverra. Accumsan feugiat pulvinar aliquet interdum. Lorem
                    ipsum dolor sit amet consectetur.
                    </Card.Text>
                    <Card.Text>
                    City Rescue merupakan Lorem ipsum dolor sit amet consectetur.
                    Viverra pellentesque at placerat ullamcorper nunc sed aliquam
                    consectetur maecenas. Elementum dictum enim in amet ornare.
                    Nec quisque eleifend mauris viverra. Accumsan feugiat pulvinar
                    aliquet interdum. Lorem ipsum dolor sit amet consectetur.
                    Viverra pellentesque at placerat ullamcorper nunc sed aliquam
                    consectetur maecenas. Elementum dictum enim in amet ornare.
                    Nec quisque eleifend mauris viverra. Accumsan feugiat pulvinar
                    aliquet interdum. Lorem ipsum dolor sit amet consectetur.
                    Viverra pellentesque at placerat ullamcorper nunc sed aliquam
                    consectetur maecenas. Elementum dictum enim in amet ornare.
                    Nec quisque eleifend mauris viverra. Accumsan feugiat pulvinar
                    aliquet interdum. Lorem ipsum dolor sit amet consectetur.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="mb-4 shadow-sm">
                <Card.Body>
                    <Card.Title className="font-weight-bold">
                    Pencarian Berita
                    </Card.Title>
                    <Form>
                    <Form.Group controlId="formSearch">
                        <Form.Control type="text" placeholder="Pencarian..." />
                    </Form.Group>
                    <Button variant="success" type="submit" className="w-100 my-3">
                        Search
                    </Button>
                    </Form>
                </Card.Body>
                </Card>
            </Col>
            </Row>
        </Container>
        </div>
    );
};

export default NewsLayout;
