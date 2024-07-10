import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../style/FormUser.css';

function FormUser() {
    return (
        <div className="my-4">
            <h3 className="d-flex fw-bold justify-content-center">Form Lapor Insiden</h3>
            <h3 className="d-flex fw-bold justify-content-center">_</h3>
            <Form className="m-5 px-5">
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control type="name" placeholder="Masukkan nama anda" className="shadow-sm"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Masukkan email anda" className="shadow-sm"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="incidentAddress">
                    <Form.Label>Alamat Insiden</Form.Label>
                    <Form.Control type="text" placeholder="Masukkan Alamat Insiden" className="shadow-sm"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDesc">
                    <Form.Label>Deskripsi Insiden</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Masukkan Deskripsi Insiden" className="no-resize shadow-sm" />
                </Form.Group>

                <Button variant="success" type="submit" className="px-lg-4 rounded-3 fw-bold my-3">
                    Submit
                </Button>

            </Form>
        </div>
    );
}

export default FormUser;