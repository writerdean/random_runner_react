import React, { Fragment } from "react";
import ChooseRunnerIdentity from './ChooseRunnerIdentity';
import ChooseCorpIdentity from './ChooseCorpIdentity';

function ChooseIdentity() {
  return (
    <Fragment>
      <ChooseRunnerIdentity side='runner' />
      <ChooseCorpIdentity side='corp' />
  </Fragment>
  );
}
export default ChooseIdentity;