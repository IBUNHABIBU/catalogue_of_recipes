import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AllCategoryListing from './AllCategoryListing';
import { fetchAllCategories } from '../redux/actions/apifetch';
import SelectedCategoryListing from './SelectedCategoryListing';

const Home = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, []);

  if (filter !== 'All') {
    return <SelectedCategoryListing />;
  }
  return (
    <div>
      <AllCategoryListing />
    </div>
  );
};

export default Home;
