import React from 'react'
import './delivery.css'
import { useNavigate } from 'react-router-dom';

const Delivery = () => {

  const navigate = useNavigate();

  return (

    <div>
         <section className="delivery">
        <img src="images/aboutusback.jpg" />
        <div className="content">
            <h2>Delivery</h2>
            {/* <p>Home <span>/</span> Delivery</p> */}
            <span className='backhome' onClick={() => navigate('/')}> Home /</span>
            <span>Delivery</span>
      </div>
   </section>
   
   <section className="container2">
    <p>Delivery in Yerevan is 1000 drams.<br/>
      To learn about the terms of delivery to regions, you can read (011) 42 88 40 or (055) 42 88 48</p>
   </section>
    </div>
  )
}

export default Delivery