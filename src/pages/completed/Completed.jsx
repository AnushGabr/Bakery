import React from 'react'
import './Completed.css'
import Cart from '../cart/Cart'
import Header from '../../components/header/Header'

const Completed = () => {

    
  return (
    
        <div className='completed'>
    <section className="completed-orders">
        <img src="images/aboutusback.jpg" alt=""/>
        <div className="content">
            <p>Shoping Cart - Check Out - <span>Order Complete</span></p>
      </div>
   </section>
   
   <section className="completed-container">
        <p>The order is complete <hr/>
        Thank you for using our services</p>
   </section>
       
    </div> 
    
  )
}

export default Completed