import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setRecipe } from '../redux/actions/index';
import FoodListing from './FoodListing';

const Home = () => {
  const dispatch = useDispatch();
  const fetchProduct = async () => {
    const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php');
    dispatch(setRecipe(response.data));
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <FoodListing />
    </div>
  );
};

export default Home;
