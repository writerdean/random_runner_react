import React, { Fragment } from 'react';
import ChooseRandomRunner from './ChooseRandomRunner';
import ChooseAnarch from './ChooseAnarch';
import ChooseCriminal from './ChooseCriminal';
import ChooseShaper from './ChooseShaper';


class ChooseRunnerIdentity extends React.Component {
  render() {
    return (
      <Fragment>
      <ChooseRandomRunner />
      <div>
        <ChooseAnarch />
        <ChooseCriminal />
        <ChooseShaper />
      </div>
      </Fragment>
    )
  }
}

export default ChooseRunnerIdentity;