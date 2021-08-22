import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AllCategoryListing from './AllCategoryListing';
import { fetchAllCategories } from '../redux/actions/apifetch';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, []);

  return (
    <div>
      <AllCategoryListing />
    </div>
  );
};

export default Home;
