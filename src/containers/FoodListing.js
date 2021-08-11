import React from 'react'
import { useSelector } from 'react-redux'

const FoodListing = () => {
 const categories = useSelector(state => state.categories);
 const {idCategory, strCategory, strCategoryThumb, strCategoryDescription } = categories;

 return (
  <div>
    <h1>{id}</h1>
    <p>{strCategory}</p>
    <img src={strCategoryThumb} alt="image" />
    <p>{strCategoryDescription}</p>
  </div>
 )
}

export default FoodListing
