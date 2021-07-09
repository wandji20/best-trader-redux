import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Markets from './Markets';
import Details from '../presentation/Details';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Markets} />
      <Route exact path="/Details" component={Details} />
    </Switch>
  </BrowserRouter>
);

export default App;
