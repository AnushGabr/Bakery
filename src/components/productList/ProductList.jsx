import React, {useEffect, useState} from 'react';
import ProductItem from './ProductItem';
import { getAllProducts } from '../../api';
import ItemInfoPage from '../../pages/itemInfoPage/ItemInfoPage';
import './ProductItem.css';

const ProductList = ({gridType, 
                      products, 
                      productCategory, 
                      setProducts,
                      addToBasket, 
                      productCategoryDesc, 
                      filterListByDesc, 
                      setProductCategoryDesc}) => {

  useEffect(() => {
    if(productCategory == null || productCategory === "")
      return;
    getAllProducts()
    .then(resolve => {
      const descs = [];
      const filteredList = resolve.filter(product => product.category.toLowerCase() === productCategory.toString().toLowerCase());
      filteredList.map(item => {
        let itemDesc = descs.find(desc => item.descr === desc);
        if(itemDesc == null)
          descs.push(item.descr);
      })
      setProducts(filteredList);
      setProductCategoryDesc(descs);
    })
  }, [productCategory]);

  return (
    < div className='ProductList'>

<div className='descr'>
<h2 className='descrTitle'>Description</h2>
   {
     productCategoryDesc.map(descr => {
       return <h3 className='headingDescr' key={descr} onClick={() => filterListByDesc(descr)}>{descr}</h3>
   })
 }
 </div>

  <div className='AllItems'>
        {
          products.map(product => {
            return  <ProductItem gridType={gridType} 
                                key = {product.id}
                                addToBasket = {addToBasket}
                                product = {product}/>
          })
        }
        </div>
    </div>
  )
}

export default ProductList
