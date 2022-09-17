import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './index.scss'
import jacaranda from './jacaranda.png';
import tiktak from './tiktak.png';
import artsy from './artsy.png'


function CarouselFade() {
  return (
    <div className="carousel">
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={jacaranda}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Jacaranda Tree Marketplace</h3>
          <p>Rails application where users can buy and sell used goods</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tiktak}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Tik Tak Toe </h3>
          <p>Tik Tak Toe browser game pink panther themed.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={artsy}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Artsy.io</h3>
          <p>
            Fun application where users can draw together in real time in individual lobbies.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselFade;