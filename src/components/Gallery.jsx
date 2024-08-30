import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import galeria1 from '../assets/galeria1.jpg';
import galeria2 from '../assets/galeria2.jpg';
import galeria3 from '../assets/galeria3.jpg';

const Gallery = () => {
    return (
        <div id="gallery" className="py-5">
            <Container>
                <h2 className="text-center">Galería</h2>
                <Carousel className="mt-4">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={galeria1}
                            alt="Primera imagen"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={galeria2}
                            alt="Segunda imagen"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={galeria3}
                            alt="Tercera imagen"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
};

export default Gallery;
