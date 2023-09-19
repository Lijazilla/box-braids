import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imagen1 from '../assets/images/results-client-3.jpeg'
import imagen2 from '../assets/images/results-client-2.jpeg'
import imagen3 from '../assets/images/results-client-4.jpeg'
import imagen4 from '../assets/images/client-6.jpeg'
import './carousel.css'




const Carousel = () => {
    const settings = {
        fade: true, 
        autoplay: true, 
        autoplaySpeed: 3000,
        speed: 600,
    };

    return (
        <Slider {...settings}>
            <div>
                <img src={imagen1} alt="Imagen 1" className='first-image' />
            </div>
            <div>
                <img src={imagen2} alt="Imagen 2" className='second-image'/>
            </div>
            <div>
                <img src={imagen3} alt="Imagen 3" className='third-image'/>
            </div>
            <div>
                <img src={imagen4} alt="Imagen 4" className='fourth-image'/>
            </div>
        </Slider>
    );
};

export default Carousel;
