import React from 'react';
import './specialOffers.css';


const SpecialOffers = () => {
    return (
        <section className="special">
            <h2>Special Offers</h2>
            <div className="inner">
                <div className="box">
                <a href="http://localhost:3002/product/strawberry-cake"><img src="images/special1.jpg"/></a>
                    <div className="content">
                        <h2>Strawberry Cake</h2>
                        <h6>800 AMD</h6>
                        
                    </div>
                </div>
                <div className="box">
                    <a href="http://localhost:3002/product/red-velvet"><img src="images/tavish.jpg"/></a>
                    <div className="content">
                        <h2>Red Velvet</h2>
                        <h6>900 AMD</h6>
                    </div>
                </div>
                <div className="box">
                    <a href="http://localhost:3002/product/Limon"><img src="images/special3.jpg"/></a>
                    <div className="content">
                        <h2>Lemon Cake</h2>
                        <h6>750 AMD</h6>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SpecialOffers;