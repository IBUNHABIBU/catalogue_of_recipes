import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from './Loading';

const AllCategoryListing = () => {
  const meals = useSelector((state) => state.allFoods.categories);
  if (meals.length === 0) {
    return (
      <Loading />
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
            <div className="col-12 col-lg-3 col-md-6" key={idCategory} data-testid="allcat">
              <Link to={`/category/${strCategory}`} className="link">
                <div className="card">
                  <img src={strCategoryThumb} className="card-img-top" alt="Thumb" />
                  <div className="card-body">
                    <h5 className="card-title">{strCategory}</h5>
                    <p className="card-text">{strCategoryDescription.substring(0, 150)}</p>
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

export default AllCategoryListing;
