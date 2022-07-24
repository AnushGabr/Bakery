import {NavLink} from 'react-router-dom';
import './header.css';
import Login from '../login/Login';
import './header.css';
import Data from './db.json'
import SearchBar from './SearchBar'
import { Link, useNavigate} from 'react-router-dom';
import {GiCupcake} from "react-icons/gi";

const Header = ({ cartItems }) => {
    const navigate = useNavigate()

  return (
    <div className='Header'>
      <div className="info">
            <div className="address">
                <a href="https://www.google.com/maps/place/Marush+Sweets+Boutique+Teryan+65+Branch/@40.1859451,44.5158425,17z/data=!3m1!4b1!4m5!3m4!1s0x406abdf535b11b33:0x9b8376a06a3ae86d!8m2!3d40.1859451!4d44.5180365?shorturl=1"><i className="fa-solid fa-location-dot"></i> Yerevan, Teryan str. 65  |</a>
                <a href="https://www.google.com/maps/place/Marush+Sweets+Boutique/@40.1936409,44.4962337,17z/data=!3m1!4b1!4m5!3m4!1s0x406abd1142960497:0x987fe7d02f52e79f!8m2!3d40.1936409!4d44.4984277?shorturl=1"><i className="fa-solid fa-location-dot"></i> Yerevan, Baghramyan str. 58 |</a>
                <a href="https://www.google.com/maps/place/32+Komitas+Ave,+Yerevan+0012,+Armenia/@40.2043525,44.5017869,18.5z/data=!4m5!3m4!1s0x406abd471f65e34b:0xc4b5fabb1e995902!8m2!3d40.2042952!4d44.5029769?shorturl=1"><i className="fa-solid fa-location-dot"></i> Yerevan, Komitas str.32 |</a>
            </div>
            <span><i className="fa-solid fa-phone-flip"></i>974-524</span>
            <div className="icons">
                <a href="https://www.facebook.com/MarushSweetsBoutique"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
            </div>
        </div>
        
        <div className="section">
            
            <div className='logo'>
              <img src='/images/Asset-1-4.svg' onClick={() => navigate('/')} alt = ''/>
            </div>
                <div className='category' onClick={() => navigate('/products/')}>
                    <span className='btnText'>Browse Categories</span> 
                    <GiCupcake className='iconRi'/> 
                </div>
            

            <nav className="pages">
                <NavLink to = '/AboutUs'>About Us</NavLink>
                <NavLink to = '/CafeShop'>Cafe-Shop</NavLink>
                <NavLink to = '/Contact'>Contact Us</NavLink>
            </nav>

            <div>
            <SearchBar placeholder= 'Search Here' data={Data}/>
            </div>

            <div className="icons">
                <Login />
                <i className="fa-solid fa-cart-shopping" onClick={() => navigate('/cart')}></i>
                <span className='cart-length'>{cartItems.length === 0 ? '': cartItems.length}</span>
            </div>
        </div>
    </div>
    
  )
}

export default Header