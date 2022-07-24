import React from 'react'
import { useState, useRef } from 'react'
import './SearchBar.css'
import {Link} from 'react-router-dom'
import useClickOutSide from './useClickOutSide'

const SearchBar = ({placeholder, data}) => {

    let arrData = data.products;
    const [filteredData, setFilteredData] = useState([])
    const [wordEntered, setWordEntered] = useState("")
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null)
    useClickOutSide(ref, () => setIsVisible(false))
  
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord)
        const newFilter = arrData.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase())
        });

        if (searchWord == '') {
            setFilteredData([])
        } else {
            setFilteredData(newFilter)
        }
    }

    const clearInput = () => {
        setFilteredData([])
        setWordEntered("")
    }
    //
    
    //
  return (
    <form ref = {ref} className='search' onFocus={() => setIsVisible(true)}>
        <div className='searchInputs'>
            <input typeof='text' placeholder= {placeholder} value = {wordEntered} onChange = {handleFilter}/>
            <div className='searchIcon'>
                
                <i className='fas fa-search'></i> 
                
            </div>
        </div>
        { filteredData.length != 0 && isVisible && (
        <div className='dataResult'>
            {
                 filteredData.slice(0, 7).map((value, index) => {
                    return <Link to={'/product/' + value.catKey} key = {index} onClick = {clearInput}><h2 className='dataItem'>{value.name}</h2></Link>
                   
                })
            }
        </div>
        )}
    </form>
  )
}

export default SearchBar