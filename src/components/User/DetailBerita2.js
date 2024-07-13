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
import cianjur from '../../images/cianjur.jpg'

const NewsLayout2 = () => {
    return (
        <div className="newsDetail">
        <NavigationBar/>
        <Container fluid className="p-0">
            <img
            src={cianjur}
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
                    CIANJUR, KOMPAS.com - Seorang pengendara sepeda motor tewas dan dua orang lainnya terluka dalam kecelakaan lalu lintas di jalur Gekbrong, Kabupaten Cianjur, Jawa Barat, Jumat (12/7/2024).
                    </Card.Text>
                    <Card.Text>
                    Tabrakan yang melibatkan truk, mobil, dan sepeda motor itu dipicu truk yang kehilangan kendali saat melaju dari arah Sukabumi menuju Cianjur. Kepala Unit Penegakan Hukum Satlantas Polres Cianjur Inspektur Dua Ika Cakra Mustika menerangkan, truk diduga mengalami masalah dalam sistem pengereman, saat memasuki jalur panjang menurun.
                    </Card.Text>

                    <Card.Text>
                    "Itu baru dugaan sementara, ya (rem blong). Pastinya tentu harus menunggu dulu hasil pemeriksaan dari kendaraannya," kata Cakra kepada Kompas.com di lokasi kejadian. Disebutkan, akibat kecelakaan ini, seorang pengendara motor meninggal di lokasi kejadian, sementara sopir truk dan sopir mobil pikap terluka.
                    </Card.Text>

                    <Card.Text>
                    "Sebelum di TKP ini, truk menabrak mobil Grandmax hingga melukai sopirnya," ujar dia. "Sopir truk kemudian berupaya mencari celah untuk membuang kendaraannya setelah melaju tak terkendali sejauh 800 meter," kata Cakra lagi. Sebelum menabrak pohon hingga terguling, truk dengan nomor polisi D9548XA bermuatan penuh itu menabrak sepeda motor yang tengah melaju dari arah berlawanan. "Pengendara motor meninggal, sementara sopir truk mengalami luka dan sudah dibawa ke puskesmas terdekat," kata dia.
                    Cakra menerangkan, dua mobil derek diterjunkan untuk memindahkan kendaraan yang melintang di badan jalan. Selama proses evakuasi, situasi lalu lintas sempat terjadi kemacetan panjang selama dua jam dari kedua arah.
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

export default NewsLayout2;
