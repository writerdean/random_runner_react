import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import ChooseRunnerIdentity from './ChooseRunnerIdentity';
import ChooseCorpIdentity from './ChooseCorpIdentity';


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/side/runner" component={ChooseRunnerIdentity} />
      <Route path="/side/corp" component={ChooseCorpIdentity} />
    </Switch>
  </BrowserRouter>
)

export default Router;