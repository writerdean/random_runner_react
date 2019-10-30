import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import ChooseRunnerIdentity from './ChooseRunnerIdentity';
import ChooseCorpIdentity from './ChooseCorpIdentity';
import ChooseAnarch from './ChooseAnarch';
import ChooseCriminal from './ChooseCriminal';
import ChooseShaper from './ChooseShaper';
import ChooseHB from './ChooseHB';
import ChooseJinteki from './ChooseJinteki';
import ChooseNBN from './ChooseNBN';
import ChooseWeyland from './ChooseWeyland';


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/side/runner" component={ChooseRunnerIdentity} />
      <Route path="/side/corp" component={ChooseCorpIdentity} />
      <Route path="/side/runner/anarch" component={ChooseAnarch} />
      <Route path="/side/runner/criminal" component={ChooseCriminal} />
      <Route path="/side/runner/shaper" component={ChooseShaper} />
      <Route path="/side/corp/hb" component={ChooseHB} />
      <Route path="/side/corp/jinteki" component={ChooseJinteki} />
      <Route path="/side/corp/nbn" component={ChooseNBN} />
      <Route path="/side/corp/weyland" component={ChooseWeyland} />

    </Switch>
  </BrowserRouter>
)

export default Router;