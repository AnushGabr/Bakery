import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AboutUs from './pages/about/AboutUs';
import CafeShop from './pages/cafeShop/CafeShop';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import CheckOut from './pages/checkOut/CheckOut';
import Cake from './pages/cake/Cake';
import { useState, useEffect} from 'react';
import Products from './pages/products/products';
import ProductList from './components/productList/ProductList';
import ItemInfoPage from './pages/itemInfoPage/ItemInfoPage';
import Cart from './pages/cart/Cart';
import { getAllProducts } from './api';
import Completed from './pages/completed/Completed';
import ReturnPolicy from './pages/returnPolicy/ReturnPolicy';
import Delivery from './pages/delivery/Delivery';
import Register from './pages/register/Register';

const App = () => {

  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        getAllProducts()
        .then(resolve => setProducts(resolve))
    }, [])

  


    const addToBasket = (item) => {
      const itemIndex = cartItems.findIndex(el => el.id === item.id)
  
      if (itemIndex < 0) {
        const newItem = {
          ...item,
          quantity: 1
        }
        setCartItems([...cartItems, newItem])
      } else {
        const newOrders = [...cartItems];
        newOrders[itemIndex].quantity++;
        setCartItems(newOrders)
      }
    }

    const removeOrder = id => {
      const newOrders = cartItems.filter(item => item.id !== id)
      setCartItems(newOrders)
    }

    const incQuantity = (id) => {
      const newOrder = cartItems.map(el => {
        if (el.id === id) {
          el.quantity++;
        }
  
        return el
      })
  
      setCartItems(newOrder)
    }



    const decQuantity = (id) => {
      const newOrder = cartItems.map(el => {
        if (el.id === id) {
          el.quantity = el.quantity > 1 ? el.quantity - 1 : 1 
        }
  
        return el
      })
  
      setCartItems(newOrder)
    }



  return (
    <BrowserRouter>
      <Header cartItems = {cartItems}/>
        <Routes>
          <Route path= '/' element = {<Home addToBasket={addToBasket}/>}/>
          <Route path= '/AboutUs' element = {<AboutUs/>}/>
          <Route path= '/cafeShop' element = {<CafeShop/>}/>
          <Route path= '/contact' element = {<Contact/>}/>
          <Route path='/checkout' element = {<CheckOut cartItems = {cartItems}/>}/>
          <Route path='/products' element = {<Products addToBasket = {addToBasket}/>}/>
          <Route path='/product/:catKey' element = {<ItemInfoPage addToBasket={addToBasket}/>}/>
          <Route path='/cart' element = {<Cart cartItems = {cartItems} 
                                              addToBasket = {addToBasket}
                                              removeOrder = {removeOrder}
                                              incQuantity = {incQuantity}
                                              decQuantity = {decQuantity}
                                        />}/>
          <Route path= '/cake' element = {<Cake/>}/>
          <Route path = '/completed' element = {<Completed/>}/>
          <Route path='/return_policy' element = {<ReturnPolicy/>}/>
          <Route path='/delivery' element = {<Delivery/>}/>
          <Route path='/register' element = {<Register/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App