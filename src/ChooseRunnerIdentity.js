import React, { Fragment } from 'react';
import ChooseRandomRunner from './ChooseRandomRunner';
import ChooseAnarch from './ChooseAnarch';
import ChooseCriminal from './ChooseCriminal';
import ChooseShaper from './ChooseShaper';


class ChooseRunnerIdentity extends React.Component {

  chooseFaction = () => {
    // set state to whatever current state is
    // set state to faction of click
    console.log('click');
  }
  render() {
    return (
      <Fragment>
      <ChooseRandomRunner side={ this.props.side }  />
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