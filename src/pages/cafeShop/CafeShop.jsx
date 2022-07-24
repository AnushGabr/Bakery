import React from 'react';
import './cafeShop.css';
import { useNavigate } from 'react-router-dom';

const Cafe_Shop = () => {
  const navigate = useNavigate()

  return (
    <div className='Cafe_Shop'>
      <section className="home">
        <img src="images/aboutusback.jpg" alt=""/>
        <div className="content">
            <h2>Salu shop-cafe</h2>
            <span className='backHome' onClick={() => navigate('/')}> Home /</span>
            <span>Salu shop-cafe</span>
        </div>
     </section>

     <section className="salu_cafe">
        <div className="container">
            <div className="inner">
                <img src="images/imgcaake2.jpg" alt=""/>
                <div className="content">
                    <p className="text1"> <span> Salyun is the new shop-cafe in Marush, which is located in Cascade, at 6 Tamanyan Street..</span></p>
                      <hr/>

                    <p className="text2">    From a hearty breakfast to a light dinner, Salyun offers a delicious menu with a wide variety of choices.</p>
                      <hr/>
                        
                     <p className="text3">   Here you can enjoy Marush's already favorite pastries in the heart of Yerevan in the most colorful environment.</p>
                      <hr/>
                        
                    <p className="text4">   Favorite coffee, Marush pastries and a view of the Cascade. Here's how your day at Salju can be.</p> 
                      <hr/>
                        
                     <p className="text5">   By the way, you can buy Marush pastries right from Salu և enjoy them at home.</p>
                </div>
            </div>
        </div>
     </section>
    </div>
  )
}

export default Cafe_Shop