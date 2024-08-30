import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo.jpg';

const NauticalNavbar = () => {
    return (
        <Navbar variant="dark" expand="lg" fixed="top" style={{ backgroundColor: '#003366' }}>
            <Container>
                <Navbar.Brand href="#home" style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src={logo}
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                        alt="Valpo Sup logo"
                        style={{ marginRight: '10px' }} // Ajusta el margen si es necesario
                    />
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#FFFFFF' }}>ValpoSup</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home" style={{ color: '#FFFFFF' }}>Inicio</Nav.Link>
                        <Nav.Link href="#services" style={{ color: '#FFFFFF' }}>Servicios</Nav.Link>
                        <Nav.Link href="#testimonials" style={{ color: '#FFFFFF' }}>Testimonios</Nav.Link>
                        <Nav.Link href="#gallery" style={{ color: '#FFFFFF' }}>Galería</Nav.Link>
                        <Nav.Link href="#contact" style={{ color: '#FFFFFF' }}>Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NauticalNavbar;
