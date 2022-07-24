import { API_URL } from "./config";

const getAllProducts = async() => {
    const response = await fetch(API_URL);
    return response.json();
}

const getFilteredProductsByCategory = async(catName) => {
    const response = await fetch(API_URL +'?'+ catName)
    return response.json();
}

const getProductByName = async(catName, productName) => {
    const response = await fetch(API_URL + '?' + catName + '&&name=' + productName);
    return response.json();
}

const getProductByKey = async(catKey, productKey) => {
    const response = await fetch(API_URL + '?' + catKey + '&&catKey=' + catKey);
    return response.json();
}

const getProductById = async(id) => {
    const response = await fetch(API_URL + '/' + id)
    return response.json();
}


export {getAllProducts, getProductByKey, getFilteredProductsByCategory, getProductByName, getProductById}