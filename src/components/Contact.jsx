import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Modal } from 'react-bootstrap';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import MapCard from './Mapcard';

const Contact = () => {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);

    return (
        <div id="contact" className="text-white py-5" style={{ backgroundColor: '#004080' }}>
            <Container>
                <h2 className="text-center">Contáctanos</h2>
                <Row className="mt-4">
                    <Col md={6}>
                        <Card className='mt-4'>
                            <Card.Body>
                                <h4 className="text-center">Formulario de Contacto</h4>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="formName">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control type="text" placeholder="Ingresa tu nombre" />
                                    </Form.Group>
                                    <Form.Group controlId="formEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Ingresa tu email" />
                                    </Form.Group>
                                    <Form.Group controlId="formMessage">
                                        <Form.Label>Mensaje</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="Escribe tu mensaje" />
                                    </Form.Group>
                                    <Button className='mt-3 bg-secondary' variant="dark " type="submit">Enviar</Button>

                                    {/* Íconos de Redes Sociales */}
                                    <div className="mt-4 text-center">
                                        <Button variant="link" href="https://facebook.com" target="_blank" className="text-black mx-2">
                                            <FaFacebook size={30} />
                                        </Button>
                                        <Button variant="link" href="" target="_blank" className="text-black mx-2">
                                            <FaWhatsapp size={30} style={{ color: 'black' }} className="mx-2" />
                                        </Button>
                                        <Button variant="link" href="https://www.instagram.com/valposup/" target="_blank" className="text-black mx-2">
                                            <FaInstagram size={30} />
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <MapCard />
                    </Col>
                </Row>
            </Container>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Mensaje Enviado</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    ¡Tu mensaje ha sido enviado correctamente! Nos pondremos en contacto contigo pronto.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Contact;
