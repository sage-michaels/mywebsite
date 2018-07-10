import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CompSci from '../components/CompSci';
import Sleep from '../components/Sleep';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/compsci' component={CompSci} />
      <Route path='/sleep' component={Sleep} />
    </Switch>
  </main>
);

export default Main;
