import React, { Fragment } from 'react';
import ChooseRandomCorp from './ChooseRandomCorp';
import ChooseHB from './ChooseHB';
import ChooseJinteki from './ChooseJinteki';
import ChooseNBN from './ChooseNBN';
import ChooseWeyland from './ChooseWeyland';




class ChooseCorpIdentity extends React.Component {
  render() {
    return (
      <Fragment>
      <ChooseRandomCorp />
      <div>
        <ChooseHB />
        <ChooseJinteki />
        <ChooseNBN />
        <ChooseWeyland />
      </div>

      </Fragment>
    )
  }
}

export default ChooseCorpIdentity;