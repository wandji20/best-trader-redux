import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Markets from './Markets';
import Nav from '../presentation/Nav';
import MarketDetails from './MarketDetails';

const App = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route exact path="/" component={Markets} />
      <Route exact path="/MarketDetails" component={MarketDetails} />
    </Switch>
  </BrowserRouter>
);

export default App;
