/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CategoryFilter from '../components/CategoryFilter';
import { changeFilter } from '../redux/actions/index';

const Nav = () => {
  const dispatch = useDispatch();
  const handleCategoryChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  // const filter = useSelector((state) => state.filter);

  return (
    <div classNameName="navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="link"><span className="navbar-brand">Recipes Zone</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="link"><span className="nav-link active" aria-current="page">Home</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="link"><span className="nav-link active" aria-current="page">About</span></Link>
              </li>
              <li className="select-tag">
                <CategoryFilter handleFilter={handleCategoryChange} className="catField" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
