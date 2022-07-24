import {useState, useEffect, useRef} from 'react'
import { Link, useNavigate, } from 'react-router-dom';
import Cart from '../cart/Cart';
import axios from 'axios'
import './CheckOut.css'
import Completed from '../completed/Completed';

const CheckOut = ({cartItems}) => {
  const initialValues = {firstName: '', 
                        lastName: '',
                        streetAddress: '', 
                        email: '', 
                        phone: '',
                        order: ''
                       }          

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  let values;
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }
  let arr = [];
  cartItems.map(item => arr.push(item))

  
  
  
 


  const validate = (values) => {
    const errors = {}
    
    if (!values.firstName) {
      errors.firstName = 'First Name is required'
    }
    if (!values.lastName) {
      errors.lastName = 'Last Name is required'
    }
    if (!values.email) {
      errors.email = 'Email is required'
    }
    if (!values.phone) {
      errors.phone = 'Phone is required'
    }
    if (!values.streetAddress) {
      errors.streetAddress = 'Street Address is required'
    }
    return errors
  }

  
  
  const handleSubmit = async(e) => {
    e.preventDefault()
    setFormValues({...formValues, order: arr})
    setFormErrors(validate(formValues))
    setIsSubmit(true)
     values = Object.values(formValues)

    if (values.every((item) => item != '')) {
      await axios.post('http://localhost:3000/orders', formValues)
      navigate('/completed');
      cartItems.length = 0;
    }

    
    
   
  
  }
    
    const subTotalPrice = cartItems.reduce((price, item) =>price + item.quantity * parseInt(item.price), 0)
    
  return (
    <div className='CheckOut'>

    <section className="home2">
        <img src="images/aboutusback.jpg" alt=""/>
        <div className="content">
            <p>Shoping Cart - <span>Check Out</span> - Order Complete</p>
      </div>
   </section>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2>BILLING and SHIPPING</h2>
          <div className='field'>
            <label>First name</label>
            <input type="text" name='firstName' placeholder='First Name' 
            value={formValues.firstName} onChange = {handleChange}/>
          </div>
          <p>{formErrors.firstName}</p>
          <div className='field'>
            <label>Last name</label>
            <input type="text" name='lastName' placeholder='Last Name' 
            value={formValues.lastName} onChange = {handleChange}/>
          </div>
          <p>{formErrors.lastName}</p>
          <div className='field'>
            <label>Street address</label>
            <input type="text" name='streetAddress' placeholder='Street Address' 
            value={formValues.streetAddress} onChange = {handleChange}/>
          </div>
          <p>{formErrors.streetAddress}</p>
          <div className='field'>
            <label>Email</label>
            <input type="email" name='email' placeholder='Email'
            value={formValues.email} onChange = {handleChange}/>
          </div>
          <p>{formErrors.email}</p>
          <div className='field'>
            <label>Phone</label>
            <input type="text" name='phone' placeholder='Phone' 
            value={formValues.phone} onChange = {handleChange}/>
          </div>
          <p>{formErrors.phone}</p>
          <button className='submit-btn' onClick={handleSubmit}>Submit</button>
        </form>

         
            <div className="order-details">
            <h2>Order Details</h2>
            <h3>Product <span>Cost</span></h3>
            {cartItems.map(item => 
                <div className='cart-item' key={item.id}>
                  <div className='cart-item-name'>{item.name}</div>
                  <div className='cart-item-price'>
                    {item.quantity} * {parseInt(item.price)}
                  </div>
                </div>
              )}
            <span className ="line"></span>
            <h3>Shiping <span>1000AMD</span></h3>
            <span className="line"></span>
            <h3>Total <span>{subTotalPrice + 1000}</span></h3> 
            
        <span className="line2"></span>
        <button className='btn'onClick={() => navigate('/cart/')}>Back Cart</button>
        <p>Use of your personal data for shipping and ordering <a href='http://localhost:3002/returnPolicy'>privacy policy.</a></p>
      </div>
      </div>
    </div>
  )
}

export default CheckOut