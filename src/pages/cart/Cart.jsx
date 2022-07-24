import {useState} from 'react'
import './Cart.css'
import { useNavigate } from 'react-router-dom'

const Cart = ({cartItems, incQuantity, decQuantity, removeOrder}) => {

  const navigate = useNavigate();
  const totalPrice = cartItems.reduce((price, item) =>price + item.quantity * parseInt(item.price), 0)

  

  

  return (
   
    <div className='cart-items'>
      <div className='cart-items-header'>Cart Items <span onClick={() => navigate('/')} >&times;</span></div>

      {cartItems.length === 0 && <div className='cart-items-empty'>No Items in the Cart</div>}

      <div>
        {cartItems.map((item) => 
            <div key={item.id} className = "cart-items-list">
              <img className = 'cart-items-image'src= {item.img} alt = {item.name}/>
              <div className='cart-items-name'>{item.name}</div>
              <div className='cart-items-function'>
                <button className='cart-item-add' onClick={()=>incQuantity(item.id)}>+</button>
                <button className='cart-item-remove' onClick={() => decQuantity(item.id)}>-</button>
                <button className = 'delete-icon'onClick={() => removeOrder(item.id)}>&times;</button>
              </div>

              <div className='cart-items-price'>
                {item.quantity} * {parseInt(item.price)}
              </div>
            </div>
           
        )}
      </div>
      <div className='cart-items-total-price-name'>
        <h2>Total Price:</h2> <div className='cart-items-total-price'>{totalPrice}</div>
      </div>

      <button className='order-btn' onClick={() => navigate('/checkout/')}>Order</button>
    </div>
  )
}

export default Cart