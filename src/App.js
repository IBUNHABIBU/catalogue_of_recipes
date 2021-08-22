import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './containers/Nav';
import Home from './containers/Home';
import SelectedCategoryListing from './containers/SelectedCategoryListing';
import About from './containers/About';
import MealDetails from './containers/MealDetails';

const App = () => (
  <div>
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/category/:categoryName" exact component={SelectedCategoryListing} />
        <Route path="/about" exact component={About} />
        <Route path="/category/:categoryName/:mealId" exact component={MealDetails} />
      </Switch>
    </Router>
  </div>
);

export default App;
