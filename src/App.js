import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './containers/Nav';
import Home from './containers/Home';
import CategoryListing from './containers/CategoryListing';

const App = () => (
  <div>
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/category/:categoryId" component={CategoryListing} />
        <Route path="/category/:categoryId/meal" component={FoodDetails} />
      </Switch>
    </Router>
  </div>
);

export default App;
