import React from 'react';
import { useNavigate } from 'react-router-dom';
import './contact.css';

const Contact = () => {
const navigate = useNavigate();

  return (
    <div className='Contact'>
      <section className="home">
        <img src="images/aboutusback.jpg" alt=""/>
        <div className="content">
            <h2>Contact us</h2>
            <span className='backHome' onClick={() => navigate('/')}> Home /</span>
            <span> Contact us</span>
        </div>
     </section>

<div className='secondPart'>
   <section className="contact_us">
        <h2>Contatct With Us</h2>
        <a href="https://www.facebook.com/MarushSweetsBoutique"><i className="fa-brands fa-facebook" id="fb"></i></a>  
        <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram" id="insta"></i></a>
   </section>

   
   <section className="cofe_shop">
    <div className="shop1">
        <span className="title">Shop 1</span> <hr/>
        <span className="address">Erevan, Teryan str. 65</span> <hr/>
        <span className="phone">(011)42 88 40, (055)42 88 48</span> <hr/>
    </div>
    <div className="shop2">
        <span>Shop 2</span> <hr/>
        <span>Erevan, Baghramyan str. 58</span> <hr/>
        <span>(010)27 64 30, (055)42 88 48</span> <hr/>
    </div>
    <div className="shop3">
        <span>Shop 3</span> <hr/>
        <span>Yerevan, Komitas str. 32</span> <hr/>
        <span>(011)42 88 41, (033) 42 88 48</span> <hr/>
    </div>
    <div className="work_hours">
        <span>Working hours</span> <hr/>
        <span>Mon. - Sun. 09:00 - 22:00</span>
    </div>

   
   </section>

   <div className="rightMap">
                  <iframe
                        width="1690"
                        height="450"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.6931910717312!2d44.496233651223505!3d40.19364087929061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd1142960497%3A0x987fe7d02f52e79f!2sMarush%20Sweets%20Boutique!5e0!3m2!1sen!2s!4v1656409270523!5m2!1sen!2s"
                        frameBorder="0"
                        allowFullScreen>
                 </iframe>
           </div>

   </div>
   </div>
  )
}

export default Contact