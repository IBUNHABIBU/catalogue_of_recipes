import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { selectedRecipe } from '../redux/actions';

const CategoryListing = () => {
  const { categoryId } = useParams();
  const categories = useSelector((state) => state.allFoods.categories);
  const filteredCat = categories.find((item) => item.idCategory === categoryId);
  const category = filteredCat.strCategory;
  const dispatch = useDispatch()

  const fetchByCategory = async () => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .catch(err=> console.log(error));
    dispatch(selectedRecipe(response.data));
  }
  return (
    <div />
  );
};

export default CategoryListing;
