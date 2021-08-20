import React from 'react';
import { actionTypes } from '../redux/costants';
// import { Link } from 'react-router-dom';

const CategoryFilter = ({ handleFilter }) => {
  const categories = actionTypes.bookCategories;
  const cat = categories.map((item) => <option value={item} key={item}>{item}</option>);
  return (
    <select onChange={handleFilter}>
      <option selected="selected">Category</option>
      {cat}
    </select>
  );
};

export default CategoryFilter;
