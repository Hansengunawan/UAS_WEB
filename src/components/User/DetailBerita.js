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
import Navbar from '../Navbar/NavigationBar'
import Group1 from '../../images/Group1.png'

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
                    DEMAK, KOMPAS.com - Sebuah truk dump tertabrak kendaraan lain hingga terguling saat putar arah di Pantura Kecamatan Gajah, Kabupaten Demak, Jawa Tengah (Jateng) pada Jumat (12/7/2024) pukul 5.30 WIB.  Kasatlantas Polres Demak, AKP Lingga Ramadhani menerangkan, insiden tersebut melibatkan truk dump bernomor Polisi H 1932 KE yang dikemudikan BT (64) dan truk wing box No Pol B 9819 TEZ yang dikemudikan AB (46). Baca juga: Truk Tabrak Truk di Bawen Tewaskan 1 Orang, Warga: Dari Atas Kencang, lalu Bres Kejadian bermula saat truk dump yang bermuatan pasir berjalan dari arah Semarang menuju Kudus. Sesampainya di Pantura Desa Gajah, Kecamatan Gajah, truk putar arah dan tertabrak truk wingbox dari Kudus menuju Semarang. "Di TKP diduga berjalan kurang hati-hati pada saat putar arah, sehingga tertabrak truk wing box," ujar Lingga melalui pesan tertulis yang diterima Kompas.com, Jumat (12/7/2024). Pantauan Kompas.com di lokasi, truk wingbox juga sempat menabrak bagian depan rumah warga yang berada di tepi jalan raya. Dilempari Batu dan Molotov, ”Tugboat” Batubara Terbakar di Sungai Batanghari Artikel Kompas.id Atas kejadian itu, Pantura Demak sempat mengalami kemacetan beberapa saat lantaran truk dump terguling melintang di jalan. Lingga menambahkan, tidak ada korban jiwa dalam kecelakaan dua truk yang dikemudikan BT dan AB. "Laka lantas material, nihil korban," tukas Lingga.

Artikel ini telah tayang di Kompas.com dengan judul "Putar Arah Sembarangan, Truk Pasir Ditabrak Truk Boks hingga Terguling di Pantura Demak", Klik untuk baca: https://regional.kompas.com/read/2024/07/12/142518578/putar-arah-sembarangan-truk-pasir-ditabrak-truk-boks-hingga-terguling-di.


Kompascom+ baca berita tanpa iklan: https://kmp.im/plus6
Download aplikasi: https://kmp.im/app6
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
