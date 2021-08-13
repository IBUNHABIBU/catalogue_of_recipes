import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CategoryListing = () => {
  const { categoryId } = useParams();
  const categories = useSelector((state) => state.allFoods.categories);
  console.log(categories, `its id is ${categoryId}`);
  return (
    <div />
  );
};

export default CategoryListing;
