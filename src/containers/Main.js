import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CompSci from '../components/CompSci';
import Sleep from '../components/Sleep';
import Video from '../components/Video';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/compsci' component={CompSci} />
      <Route path='/sleep' component={Sleep} />
      <Route path='/video' component={Video} />
    </Switch>
  </main>
);

export default Main;
