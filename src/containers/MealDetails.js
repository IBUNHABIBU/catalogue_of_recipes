import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { selectMeal } from '../redux/actions';

const MealDetails = () => {
  const { mealId } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details.meals);
  const featchMealDetails = async () => {
    const response = await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    dispatch(selectMeal(response.data));
  };

  useEffect(() => {
    featchMealDetails();
  }, [mealId]);
  if (details.length === 0) {
    return (
      <div className="d-flex justify-content-center">
        <h2>Loading...</h2>
        <br />
        <div className="spinner-border text-primary" role="status" />
      </div>
    );
  }
  const {
    strMealThumb, strMeal, strInstructions,
    strCategory,
  } = details[0];

  return (
    <div className="page-width">

      <div className="card bg-dark text-white">
        <img src={strMealThumb} className="card-img" alt="image thumb" />
        <div className="card-img-overlay">
          <h5 className="card-title">{strMeal}</h5>
          <p className="card-text">{strInstructions}</p>
          <p className="card-text">{strCategory}</p>
        </div>
      </div>
    </div>

  );
};

export default MealDetails;
