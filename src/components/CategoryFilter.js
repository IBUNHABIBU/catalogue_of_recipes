import React from 'react';
import PropTypes from 'prop-types';
import { actionTypes } from '../redux/costants';
// import { Link } from 'react-router-dom';

const CategoryFilter = ({ handleFilter }) => {
  const categories = actionTypes.bookCategories;
  const cat = categories.map((item) => <option value={item} key={item}>{item}</option>);
  return (
    <select onChange={handleFilter}>
      {cat}
    </select>
  );
};

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
export default CategoryFilter;
