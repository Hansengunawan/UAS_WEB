import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormUser() {
    return (
        <Form>
        <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Nama</Form.Label>
            <Form.Control type="name" placeholder="Masukkan nama anda" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Masukkan email anda" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="incidentAddress">
            <Form.Label>Alamat Insiden</Form.Label>
            <Form.Control type="text" placeholder="Masukkan Alamat Insiden" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDesc">
            <Form.Label>Deskripsi Insiden</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Masukkan Deskripsi Insiden" />
        </Form.Group>


        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
    );
}

export default FormUser;