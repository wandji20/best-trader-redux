import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Markets from './Markets';
// import Nav from '../presentation/Nav';
// import MarketDetails from './MarketDetails';
import Details from '../presentation/Details';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Markets} />
      {/* <Route exact path="/MarketDetails" component={MarketDetails} /> */}
      <Route exact path="/Details" component={Details} />
    </Switch>
  </BrowserRouter>
);

export default App;
