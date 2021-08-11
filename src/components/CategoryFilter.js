import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { actionTypes } from '../redux/costants';

const CategoryFilter = ({ handleFilter }) => {
  // const classes = myStyle();
  const all = ['All'];
  const categories = all.concat(actionTypes.bookCategories);
  const cat = categories.map((item) => <MenuItem value={item} key={item}>{item}</MenuItem>);
  return (
    <div>
      <label htmlFor="Category">
        <FormControl variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">CATEGORIES</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="category"
            onChange={handleFilter}
            label="Age"
          >
            {cat}
          </Select>
        </FormControl>
      </label>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
export default CategoryFilter;
