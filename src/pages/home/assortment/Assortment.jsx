import React from 'react';
import './assortment.css';

const Assortment = () => {
    return (
            <section className="assortment">
                <h2>Assortment</h2>
                <div className="inner">
                    <div className="box" >
                        <img src="images/borodinski.jpg" />
                        <h3>Breads</h3>
                    </div>
                    <div className="box">
                        <img src="images/imgcrois.jpg" />
                        <h3>Croissants</h3>
                    </div>
                    <div className="box">
                        <img src="images/Asset-4-1.png" />
                        <h3>Traditional</h3>
                    </div>
                    <div className="box">
                        <img src="images/imgcake2.jpg" />
                        <h3>Pastry</h3>
                    </div>
                </div>
            </section>
    )
}

export default Assortment;