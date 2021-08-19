import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import CategoryFilter from '../components/CategoryFilter';
// import useStyles from '../stylesheets/styles';
// import { changeFilter } from '../redux/actions/index';

const Nav = () => (
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

            <li className="nav-item dropdown">
              <Link to="/" className="link">
                <span className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </span>
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><Link to="/category/Beef" className="link"><span className="dropdown-item">Action</span></Link></li>
                <li><Link to="/category/Beef" className="link"><span className="dropdown-item">Another action</span></Link></li>
                <li><Link to="/category/Beef" className="link"><span className="dropdown-item">Something else here</span></Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);
export default Nav;
