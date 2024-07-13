import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    Form,
    Button,
} from "react-bootstrap";
import "../../style/DetailNews.css"; // Import custom CSS for additional styling
import NavigationBar from '../Navbar/NavigationBar'
import truk from '../../images/truk.jpg'

const NewsLayout = () => {
    return (
        <div className="newsDetail">
        <NavigationBar/>
        <Container fluid className="p-0">
            <img
            src={truk}
            alt="News"
            className="w-100"
            />
        </Container>

        <Container className="mt-4">
            <Row>
            <Col md={8}>
                <Card className="mb-4 shadow-sm">
                <Card.Body>
                    <Card.Title className="fw-bold">
                    JUDUL BERITA
                    </Card.Title>
                    <Card.Text>
                    DEMAK, KOMPAS.com - Sebuah truk dump tertabrak kendaraan lain hingga terguling saat putar arah di Pantura Kecamatan Gajah, Kabupaten Demak, Jawa Tengah (Jateng) pada Jumat (12/7/2024) pukul 5.30 WIB.  
                    Kejadian bermula saat truk dump yang bermuatan pasir berjalan dari arah Semarang menuju Kudus. Sesampainya di Pantura Desa Gajah, Kecamatan Gajah, truk putar arah dan tertabrak truk wingbox dari Kudus menuju Semarang.
                    </Card.Text>
                    <Card.Text>
                    "Di TKP diduga berjalan kurang hati-hati pada saat putar arah, sehingga tertabrak truk wing box," ujar Lingga melalui pesan tertulis yang diterima Kompas.com, Jumat (12/7/2024). Pantauan Kompas.com di lokasi, truk wingbox juga sempat menabrak bagian depan rumah warga yang berada di tepi jalan raya. 
                    Atas kejadian itu, Pantura Demak sempat mengalami kemacetan beberapa saat lantaran truk dump terguling melintang di jalan. Lingga menambahkan, tidak ada korban jiwa dalam kecelakaan dua truk yang dikemudikan BT dan AB. "Laka lantas material, nihil korban," tukas Lingga.

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
