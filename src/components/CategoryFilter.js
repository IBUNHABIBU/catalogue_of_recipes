import React from 'react';
import PropTypes from 'prop-types';
import { actionTypes } from '../redux/costants';

const CategoryFilter = ({ handleFilter }) => {
  const all = ['All'];
  const categories = all.concat(actionTypes.bookCategories);
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
