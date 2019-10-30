import React, { Fragment } from 'react';
import ChooseRandomRunner from './ChooseRandomRunner';
import ChooseAnarch from './ChooseAnarch';
import ChooseCriminal from './ChooseCriminal';
import ChooseShaper from './ChooseShaper';


class ChooseRunnerIdentity extends React.Component {

  handleClick = () => {
    console.log('this is:', this);
  }
  
  render() {
    return (
      <Fragment>
      <ChooseRandomRunner  onclick={(e) => this.handleClick(e)} />
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