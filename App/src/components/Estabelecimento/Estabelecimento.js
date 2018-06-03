import './Estabelecimento.css';
import React, {Component} from 'react';
import banner from '../../assets/images/banner-smartfit.jpg';
import avatar from '../../assets/images/profile-image.jpeg';
import bikeIcon from '../../assets/icons/bike-parking.svg';
import showerIcon from '../../assets/icons/showerIcon.svg';
import starIcon from '../../assets/icons/star.svg';
import checkedIcon from '../../assets/icons/checked.svg';
import SlippyButton from "../Slippy/SlippyButton";
import SlippyModal from "../Slippy/SlippyModal";
import SlippySpinner from "../Slippy/SlippySpinner";

class Estabelecimento extends Component {
  constructor() {
    super();
    this.state = {
      isModalAgendaOpen: false,
      isModalConfirmaPreco: false,
      isModalAguardandoConfirmacao: false,
      isModalConfirmacaoOk: false
    }
  }

  componentDidMount() {
    console.log(this.props.history)
  }

  render() {
    return (
      <div>
        <section className="Estabelecimento__banner" style={{background: `url(${banner}) center / cover`}}>
          <h1>Estabelecimento</h1>
        </section>

        <section className="Estabelecimento__content">
          <section className="Estabelecimento__iconsList">
            <div className="Estabelecimento__iconWrap"><img src={bikeIcon} alt="ico"/>6</div>
            <div className="Estabelecimento__iconWrap"><img src={showerIcon} alt="ico"/>3</div>
            <div className="Estabelecimento__iconWrap"><img src={starIcon} alt="ico"/>4,8</div>
          </section>


          <SlippyButton onClick={() => {
            this.setState({isModalAgendaOpen: true})
          }}>
            RESERVAR
          </SlippyButton>


          <section className="Estabelecimento__comentarios">
            <h2>Comentários:</h2>
            <ul>
              <li>
                <img src={avatar} alt="avatar"/>
                <div>
                  <h3>Fulano</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, mollitia!</p>
                </div>
              </li>
              <li>
                <img src={avatar} alt="avatar"/>
                <div>
                  <h3>Fulano</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eveniet molestiae qui voluptas.
                    Est,
                    sequi.</p>
                </div>
              </li>
              <li>
                <img src={avatar} alt="avatar"/>
                <div>
                  <h3>Fulano</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </li>
            </ul>
          </section>
        </section>

        {this.state.isModalAgendaOpen && (
          <SlippyModal title="Reserva" canClose={true} closeModal={() => {
            this.setState({isModalAgendaOpen: false})
          }}>

            <div className="inputContainer">
              <label>
                Data
                <input type="date" className={"defaultInput"}/>
              </label>
            </div>
            <div className="inputContainer">
              <label>
                Hora
                <input type="time" className={"defaultInput"}/>
              </label>
            </div>

            <div className="inputContainer">
              <label>
                Permanência
                <input type="time" className={"defaultInput"}/>
              </label>
            </div>

            <div className="inputContainer">
              <label>
                Serviço
                <select className={"defaultInput"}>
                  <option value="">Selecione um serviço</option>
                  <option value="bike">Local para guardar Bike</option>
                  <option value="ducha">Local para tomar uma ducha</option>
                  <option value="both">Ambos os serviços</option>
                </select>
              </label>
            </div>

            <SlippyButton onClick={() => {
              this.setState({isModalAgendaOpen: false});
              this.setState({isModalConfirmaPreco: true});
            }}>
              AGENDAR
            </SlippyButton>
          </SlippyModal>
        )}


        {this.state.isModalConfirmaPreco && (
          <SlippyModal title="Confirmação do preço" canClose={true} closeModal={() => {
            this.setState({isModalConfirmaPreco: false})
          }}>

            <div className="inputContaine" style={{textAlign: 'center', marginBottom: '20px'}}>
              <b>Preço</b>
              <p>R$ 9,50</p>
            </div>

            <SlippyButton onClick={() => {
              this.setState({isModalConfirmaPreco: false});
              this.setState({isModalAguardandoConfirmacao: true});

            }}>
              Confirmar
            </SlippyButton>
          </SlippyModal>
        )}


        {this.state.isModalAguardandoConfirmacao && (
          <SlippyModal title="Aguardando confirmação ..." closeModal={
            window.setTimeout(() => {
              this.setState({isModalAguardandoConfirmacao: false});
              this.setState({isModalConfirmacaoOk: true})
            }, 1000)
          }>

            <SlippySpinner style={{margin: "0 auto"}}/>


          </SlippyModal>
        )}

        {this.state.isModalConfirmacaoOk && (
          <SlippyModal title="Confirmado com sucesso!" canClose={true} closeModal={() => {
            this.setState({isModalConfirmacaoOk: false});
            this.props.history.push('/home')
          }}>

            <img src={checkedIcon} alt="Success" style={{width: "100px", display: "block", margin: "0 auto"}}/>

          </SlippyModal>
        )}
      </div>
    )
  }
}

export default Estabelecimento
