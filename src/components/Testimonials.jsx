import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Testimonials = () => {
    return (
        <div id="testimonials" className="bg-light py-5">
            <Container>
                <h2 className="text-center">Testimonios</h2>
                <Row className="mt-4">
                    {/* Tarjetas de Testimonios */}
                    <Col md={4}>
                        <Card className='mt-2'>
                            <Card.Body>
                                <Card.Text>
                                    "Te valoro mucho por hacer lo que haces amigo..."
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='mt-2'>
                            <Card.Body>
                                <Card.Text>
                                    "Un seco !!! 💙🌊 Larga vida para @valposup"
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='mt-2'>
                            <Card.Body>
                                <Card.Text>
                                    "¡Felicidades César! Un hermoso espacio..."
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-4">
                    {/* Más Tarjetas de Testimonios */}
                    <Col md={4}>
                        <Card className='mt-2'>
                            <Card.Body>
                                <Card.Text>
                                    "Grande Cesar !!! 👏 la mejor escuela 🙌🔥"
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='mt-2'>
                            <Card.Body>
                                <Card.Text>
                                    "Así es. Usted es un Gran Aporte..."
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='mt-2'>
                            <Card.Body>
                                <Card.Text>
                                    "Mi profe César eres y seguirás siendo el mejor..."
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-4">
                    {/* Más Tarjetas de Testimonios */}
                    <Col md={4}>
                        <Card className='mt-2'>
                            <Card.Body>
                                <Card.Text>
                                    "💙 una linda experiencia y conexión con nuestro mar 🌊"
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='mt-2'>
                            <Card.Body>
                                <Card.Text>
                                    "Gracias por los lindos registros y el fiel apoyo🩵gracias hermosa gran red por lo hecho y lo venidero 🌞🐧🌊"
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='mt-2'>
                            <Card.Body>
                                <Card.Text>
                                    " La mejor aula y el mejor entrenador 👏👏 @valposup la mejor escuela"
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Testimonials;
