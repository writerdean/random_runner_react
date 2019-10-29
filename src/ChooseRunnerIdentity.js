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
        <ChooseAnarch faction='anarch' />
        <ChooseCriminal faction='criminal' />
        <ChooseShaper faction='shaper' />
      </div>
      </Fragment>
    )
  }
}

export default ChooseRunnerIdentity;