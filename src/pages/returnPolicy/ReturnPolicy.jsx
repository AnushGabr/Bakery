import React from 'react'
import './returnPolicy.css'
import { useNavigate } from 'react-router-dom';


const ReturnPolicy = () => {

  const navigate = useNavigate();

  return (
    <div>
        <section className="return">
        <img src="images/aboutusback.jpg" />
        <div className="content">
            <h2>Return Policy</h2>
            <span className='backhome' onClick={() => navigate('/')}> Home /</span>
            <span>Return Policy</span>
      </div>
   </section>
   
   <section className="container1">
    <p>The products on the site are not subject to return or exchange.</p>
   </section>
    </div>

  )
}

export default ReturnPolicy