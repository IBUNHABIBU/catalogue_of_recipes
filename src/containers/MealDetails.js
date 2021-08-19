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
    strCategory, strArea,
  } = details[0];

  return (
    <div className="container p-4">

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={strMealThumb} className="img-fluid rounded-start" alt="str meal thumb" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{strMeal}</h5>
              <p className="card-text">{strInstructions}</p>
              <h5 className="card-text">
                <small className="text-muted">
                  <strong>Category:  </strong>
                  {strCategory}
                </small>
              </h5>
              <h5 className="card-text">
                <small className="text-muted">
                  <strong>Area:  </strong>
                  {strArea}
                </small>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default MealDetails;