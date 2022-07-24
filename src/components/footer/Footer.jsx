// import React from 'react'
import {NavLink} from 'react-router-dom'
import './footer.css'

const Footer = () => {
    return (
        <div> 
                <footer className="footer">
        <div className="containerf">
            <h2 className="footer-heading">Marush Sweets Boutique</h2>
            <div className="item">
                <div className="column1">
                    <div className="text">
                    <p><img src="images/Asset-1-4.svg"/> </p>
                    <p> 
                        <strong>Shop 1</strong> 
                        <i className="fa fa-map-marker"> Yerevan, Teryan   65</i>
                        <i className="fa fa-phone">   (+37411) 42 88 40, (+37455) 42 88 48</i>
                    </p>
                    <p> 
                        <strong>Shop 2</strong> 
                        <i className="fa fa-map-marker"> Yerevan, Baghramyan   58</i>
                        <i className="fa fa-phone">  (+37410) 27 64 30, (+37495) 42 88 48</i>
                    </p>
                    <p> 
                        <strong>Shop 3</strong> 
                        <i className="fa fa-map-marker"> Yerevan, Komitas  33</i>
                        <i className="fa fa-phone">  (+37410) 27 64 30</i>
                    </p>
                    
                    </div>
                
                </div>

                <div className="column2">
                    <div className="text">
                        <h5 className="title">PRODUCTS</h5>
                        <ul className="product_list">
                            <li>
                                <span className="widget-product">
                                    <a href="http://localhost:3002/product/brownie" title="Brownie" className="widget-product-img">
                                    <img width="80" height="80" src="images/66A1711.jpg" />
                                    </a>
                                <span className="product-info">
                                    <a href="http://localhost:3002/product/brownie" title="Brownie" className="product-title"> Brownie </a>
                                    <span className="price"> 950 AMD </span>
                                </span>
                                </span>
                            </li>
                            <span className="product-line"></span>
                            <li>
                                <span className="widget-product">
                                    <a href="http://localhost:3002/product/donatella-sorbet" title="Donatella sorbet" className="widget-product-img">
                                    <img width="80" height="80" src="images/66A1739.jpg"/>
                                    </a>
                                <span className="product-info">
                                    <a href="http://localhost:3002/product/donatella-sorbet" title="Donatella sorbet" className="product-title"> Donatella sorbet </a>
                                    <span className="price"> 2,400  AMD </span>
                                </span>
                                </span>
                            </li>
                            <span className="product-line"></span>
                            <li>
                                <span className="widget-product">
                                    <a href="http://localhost:3002/product/nutella-croissant" title="Nutella croissant" className="widget-product-img">
                                    <img width="80" height="80" src="images/66A1742.jpg" />
                                    </a>
                                <span className="product-info">
                                    <a href="http://localhost:3002/product/nutella-croissant" title="Nutella croissant" className="product-title"> Nutella croissant</a>
                                    <span className="price"> 950  AMD </span>
                                </span>
                                </span>
                            </li>
                        </ul>

                    </div>
                </div>

                <div className="column3">
                    <div className="nav-menu">
                        <h5 className="title">CATEGORIES</h5>
                        <div className="menu-categories">
                            <ol className="categories">
                                <li className="menu-item">
                                    <div>Traditional</div>
                                </li>
                                <li className="menu-item">
                                    <div>Pastry</div>
                                </li>
                                <li className="menu-item">
                                    <div>Cakes</div>
                                </li>
                                <li className="menu-item">
                                    <div>Pies</div>
                                </li>
                                <li className="menu-item">
                                    <div>Breads</div>
                                </li>
                                <li className="menu-item">
                                    <div>Croissants</div>
                                </li>
                                <li className="menu-item">
                                    <div>Ice cream</div>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <span className="line"></span>
                        <div className="custom-widget">
                        <ul className="menu">
                            <li>
                                <a href="http://localhost:3002/returnPolicy">Return Policy</a>
                            </li>
                            <li>
                                <a href="http://localhost:3002/delivery">Delivery</a>
                            </li>
                            <li>
                                <a href="http://localhost:3002/Contact">Contacts</a>
                            </li>
                        </ul>
                        </div>
                </div>

            </div>
        </div>
        <span className="line"></span>
    
        <div className="buttom">
            <div className="container-buttom">
                <div className="min-footer">
                    <div className="col-left">
                        <strong>Marush.am</strong>
                        <i className="fa fa-copyright"></i>
                        2021 | Website by 
                        <a href="#">
                            <strong> Targeting</strong>
                        </a>
                    </div>

                    <div className="col-right">
                        <img height="40px" src="images/1.png" />
                    </div>
                </div>
            </div>
        </div>
        
    </footer>

        </div>
    )
}

export default Footer