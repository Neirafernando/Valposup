import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Tabla from '../assets/tabla.jpg';
import snork from '../assets/snork.jpg';
import acantilados2 from '../assets/acantilados2.jpg';

const Services = () => {
    return (
        <div id="services" className="py-5">
            <Container>
                <h2 className="text-center">Nuestros Servicios</h2>
                <Row className="mt-4">
                    <Col md={4}>
                        <Card className="shadow-lg mt-3">
                            <Card.Img variant="top" src={Tabla} />
                            <Card.Body>
                                <Card.Title>Padle Supp</Card.Title>
                                <Card.Text>
                                    Entrenar para desarrollar autonomía, para completar rutas, para identificar, entender, aceptar y disfrutar de los cambios...
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='mt-3'>
                            <Card.Img variant="top" src={snork} />
                            <Card.Body>
                                <Card.Title>Snorkeling  🤿</Card.Title>
                                <Card.Text>
                                    Nuestra profe de Snorkeling 🤿 enamorada del océano, en el cual, busca su encuentro constantemente, su lugar, su pasión, su paz...
                                    Una sirena lista para guiarte en las hermosas aguas de Torpederas 💙🤿<br />
                                    Una clase muy completa, en dónde aprenderás principalmente la importancia del respeto y cuidado del océano, a través de un viaje por las aguas, descubriendo e identificando un mundo totalmente distinto💙
                                    .
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='mt-3'>
                            <Card.Img variant="top" src={acantilados2} />
                            <Card.Body>
                                <Card.Title>Travesias Acantilados Federico Santa María</Card.Title>
                                <Card.Text>
                                    Si quieres llegar a este lugar debes tener experiencia remando, conocimiento básico de seguridad acuática y condiciones de mar ✍🏼💙

                                    El programa SUP Oceánico los prepara durante 4 sesiones para lograr el objetivo de la travesía hacia este hermoso santuario ⛰️💚
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Services;
