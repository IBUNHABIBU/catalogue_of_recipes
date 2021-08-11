import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRecipe } from './../redux/actions/index';

const Home = () => {
  const food = useSelector(state => state.food);
  const dispatch = useDispatch()
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
    dispatch(setRecipe)

  }, [input])
  return (
    <div>
      <button type="submit" onClick={handleClick}>click Me</button>
    </div>
  );
};

export default Home;
