import { useState, useEffect,  } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import { getProductByKey  } from '../../api';
import './itemInfoPage.css';


const ItemInfoPage = ({addToBasket}) => {

    
  const {catKey} = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState({});


  useEffect(()=>{
    getProductByKey (catKey).then(product=>{
        setItem(product[0]);
    })
},[catKey]);

    return (
        <div className="ItemInfoPage">
            <div className='container'>
                <div onClick={() =>navigate(-2)}>Home  /</div>
                <div onClick={() =>navigate(-1)}>{item.category}  /</div>
                <div>{item.name}</div>
            </div>
            <div className='item'>
                <div className='img'>
                    <img src={item.img}/>
                </div>
                <div className='content'>
                    <h4 className='name'>{item.name}</h4>
                    <h4 className='price'>{item.price}</h4>
                    <h4 className='descr'>{item.descr}</h4>
                    <h4 className='category'>{item.category}</h4>
                    <button onClick={() => addToBasket(item)}>Add To Basket</button>
                </div>
           </div>
        </div>
    )
}

export default ItemInfoPage;