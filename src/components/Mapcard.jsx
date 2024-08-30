import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Maps from './Maps'
const MapCard = () => {
    return (
        <Container className="my-4">
            <Card>
                <Card.Body>
                    <Card.Title>Nuestra Ubicación</Card.Title>
                    <Card.Text>
                        Altamirano 221003, Valparaíso, Chile
                    </Card.Text>
                    <div style={{ height: '400px', width: '100%' }}>
                        <Maps />
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default MapCard;
