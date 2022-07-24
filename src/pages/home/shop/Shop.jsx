import React from 'react';
import './shop.css';

const Shop = () => {
    return (
<section className="shop">
                <h2>Pastry shop</h2>
                <h3>Marush Sweet</h3>
                <div className="inner">
                    <div className="box">
                        <img src="images/img1.jpg" />
                        <div className="content">
                            <span>1.</span>
                            <h2>Natural raw materials</h2>
                        </div>
                    </div>
                    <div className="box">
                        <img src="images/img2.jpg" />
                        <div className="content">
                            <span>2.</span>
                            <h2>High quality specialists</h2>
                        </div>
                    </div>
                    <div className="box">
                        <img src="images/img3.jpg" />
                        <div className="content">
                            <span>3.</span>
                            <h2>Professional delivery</h2>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Shop;