import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const FoodListing = () => {
  const meals = useSelector((state) => state.allFoods.categories);
  if (meals.length === 0) {
    return (
      <div align="center">
        <Typography variant="h4">Loading ..  </Typography>
        <CircularProgress />
      </div>
    );
  }
  const renderList = (
    <div className="p-4">
      <div className="row" spacing={1}>
        {
        meals.map((meal) => {
          const {
            idCategory, strCategory, strCategoryThumb, strCategoryDescription,
          } = meal;
          return (
            <div className="col-3" key={idCategory}>
              <Link to={`/category/${strCategory}`} className="link">
                <div className="card">
                  <img src={strCategoryThumb} className="card-img-top" alt="Thumb" />
                  <div className="card-body">
                    <h5 className="card-title">{strCategory}</h5>
                    <p className="card-text">{strCategoryDescription.substring(0, 150)}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
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
      { renderList }
    </div>
  );
};

export default FoodListing;
