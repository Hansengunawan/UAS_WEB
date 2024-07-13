import React from "react";
import { Table, Container, Row, Col } from "react-bootstrap";
import NavigationBar from '../Navbar/NavigationBar'

const DataInsiden = () => {
    const data = [
        {
        no: 1,
        namaPelapor: "BUDI",
        alamatInsiden: "JLN. BUDI SANTOSO 20, RT 02/05",
        deskripsiInsiden:
            "Terjadi Kecelakaan Tarbak lari pelajar sekolah dengan ojek",
        waktuInsiden: "15.00 WIB, 26/06/24",
        koordinatLokasi: "-6.253864261503862, 106.60798635535821",
        },
        {
        no: 1,
        namaPelapor: "BUDI",
        alamatInsiden: "JLN. BUDI SANTOSO 20, RT 02/05",
        deskripsiInsiden:
            "Terjadi Kecelakaan Tarbak lari pelajar sekolah dengan ojek",
        waktuInsiden: "15.00 WIB, 26/06/24",
        koordinatLokasi: "-6.253864261503862, 106.60798635535821",
        },
        {
        no: 1,
        namaPelapor: "BUDI",
        alamatInsiden: "JLN. BUDI SANTOSO 20, RT 02/05",
        deskripsiInsiden:
            "Terjadi Kecelakaan Tarbak lari pelajar sekolah dengan ojek",
        waktuInsiden: "15.00 WIB, 26/06/24",
        koordinatLokasi: "-6.253864261503862, 106.60798635535821",
        },
        {
        no: 1,
        namaPelapor: "BUDI",
        alamatInsiden: "JLN. BUDI SANTOSO 20, RT 02/05",
        deskripsiInsiden:
            "Terjadi Kecelakaan Tarbak lari pelajar sekolah dengan ojek",
        waktuInsiden: "15.00 WIB, 26/06/24",
        koordinatLokasi: "-6.253864261503862, 106.60798635535821",
        },
        {
        no: 1,
        namaPelapor: "BUDI",
        alamatInsiden: "JLN. BUDI SANTOSO 20, RT 02/05",
        deskripsiInsiden:
            "Terjadi Kecelakaan Tarbak lari pelajar sekolah dengan ojek",
        waktuInsiden: "15.00 WIB, 26/06/24",
        koordinatLokasi: "-6.253864261503862, 106.60798635535821",
        },
    ];

    return (
        <div>
        <NavigationBar/>

        <Container fluid>
        <Row>
            <Col>
            <h1 className="text-center p-5">Data Insiden</h1>
            <Table striped bordered hover className="mt-3">
                <thead>
                <tr>
                    <th>No.</th>
                    <th>Nama Pelapor</th>
                    <th>Alamat Insiden</th>
                    <th>Deskripsi Insiden</th>
                    <th>Waktu Insiden</th>
                    <th>Koordinat Lokasi</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item.no}>
                    <td>{item.no}</td>
                    <td>{item.namaPelapor}</td>
                    <td>{item.alamatInsiden}</td>
                    <td>{item.deskripsiInsiden}</td>
                    <td>{item.waktuInsiden}</td>
                    <td>{item.koordinatLokasi}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
            </Col>
        </Row>
        <Row className="mt-5">
            <Col className="text-center">
            <p>@cityrescue</p>
            </Col>
        </Row>
        </Container>
        </div>
    );
};

export default DataInsiden;
