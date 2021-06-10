import React from "react"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom"
import jackson from "../../img/slider_jackson.jpg"
import musical from "../../img/slider_musical.png"
import stand_up from "../../img/slider_stand_up.png"
import tarantino from "../../img/slider_tarantino.png"
import BottomBar from "../navComponents/BottomBar"

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <CarouselContainer>
      <Carousel {...settings}>
        <Wrap>
          <Link to="collections/jackson">
            <img src={jackson} alt="Jackson" />
          </Link>
        </Wrap>

        <Wrap>
          <Link to="collections/musicals">
            <img src={musical} alt="Musicals" />
          </Link>
        </Wrap>

        <Wrap>
          <Link to="collections/tarantino">
            <img src={tarantino} alt="Tarantino" />
          </Link>
        </Wrap>

        <Wrap>
          <Link to="collections/stand_up">
            <img src={stand_up} alt="StandUp" />
          </Link>
        </Wrap>
      </Carousel>
      <BottomBar />
    </CarouselContainer>
  )
}

export default ImgSlider

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
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  @media (max-width: 768px) {
    margin-top: 25px;
    margin-bottom: 5px;
    padding: 12px;

    li.slick-active button::before {
      display: none;
    }

    ul li button {
      display: none;
    }
  }
`

const Wrap = styled.div`
  cursor: pointer;
  padding: 0 10px;
  background-color: #15171c;

  &:active,
  &:focus {
    outline: 0;
    border: none;
    -moz-outline-style: none;
  }

  img {
    min-height: 190px;
    max-height: 379px;
    border: 1.5px solid rgba(249, 249, 249, 0.2);
    border-radius: 4px;
    width: 100%;
    height: 100%;
    transition-duration: 150ms;

    &:hover {
      border: 2px solid rgba(249, 249, 249, 0.8);
    }
  }

  @media (max-width: 768px) {
    padding: 5px;

    img {
      min-height: 125px;
      max-height: 150px;
      width: 100%;
    }
  }
`
