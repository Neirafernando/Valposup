import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import heroImage from '../assets/cesar.webp';
import Cardcarrusel from './Cardcarrusel.jsx'
const Hero = () => {
    return (
        <div id="home" className="text-white" style={{ backgroundColor: '#006994', padding: '100px 0' }}>
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={heroImage} alt="Hero" className="img-fluid rounded shadow mt-3" style={{ maxHeight: '300px', objectFit: 'cover' }} />
                    </Col>
                    <Col md={6} className="text-center text-md-left mt-3">
                        <h1>Bienvenidos a  ValpoSup</h1>
                        <p>Mi nombre es César y soy el fundador de la escuela ValpoSUP 💙 Un proyecto que nace por el amor que tengo por los océanos, por el deporte acuático, la vocación por enseñar, y la falta de espacios para la práctica del deporte acuático, sobretodo en Valparaíso.</p>
                        <Button variant="light" size="lg" href="#contact">Inscríbete Ahora</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero;
