import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { selectedRecipe } from '../redux/actions';

const CategoryListing = () => {
  const { categoryId } = useParams();
  const categories = useSelector((state) => state.allFoods.categories);
  const filteredCat = categories.find((item) => item.idCategory === categoryId);
  const category = filteredCat.strCategory;
  const dispatch = useDispatch();
  const stateCat = useSelector(state => state.category)
  console.log(stateCat);

  const fetchByCategory = async () => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .catch((err) => console.log(error));
    dispatch(selectedRecipe(response.data));
  };

  useEffect(() => {
    if(categoryId && categoryId === '') fetchByCategory()
  }, [categoryId])

  return (
    <div>
      <h1>these are food recipe sorted by category</h1>
    </div>
  );
};

export default CategoryListing;
