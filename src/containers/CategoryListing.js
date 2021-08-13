import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CategoryListing = () => {
  const { categoryId } = useParams();
  const categories = useSelector((state) => state.allFoods.categories);
  const filteredCat = categories.find((item) => item.idCategory === categoryId);
  console.log(categories, `its id is ${categoryId} cat is ${filteredCat.strCategory}`);
  return (
    <div />
  );
};

export default CategoryListing;
