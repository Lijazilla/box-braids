import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imagen1 from './assets/images/results-client-3-removebg-preview.png'
import imagen2 from './assets/images/results-client-removebg-preview.png'
import imagen3 from './assets/images/results-client-4-removebg-preview.png'
import imagen4 from './assets/images/client-6-removebg-preview.png'



const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 3000, 
        slidesToShow: 1, // Mostrar 4 imágenes a la vez
        slidesToScroll: 1, // Avanzar 4 imágenes a la vez
        autoplay: true,
        autoplaySpeed: 2000, 
    };

    return (
        <Slider {...settings}>
            <div>
                <img src={imagen1} alt="Imagen 1" />
            </div>
            <div>
                <img src={imagen2} alt="Imagen 2" />
            </div>
            <div>
                <img src={imagen3} alt="Imagen 3" />
            </div>
            <div>
                <img src={imagen4} alt="Imagen 4" />
            </div>
        </Slider>
    );
};

export default Carousel;
