import React from 'react';
import { Carousel, Card } from 'react-bootstrap';

const CardCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="image1.jpg" alt="Card image 1" />
                    <Card.Body>
                        <Card.Title>Card 1</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="image2.jpg" alt="Card image 2" />
                    <Card.Body>
                        <Card.Title>Card 2</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="image3.jpg" alt="Card image 3" />
                    <Card.Body>
                        <Card.Title>Card 3</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Carousel.Item>
        </Carousel>
    );
};

export default CardCarousel;
