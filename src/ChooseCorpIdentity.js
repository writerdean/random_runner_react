import React, { Fragment } from 'react';
import ChooseRandomCorp from './ChooseRandomCorp';
import ChooseHB from './ChooseHB';
import ChooseJinteki from './ChooseJinteki';
import ChooseNBN from './ChooseNBN';
import ChooseWeyland from './ChooseWeyland';
import filterByIdentity from './filters';


class ChooseCorpIdentity extends React.Component {

  render() {
    return (
      <Fragment>
      <ChooseRandomCorp onClick={filterByIdentity} side={ this.props.side }  />
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