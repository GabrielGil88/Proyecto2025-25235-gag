import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import img1 from '../assets/images/imagen1.webp';
import img2 from '../assets/images/imagen2.webp';
import img3 from '../assets/images/imagen3.webp';

const OfertasCarrusel = () => {
    return (
        <Carousel className="carrusel carousel-dark">
            <Carousel.Item>
                <img
                    src={img1}
                    alt="Primera imagen de ofertas"
                />
                <Carousel.Caption>
                    <Button className="btn-secundario fw-bold mb-5 px-5">Ver más</Button>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    src={img2}
                    alt="Segunda imagen de ofertas"
                />
                <Carousel.Caption>
                    <Button className="btn-secundario fw-bold mb-5 px-5">Ver más</Button>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    src={img3}
                    alt="Tercera imagen de ofertas"
                />
                <Carousel.Caption>
                    <Button className="btn-secundario fw-bold mb-5 px-5">Ver más</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default OfertasCarrusel;
