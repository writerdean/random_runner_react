import React, { Fragment } from "react";
import ChooseRunnerIdentity from './ChooseRunnerIdentity';
import ChooseCorpIdentity from './ChooseCorpIdentity';
import { filterByIdentity } from './filters';

function ChooseIdentity() {
  return (
    <Fragment>
      <ChooseRunnerIdentity side='runner' />
      <ChooseCorpIdentity side='corp' />
  </Fragment>
  );
}
console.log(filterByIdentity('runner'));
export default ChooseIdentity;