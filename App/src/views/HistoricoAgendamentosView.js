import React, { Component } from 'react';
import './AgendamentosView.css';
import SlippyAgendamentoCard from "../components/Slippy/SlippyAgendamentoCard";

export default class HistoricoAgendamentosView extends Component {
  render() {
    return (
      <div className='Agendamentos'>
        <h1>Historico de agendamentos</h1>

        <SlippyAgendamentoCard />
        <SlippyAgendamentoCard />
        <SlippyAgendamentoCard />
        <SlippyAgendamentoCard />

      </div>
    )
  }
}
