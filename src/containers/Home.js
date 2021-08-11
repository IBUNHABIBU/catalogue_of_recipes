import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const Home = () => {
  const fetchProduct = async () => {
    const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php')
      .catch((error) => console.log(error));
    console.log(response.data);
  };
  // const handleClick = () => {
  //   fetchProduct();
  // };
  useEffect(() => {
    effect
    return () => {
      cleanup
    }
  }, [input])
  return (
    <div>
      <button type="submit" onClick={handleClick}>click Me</button>
    </div>
  );
};

export default Home;
