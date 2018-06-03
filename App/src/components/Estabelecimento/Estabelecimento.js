import './Estabelecimento.css';
import React, {Component} from 'react';
import banner from '../../assets/images/banner-smartfit.jpg';
import avatar from '../../assets/images/profile-image.jpeg';
import bikeIcon from '../../assets/icons/bike-parking.svg';
import showerIcon from '../../assets/icons/showerIcon.svg';
import starIcon from '../../assets/icons/star.svg';
import SlippyButton from "../Slippy/SlippyButton";
import SlippyModal from "../Slippy/SlippyModal";


class Estabelecimento extends Component {
  constructor() {
    super();
    this.state = {isModalOpen: false}
  }

  render() {
    const {children} = this.props;

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
            this.setState({isModalOpen: true})
          }}>
            AGENDAR
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

        {this.state.isModalOpen && (
          <SlippyModal title="Agendamento" closeModal={()=>{this.setState({isModalOpen: false})}}>

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

            <SlippyButton onClick={() => {
              this.setState({isModalOpen: false})
            }}>
              AGENDAR
            </SlippyButton>
          </SlippyModal>
        )}
      </div>
    )
  }
}

export default Estabelecimento
