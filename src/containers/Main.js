import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CompSci from '../components/CompSci';
import Sleep from '../components/Sleep';
import Video from '../components/Video';
import Home from '../components/Home';
//Main segement is one of 4 possible pages
const Main = () => (
  <main>
  <div id="fb-root"></div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/compsci' component={CompSci} />
      <Route path='/sleep' component={Sleep} />
      //<Route path='/video' component={Video} />
    </Switch>
  </main>
);

export default Main;
