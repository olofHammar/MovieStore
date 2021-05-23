import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import batman from '../img/slider_batman.png';
import { Link } from 'react-router-dom';
import hateful_eight from '../img/slider_hateful_eight.png';
import jackson from '../img/slider_jackson.jpg';
import musical from '../img/slider_musical.png';
import stand_up from '../img/slider_stand_up.png';

function ImgSlider() {

    let settings  = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
    return (
        <Carousel {...settings }>
            <Wrap>
                <img src={ batman }/>
            </Wrap>
                <Wrap >
                <Link to='collections'>
                    <img src={ jackson }/>
                </Link>
                </Wrap>
            <Wrap>
                <img src={ hateful_eight }/>
            </Wrap>
            <Wrap>
                <img src={ musical }/>
            </Wrap>
            <Wrap>
                <img src={ stand_up }/>
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
    margin-top: 20px;
    margin-bottom: 80px;
    padding: 0 30px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171)
        }
    }

    li.slick-active button::before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }

`

const Wrap = styled.div`
    cursor: pointer; 
    padding: 0 10px;

    &:active, &:focus {
        outline: 0;
        border: none;
        -moz-outline-style: none;
      }

    img {
        min-height:190px;
        border: 1.5px solid rgba(249, 249, 249, 0.2);
        border-radius: 4px;
        width: 100%;
        height: 100%;
        transition-duration: 150ms;

        &:hover {
            border: 2px solid rgba(249, 249, 249, 0.8);
        }
    }
`