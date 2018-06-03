import React from 'react';
import './SlippyAgendamentoCard.css';

const SlippyAgendamentoCard = () => {
  return (
    <article className="Agendamentos__card">
      <h2>Nome do Estabelecimento</h2>
      <p>Endereço do estabelecimento comerciao, São Paulo, SP</p>
      <span>05/06/2018 às 09:00 por 30 minutos</span>
    </article>
  )
};

export default SlippyAgendamentoCard;
