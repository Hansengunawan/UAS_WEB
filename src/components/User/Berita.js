import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../../style/card_news.css'
// import { Outlet } from "react-router-dom";
import truk from '../../images/truk.jpg'
import cianjur from '../../images/cianjur.jpg'
import spd_mtr from '../../images/spd_mtr.jpg'

const News = () =>  {
    return (
        <div className="newsCard">
            <h3 className="d-flex justify-content-center fw-bold">Berita Terkini</h3>
            <h1 className="d-flex justify-content-center" >_</h1>

            <CardGroup className="mx-5 my-5 px-5 gap-2">
                <Card className="shadow-sm border-1">
                    <Card.Img variant="top" src={truk} />
                    <Card.Body className="kartu_berita">
                    <Card.Title className="text-white">Truk Pasir Ditabrak Truk Boks hingga Terguling di Pantura Demak</Card.Title>
                    <Card.Text className="text-white">
                        Sebuah truk dump tertabrak kendaraan lain hingga terguling saat putar arah di Pantura Kecamatan Gajah, Kabupaten Demak, Jawa Tengah (Jateng) pada Jumat (12/7/2024) pukul 5.30 WIB. 
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg-light">
                            <small><a href="/detail-berita" className="text-decoration-none fw-bold text-dark">Baca Selengkapnya -></a></small>
                    </Card.Footer>
                </Card>
                <Card className="shadow-sm border-1">
                    <Card.Img variant="top" src={cianjur} />
                    <Card.Body className="kartu_berita">
                    <Card.Title className="text-white">Rem Blong, Truk Tabrak Mobil dan Motor di Cianjur, 1 Tewas</Card.Title>
                    <Card.Text className="text-white">
                        Tabrakan yang melibatkan truk, mobil, dan sepeda motor itu dipicu truk yang kehilangan kendali saat melaju dari arah Sukabumi menuju Cianjur.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg-light">
                    <small><a href="/detail-berita2" className="text-decoration-none fw-bold text-dark">Baca Selengkapnya -></a></small>
                    </Card.Footer>
                </Card>
                <Card className="shadow-sm border-1">
                    <Card.Img variant="top" src={spd_mtr} />
                    <Card.Body className="kartu_berita">
                    <Card.Title className="text-white">Kronologi Kecelakaan 2 Sepeda Motor di Tajur Bogor yang Akibatkan 1 Orang Tewas di Lokasi</Card.Title>
                    <Card.Text className="text-white">
                    Pengendara kendaraan sepeda motor Kawasaki KLX dengan nomor polisi F 5427 FHG berinisial MH (26) meninggal dunia,” ujar Kasat Lantas Polresta Bogor Kota Kompol Ardi Wibowo saat dikonfirmasi, Kamis (11/7/2024).
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg-light">
                    <small><a href="/detail-berita3" className="text-decoration-none fw-bold text-dark">Baca Selengkapnya -></a></small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
}

export default News;