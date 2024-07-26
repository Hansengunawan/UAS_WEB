import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../style/FormUser.css";
import React, { useState } from "react";
import Swal from 'sweetalert2'

function FormUser() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        address: "",
        description: "",
    });
    const [validated, setValidated] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            Swal.fire({
                title: 'Do you want to save the changes?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Yes',
                denyButtonText: 'No',
                customClass: {
                actions: 'my-actions',
                cancelButton: 'order-1 right-gap',
                confirmButton: 'order-2',
                denyButton: 'order-3',
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('Saved!', '', 'success')
                } else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info')
                }
            })
            // Handle form submission logic here
        console.log("Form data:", formData);
        }
        setValidated(true);
    };

    return (
        <div className="my-4">
        <h4 className="d-flex fw-bold justify-content-center">
            Form Lapor Insiden
        </h4>
        <h3 className="d-flex fw-bold justify-content-center">_</h3>
        <Form
            className="m-5 px-5"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
        >
            <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Nama</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="Masukkan nama anda"
                name="name"
                className="shadow-sm py-2"
                value={formData.name}
                onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
                Nama harus diisi.
            </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
                required
                type="email"
                name="email"
                placeholder="Masukkan email anda"
                className="shadow-sm py-2"
                value={formData.email}
                onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
                Email harus diisi.
            </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContact">
            <Form.Label>No Telp</Form.Label>
            <Form.Control
                required
                type="text"
                name="contact"
                placeholder="Masukkan no telpon anda"
                className="shadow-sm py-2"
                value={formData.contact}
                onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
                Email harus diisi.
            </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAddress">
            <Form.Label>Alamat Insiden</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="Masukkan Alamat Insiden"
                className="shadow-sm py-2"
                name="address"
                value={formData.address}
                onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
                Alamat insiden harus diisi.
            </Form.Control.Feedback>
            </Form.Group>

            
            <Form.Group className="mb-3" controlId="formType">
            <Form.Label>Jenis Insiden</Form.Label>
            <Form.Select
                className="shadow-sm py-2"
                onChange={handleChange}
            >
                <option value="Kecelakaan Lalu Lintas">Kecelakaan Lalu Lintas</option>
                <option value="Kebakaran">Kebakaran</option>
                <option value="Kecelakaan Umum">Kecelakaan Umum</option>
                <option value="Bencana Alam">Bencana Alam</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
                Jenis Insiden harus diisi.
            </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formStatus">
            <Form.Label>Status Insiden</Form.Label>
            <Form.Select
                className="shadow-sm py-2"
                onChange={handleChange}
            >
                <option value="Open">Open</option>
                <option value="Waiting Handle">Waiting Handle</option>
                <option value="On Progress Handle">On Progress Handle</option>
                <option value="Solve Handle">Solve Handle</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
                Jenis Insiden harus diisi.
            </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Deskripsi Insiden</Form.Label>
            <Form.Control
                required
                as="textarea"
                rows={4}
                name="description"
                placeholder="Masukkan Deskripsi Insiden"
                className="no-resize shadow-sm"
                value={formData.description}
                onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
                Deskripsi insiden harus diisi.
            </Form.Control.Feedback>
            </Form.Group>

            <Button
            variant="success"
            type="submit"
            className="px-lg-4 rounded-3 fw-bold my-3"
            >
            Submit
            </Button>
        </Form>
        </div>
    );
}



export default FormUser;
