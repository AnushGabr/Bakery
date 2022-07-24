import React from 'react';
import ProductList from '../../components/productList/ProductList';
import { useState, useEffect } from 'react';
import { getAllProducts } from '../../api';
import './products.css';
import { BsFillGrid3X3GapFill} from "react-icons/bs"
import { FiGrid } from "react-icons/fi";


const Products = ({addToBasket}) => {

  const categoriesList = ['Traditional', 'Pastry', 'Breads', 'Cakes', 'Pies', 'Ice cream'];
  const descrList = ['Cream with condensed milk','with cheese', 'with wallnut', "with honey and nuts", "with fruit", "with jem"];
  const [products, setProducts] = useState([]);
  const [productCategory, setProductCategory] = useState('');
  const [productCategoryDesc, setProductCategoryDesc] = useState(descrList);
  const [gridType, setGridType] = useState('row3');



  
  useEffect(() => {
    getAllProducts()
      .then(resolve => setProducts(resolve))
  }, [])

  const setCategory = (category) => {
    setProductCategory(category);
  }

const filterListByDesc = (desc) => {
  getAllProducts()
  .then(resolve => {
    const filteredList = resolve.filter(product => product.descr.toLowerCase() === desc.toString().toLowerCase());
    setProducts(filteredList);
  })
}

  return (
    <div className='Products'>
               <div className='allCategories'>
            <div className="showCategories"></div>
            <div className='categories'> 
        {
          categoriesList.map(category => {
            return <h2 className='heading' key={category} onClick={() => setCategory(category)}>{category}</h2>
          })
        }
         </div>
         </div>

    <div className='container'>
        <div className='rowIcons'>
          <h3 className='showRow'>Show:</h3>
        <div className='rowIcon' onClick={()=> setGridType('row2')}><FiGrid /> </div>
        <div className='rowIcon' onClick={()=> setGridType('row3')}><BsFillGrid3X3GapFill /></div>
        <div className='rowIcon' onClick={()=> setGridType('row4')}>
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
          x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19">
            <rect width="4" height="4"></rect>
            <rect x="5" width="4" height="4"></rect>
            <rect x="10" width="4" height="4"></rect>
            <rect x="15" width="4" height="4"></rect>
            <rect y="5" width="4" height="4"></rect>
            <rect x="5" y="5" width="4" height="4"></rect>
            <rect x="10" y="5" width="4" height="4"></rect>
            <rect x="15" y="5" width="4" height="4"></rect>
            <rect y="15" width="4" height="4"></rect>
            <rect x="5" y="15" width="4" height="4"></rect>
            <rect x="10" y="15" width="4" height="4"></rect>
            <rect x="15" y="15" width="4" height="4"></rect>
            <rect y="10" width="4" height="4"></rect>
            <rect x="5" y="10" width="4" height="4"></rect>
            <rect x="10" y="10" width="4" height="4"></rect>
            <rect x="15" y="10" width="4" height="4"></rect>
          </svg> </div>
        </div>

    </div>

      <ProductList gridType={gridType}  
                  products={products} 
                  productCategory={productCategory}  
                  setProducts={setProducts}
                  addToBasket = {addToBasket}
                  setProductCategoryDesc = {setProductCategoryDesc}
                  productCategoryDesc = {productCategoryDesc}
                  filterListByDesc = {filterListByDesc}
                  />
    </div>
  )
}

export default Products
