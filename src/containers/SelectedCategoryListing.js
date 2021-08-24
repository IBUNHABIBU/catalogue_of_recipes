import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './Loading';
import { fetchByCategory } from '../redux/actions/apifetch';

const selectedCategoryListing = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const foodList = useSelector((state) => state.selected.meals);
  const filter = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchByCategory(categoryName));
  }, [categoryName]);

  if (foodList === null) {
    return (
      <Loading />
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
                  <div className=" col-6 col-lg-3 col-md-6 p-1" key={idMeal}>
                    <Link to={`/category/${categoryName}/${idMeal}`} className="link">
                      <div className="card ">
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
          `${categoryName || filter} Category`
        }
      </h1>
      { displayByCategory }
    </div>
  );
};

export default selectedCategoryListing;
