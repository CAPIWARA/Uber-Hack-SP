import React, {Component} from 'react';
import Estabelecimento from '../components/Estabelecimento/Estabelecimento'

export default class EstabelecimentoView extends Component {
  render() {
    return (
      <Estabelecimento history={this.props.history}/>
    )
  }
}
