import React from 'react';
import { Link } from 'react-router-dom';

const CategoryFilter = () => (
  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    <li><Link to="/category/Beef" className="link"><span className="dropdown-item">Action</span></Link></li>
    <li><Link to="/category/Beef" className="link"><span className="dropdown-item">Another action</span></Link></li>
    <li><Link to="/category/Beef" className="link"><span className="dropdown-item">Something else here</span></Link></li>
  </ul>
);

export default CategoryFilter;
