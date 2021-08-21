import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProduct } from '../redux/actions/index';
import FoodListing from './FoodListing';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <div>
      <FoodListing />
    </div>
  );
};

export default Home;
