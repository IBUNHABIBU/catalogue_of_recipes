import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AllFoodListing from './AllFoodListing';
import { fetchAllCategories } from '../redux/actions/index';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, []);

  return (
    <div>
      <AllFoodListing />
    </div>
  );
};

export default Home;
