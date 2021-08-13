import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

const CategoryListing = () => {
  const { categoryId } = useParams();
  const categories = useSelector((state) => state.allFoods.categories);
  const filteredCat = categories.find((item) => item.idCategory === categoryId);
  console.log(categories, `its id is ${categoryId} cat is ${filteredCat.strCategory}`);

  const fetchByCategory = async () => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${}`)
  }
  return (
    <div />
  );
};

export default CategoryListing;
