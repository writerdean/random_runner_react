import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/side/runner" component={ChooseRunnerIdentity} />
      <Route path="/side/corp" component={ChooseCorpIdentity} />

    </Switch>
  </BrowserRouter>
)