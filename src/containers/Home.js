/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setRecipe } from '../redux/actions/index';

const Home = () => {
  const food = useSelector((state) => state.food);
  const dispatch = useDispatch();
  const fetchProduct = async () => {
    const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php')
      .catch((error) => console.log(error));
    dispatch(setRecipe(response.data));
  };
  // const handleClick = () => {
  //   fetchProduct();
  // };
  useEffect(() => {
    // effect
    // return () => {
    //   cleanup
    // }
    dispatch(setRecipe);
  }, []);
  return (
    <div>
      <h1>This is the food api</h1>
    </div>
  );
};

export default Home;
