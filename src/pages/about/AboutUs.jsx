import React from 'react';
import './aboutus.css';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
    const navigate = useNavigate()

  return (
    <div className='aboutUs'>
      <div className="home">
                <img src="images/aboutusback.jpg" alt=""/>
                <div className="content">
                    <h2>About us</h2>
                    <span className='backHome' onClick={() => navigate('/')}> Home /</span>
                    <span> About Us</span>
                 </div>
     </div>
     

    <div className="aboutUsInfo">
        <div className="container">
            <div className="inner">
                 <img src="images/aboutus.jpg" />
                <div className="content1">
                    <p className="text1">
                        Marush Sweets Boutique has been opening its doors to its guests since 2017 and still continues to provide sweet moments to its customers.
                        In 2019, the second branch was opened at 65 Teryan Street to be closer to its beloved customers.
                        The preconditions of our work և the best quality և the ideal combination and preservation of taste, it is not accidental that our customers, for years, trust us in the most important events and celebrations of their lives.

                    </p>
                       <p className="text2">
                          At Marush Sweets Boutique you can not only choose always fresh and different products, but also enjoy a cup of tea or coffee on the spot.
                      </p>
                      
                      <span>  You can order from us: </span>
                        <hr/>
                        <span>* Pie cookies</span><hr/>
                        <span>* complete cakes</span><hr/>
                        <span>* wedding</span><hr/>
                        <span>* birthday</span><hr/> 
                        <span>* for children</span><hr/>
                        <span>* interesting և with unique design</span><hr/> 
                        <span>* corporate</span><hr/> 
                        
                        <div className="cofe_shop">
                            <div className="box1">
                                <span className="title">Shop 1</span> <hr/>
                                <span className="address">Erevan, Teryan 65</span> <hr/>
                                <span className="phone">(011)42 88 40, (055)42 88 48</span> <hr/>
                            </div>
                            <div className="box2">
                                <span>Shop 2</span> <hr/>
                                <span>Erevan, Baghramyan 58</span> <hr/>
                                <span>(010)27 64 30, (055)42 88 48</span> <hr/>
                            </div>
                        </div>
                   
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutUs