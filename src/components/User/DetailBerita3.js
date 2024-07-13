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
import spd_mtr from '../../images/spd_mtr.jpg'

const NewsLayout3 = () => {
    return (
        <div className="newsDetail">
        <NavigationBar/>
        <Container fluid className="p-0">
            <img
            src={spd_mtr}
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
                    BOGOR, KOMPAS.com - Kecelakaan lalu lintas melibatkan dua sepeda motor terjadi Jalan Raya Tajur, Kecamatan Bogor Timur, Kota Bogor, Rabu (10/7/2024). Satu orang dinyatakan tewas di lokasi kejadian.
                    </Card.Text>
                    <Card.Text>
                    “Terjadi kecelakaan pada Rabu tanggal 10 Juli 2024 sekitar pukul 22.30 WIB. Pengendara kendaraan sepeda motor Kawasaki KLX dengan nomor polisi F 5427 FHG berinisial MH (26) meninggal dunia,” ujar Kasat Lantas Polresta Bogor Kota Kompol Ardi Wibowo saat dikonfirmasi, Kamis (11/7/2024).
                    </Card.Text>

                    <Card.Text>
                    Ardi mengatakan, kecelakaan itu melibatkan tiga pengendara, yakni MH (26) dan temannya, FNC (22), yang mengendarai Kawasaki KLX 150S berpelat nomor F 5427 FHG. Lalu HDW (34) yang mengendarai motor merek dan tipe yang sama berpelat nomor F 2683 CM. Kejadian bermula ketika motor yang dikendarai MH dan FNC melaju dari arah Sukasari menuju Ciawi. Pada saat bersamaan, motor yang dikendarai HDW melaju dari arah sebaliknya, yakni dari Ciawi menuju Sukasari, dan hendak menyalip dari sisi kanan.
                    </Card.Text>

                    <Card.Text>
                    HDW yang diduga tidak berhati-hati masuk ke jalur yang berlawanan sehingga menabrak motor milik MH. “Saat melintas di Jalan Raya Tajur diduga pengendara HDW saat mengendarai kendaraanya tidak hati-hati dan antisipasi saat hendak menyalip melambung ke arah kanan. Kemudian masuk jalur berlawanan sehingga menabrak MH yang menyebabkan dua kendaraan terjatuh,” ujar Ardi.
                    Atas kejadian ini, MH meninggal dunia di lokasi kejadian, sedangkan FNC dan HDW mengalami luka-luka. Setelah polisi melakukan olah tempat kejadian perkara, korban dievakuasi ke rumah sakit terdekat. “FNC mengalami luka-luka dan mendapatkan perawatan di RSUD Ciawi, untuk HDW mengalami luka-luka dan mendapat perawatan di RS Juliana,” terang Ardi.
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

export default NewsLayout3;
