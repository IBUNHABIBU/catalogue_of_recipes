import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { selectCategory } from '../redux/actions';

const CategoryListing = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const foodList = useSelector((state) => state.categories.meals);
  const fetchByCategory = async () => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
    dispatch(selectCategory(response.data));
  };

  useEffect(() => {
    fetchByCategory();
  }, [categoryName]);

  if (foodList.length === 0) {
    return (
      <div align="center">
        <Typography variant="h4">Loading ..  </Typography>
        <CircularProgress />
      </div>
    );
  }
  const displayByCategory = (
    <div className="p-2">
      <div className="row">
        {
              foodList.map((list) => {
                const {
                  strMeal, strMealThumb, idMeal,
                } = list;
                return (
                  <div className="col-3" key={idMeal}>
                    <Link to={`/category/${categoryName}/${idMeal}`} className="link">
                      <div className="card">
                        <img src={strMealThumb} className="card-img-top" alt="Thumb" />
                        <div className="card-body">
                          <h5 className="card-text">
                            {' '}
                            {strMeal}
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })
        }
      </div>
    </div>
  );
  return (
    <div>
      <h1 align="center">
        {
          `${categoryName}  category`
        }
      </h1>
      { displayByCategory }
    </div>
  );
};

export default CategoryListing;
