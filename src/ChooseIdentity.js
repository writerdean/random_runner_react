import React, { Fragment } from "react";
import ChooseRunnerIdentity from './ChooseRunnerIdentity';
import ChooseCorpIdentity from './ChooseCorpIdentity';



function ChooseIdentity() {
  return (
    <Fragment>
      <ChooseRunnerIdentity />
      <ChooseCorpIdentity />
  </Fragment>
  );
}

export default ChooseIdentity;