import React, { Fragment } from 'react';
import ChooseRandomCorp from './ChooseRandomCorp';
import ChooseHB from './ChooseHB';
import ChooseJinteki from './ChooseJinteki';
import ChooseNBN from './ChooseNBN';
import ChooseWeyland from './ChooseWeyland';


class ChooseCorpIdentity extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }
  render() {
    return (
      <Fragment>
      <ChooseRandomCorp side={ this.props.side } onClick={(e) => this.handleClick(e)}/>
      <div>
        <ChooseHB side={ this.props.side } faction='hb' />
        <ChooseJinteki side={ this.props.side } faction='jinteki' />
        <ChooseNBN side={ this.props.side } faction='nbn' />
        <ChooseWeyland side={ this.props.side } faction='weyland' />
      </div>
      </Fragment>
    )
  }
}

export default ChooseCorpIdentity;