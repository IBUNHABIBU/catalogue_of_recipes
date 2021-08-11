import React from 'react';
import axios from 'axios';

const Home = () => {
  const fetchProduct = async () => {
    const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php')
      .catch((error) => console.log(error));
    console.log(response.data);
  };
  const handleClick = () => {
    fetchProduct();
  };
  return (
    <div>
      <button type="submit" onClick={handleClick}>click Me</button>
    </div>
  );
};

export default Home;
