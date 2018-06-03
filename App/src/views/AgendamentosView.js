import React, { Component } from 'react';
import './AgendamentosView.css';
import SlippyAgendamentoCard from "../components/Slippy/SlippyAgendamentoCard";

export default class AgendamentosView extends Component {
  render() {
    return (
      <div className='Agendamentos'>
        <h1>Meus agendamentos</h1>

        <SlippyAgendamentoCard />
        
      </div>
    )
  }
}
