import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './containers/Nav';
import Home from './containers/Home';
import CategoryListing from './containers/CategoryListing';
import About from './containers/About';
import FoodDetails from './containers/FoodDetails';

const App = () => (
  <div>
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/category/:categoryName" component={CategoryListing} />
        <Route path="/about" component={About} />
        <Route path="/category/:categoryName/:mealId" component={FoodDetails} />
      </Switch>
    </Router>
  </div>
);

export default App;
