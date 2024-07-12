import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
// import { Outlet } from "react-router-dom";
import truk from '../../images/truk.jpg'
import cianjur from '../../images/cianjur.jpg'
import spd_mtr from '../../images/spd_mtr.jpg'

const News = () =>  {
    return (
        <div>
            <h3 className="d-flex justify-content-center fw-bold">Berita Terkini</h3>
            <h1 className="d-flex justify-content-center" >_</h1>

            <CardGroup className="mx-5 my-5 px-5 gap-2">
            <Card className="shadow-sm border-2">
                <Card.Img variant="top" src={truk} />
                <Card.Body>
                <Card.Title>Truk Pasir Ditabrak Truk Boks hingga Terguling di Pantura Demak</Card.Title>
                <Card.Text>
                    Sebuah truk dump tertabrak kendaraan lain hingga terguling saat putar arah di Pantura Kecamatan Gajah, Kabupaten Demak, Jawa Tengah (Jateng) pada Jumat (12/7/2024) pukul 5.30 WIB. 
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                        <small >Baca Selengkapnya -></small>
                </Card.Footer>
            </Card>
            <Card className="shadow-sm border-2">
                <Card.Img variant="top" src={cianjur} />
                <Card.Body>
                <Card.Title>Rem Blong, Truk Tabrak Mobil dan Motor di Cianjur, 1 Tewas</Card.Title>
                <Card.Text>
                    Tabrakan yang melibatkan truk, mobil, dan sepeda motor itu dipicu truk yang kehilangan kendali saat melaju dari arah Sukabumi menuju Cianjur.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Baca Selengkapnya -></small>
                </Card.Footer>
            </Card>
            <Card className="shadow-sm border-2">
                <Card.Img variant="top" src={spd_mtr} />
                <Card.Body>
                <Card.Title>Kronologi Kecelakaan 2 Sepeda Motor di Tajur Bogor yang Akibatkan 1 Orang Tewas di Lokasi</Card.Title>
                <Card.Text>
                Pengendara kendaraan sepeda motor Kawasaki KLX dengan nomor polisi F 5427 FHG berinisial MH (26) meninggal dunia,” ujar Kasat Lantas Polresta Bogor Kota Kompol Ardi Wibowo saat dikonfirmasi, Kamis (11/7/2024).
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Baca Selengkapnya -></small>
                </Card.Footer>
            </Card>
            </CardGroup>
        </div>
    );
}

export default News;