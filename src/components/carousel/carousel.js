    import React from 'react';
    import Slider from 'react-slick';
    import 'slick-carousel/slick/slick.css';
    import 'slick-carousel/slick/slick-theme.css';
    import './carousel.css'

const Carousel = () => {
    const settings = {
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 600,
    };
    
    return (
        <Slider {...settings} >
            <div className='carousel-div'>
                <img src='https://i.imgur.com/ROQIL1j.jpg' alt="Imagen 1"/>
            </div>
            <div className='carousel-div'>
                <img src='https://i.imgur.com/CJuZHvS.jpg' alt="Imagen 2"/>
            </div>
            <div className='carousel-div'>
                <img src='https://i.imgur.com/e5DzdsI.jpg' alt="Imagen 3"/>
            </div>
        </Slider>
    );
    };

    export default Carousel;

    