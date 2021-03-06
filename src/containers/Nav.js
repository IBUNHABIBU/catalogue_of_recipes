import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CategoryFilter from '../components/CategoryFilter';
import { fetchByCategory } from '../redux/actions/apifetch';
import { changeFilter } from '../redux/actions/index';

const Nav = () => {
  const dispatch = useDispatch();
  const handleCategoryChange = (e) => {
    dispatch(changeFilter(e.target.value));
    dispatch(fetchByCategory(e.target.value));
  };

  return (
    <div className="main">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="link"><span className="navbar-brand logo">RECIPES ZONE</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="link"><span className="nav-link active home" aria-current="page">Home</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="link"><span className="nav-link active about" aria-current="page">About</span></Link>
              </li>
              <li className="select-tag">
                <Link to="/" className="link">
                  <CategoryFilter handleFilter={handleCategoryChange} className="catField" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
