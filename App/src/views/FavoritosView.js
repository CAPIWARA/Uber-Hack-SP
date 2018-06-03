import React, {Component} from 'react';
import './FavoritosView.css'
import SlippyAgendamentoCard from "../components/Slippy/SlippyAgendamentoCard";

export default class FavoritosView extends Component {
  render() {
    return(
      <div className='Favoritos'>
        <h1>Favoritos</h1>

        <SlippyAgendamentoCard />
      </div>
    )
  }
}
