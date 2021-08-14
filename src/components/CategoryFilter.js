import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { actionTypes } from '../redux/costants';
import useStyles from '../stylesheets/styles';

const CategoryFilter = ({ handleFilter }) => {
  const classes = useStyles();
  const categories = actionTypes.bookCategories;
  const cat = categories.map((item) => <MenuItem value={item} key={item}>{item}</MenuItem>);
  return (
    <div>
      <label htmlFor="Category">
        <FormControl variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label" className={classes.catlabel}>CATEGORIES</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="category"
            onChange={handleFilter}
            label="Age"
            className={classes.catInput}
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
