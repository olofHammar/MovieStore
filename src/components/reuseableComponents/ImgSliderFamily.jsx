import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import disney from '../../img/disney.png';
import frozen from '../../img/frozen.png';
import toystory from '../../img/toystory.png';
import dreamworks from '../../img/dreamworks.png';
import turbo from '../../img/turbo.png';
import trolls from '../../img/trolls.png';
import pixar from '../../img/pixar.png';
import walle from '../../img/walle.png';
import up from '../../img/up.png';
import { useDispatch } from 'react-redux';
import BottomBar from '../navComponents/BottomBar';

function ImgSliderFamily() {

    const dispatch = useDispatch();

    let settings  = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

    return (
        <CarouselContainer>
        <Carousel {...settings }>
            <Wrap>
    
                    <img src={ disney }/>

            </Wrap>

               <Wrap >
    
                    <img src={ frozen }/>

            </Wrap>
                   <Wrap >
    
                    <img src={ toystory }/>

            </Wrap>

            <Wrap >
    
                    <img src={ dreamworks }/>

            </Wrap>

            <Wrap>
      
                    <img src={ turbo }/>
      
            </Wrap>
              <Wrap>
      
                    <img src={ trolls }/>
      
            </Wrap>

            <Wrap>
            
                    <img src={ pixar }/>
      
            </Wrap>
              <Wrap>
            
                    <img src={ walle }/>
      
            </Wrap>
                   <Wrap>
            
                    <img src={ up }/>
      
            </Wrap>




        </Carousel>
        <BottomBar />
        </CarouselContainer>
    )
}

export default ImgSliderFamily

const CarouselContainer = styled.div`
    background-color: #15171c;
    margin-bottom: 20px;

`

const Carousel = styled(Slider)`
    background: #15171c;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0 30px;

    &:after {
        background: #15171c;
    }

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
    background-color: #15171c;

    &:active, &:focus {
        outline: 0;
        border: none;
        -moz-outline-style: none;
      }

    img {
        min-height:190px;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        transition-duration: 150ms;
    }
`