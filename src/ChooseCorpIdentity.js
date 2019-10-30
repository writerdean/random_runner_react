import React, { Fragment } from 'react';
import ChooseRandomCorp from './ChooseRandomCorp';
import ChooseHB from './ChooseHB';
import ChooseJinteki from './ChooseJinteki';
import ChooseNBN from './ChooseNBN';
import ChooseWeyland from './ChooseWeyland';




class ChooseCorpIdentity extends React.Component {

  chooseFaction = () => {
    // set state to whatever current state is
    // set state to faction of click
    console.log('click');
  }
  render() {
    return (
      <Fragment>
      <ChooseRandomCorp side={ this.props.side } />
      <div>
        <ChooseHB faction='hb' />
        <ChooseJinteki faction='jinteki' />
        <ChooseNBN faction='nbn' />
        <ChooseWeyland faction='weyland' />
      </div>
      </Fragment>
    )
  }
}

export default ChooseCorpIdentity;