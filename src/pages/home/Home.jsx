import React from 'react';
import Slideshow from './slide/SlidesShow';
import './home.css';
import { Navigate } from 'react-router-dom';
import  Shop from './shop/Shop';
import Assortment from './assortment/Assortment';
import SpecialOffers from './special/SpecialOffers';
import AboutUs from './aboutUs/AboutUs';

const Home = ( {addToBasket, product}) => {   

    return (
        <div>
            <Slideshow />
            <Shop />
            <Assortment />
            <SpecialOffers product = {product} addToBasket = {addToBasket}/>
            <AboutUs />
        </div>
    )
}

export default Home