import React from 'react';
import { Slide } from 'react-slideshow-image';
import './slide.css';

const slideImages = [
  '../../../../images/206655949_n.jpg',
  '../../../../images/118536092_937050746776188_3282732604192071654_o-600x600.jpg',
  '../../../../images/cropped-119843196_953837391764190_7232760736834587932_o.jpg',
];

const properties = {
  duration: 4000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

const Slideshow = () => {
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <div className='item'>
            <span className='shop-caffee'> Salut shop-caffee</span>
            <a href="http://localhost:3002/CafeShop">more</a>
            </div>
          </div>
        </div>

        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <div className='item'>
              <span className='sweet'>Marush sweet</span>
              <a href="http://localhost:3002/products/">Shop</a>
            </div>
          <img src="../../../../images/vdfg-1-1.png" alt="" />
          </div>
        </div>

        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <div className='item'>
          <span className='sweet'>Marush sweet</span>
            <a href="http://localhost:3002/Cake">Get offer</a>
            </div>
            <img src="../../../../images/Layer-1-2-1.png" alt="" />
          </div>
        </div>
      </Slide>
    )
}

export default Slideshow;