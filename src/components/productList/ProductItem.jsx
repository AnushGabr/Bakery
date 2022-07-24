import React from 'react';
import './ProductItem.css';
import ItemInfoPage from '../../pages/itemInfoPage/ItemInfoPage';
import {Link} from 'react-router-dom'

const ProductItem = ({ gridType, product, addToBasket}) => {

  return (
    <div className={'ProductItem ' + gridType}>
      <Link to={'/product/'+ product.catKey}> <img src={product.img}/> <h2>{product.name}</h2> {ItemInfoPage}</Link>
      <h2 className='itemPrice'>{product.price}</h2>
      <button onClick={() => addToBasket(product)} className='add'>Add to Cart</button>
    </div>
  )
}

export default ProductItem
