import React, { Fragment } from 'react';
import ChooseRandomRunner from './ChooseRandomRunner';
import ChooseAnarch from './ChooseAnarch';
import ChooseCriminal from './ChooseCriminal';
import ChooseShaper from './ChooseShaper';
import filterByIdentity from './filters';


class ChooseRunnerIdentity extends React.Component {
  
  render() {
    return (
      <Fragment>
      <ChooseRandomRunner  onClick={filterByIdentity} side={ this.props.side }  />
      <div>
        <ChooseAnarch side={ this.props.side } faction='anarch' />
        <ChooseCriminal side={ this.props.side } faction='criminal' />
        <ChooseShaper side={ this.props.side } faction='shaper' />
      </div>
      </Fragment>
    )
  }
}

export default ChooseRunnerIdentity;