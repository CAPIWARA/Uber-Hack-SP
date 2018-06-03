import './Home.css';
import React, {Component} from 'react';
import * as geolocation from '../services/geolocation';
import LocationForm from '../components/Location/LocationForm';
import LocationMap from '../components/Location/LocationMap';
import SlippyNotify from "../components/Slippy/SlippyNotify";

export default class Home extends Component {
  state = {
    center: null,
    isLoading: false,
    establishments: []
  };

  constructor(props) {
    super(props);

    this.initialize();
  }

  async initialize() {
    await geolocation.initialize();

    const center = await geolocation.getPosition();

    await this.setCenter(center);
  }

  setCenter = async (center) => {
    this.setState({ isLoading: true });
    this.setState({
      center,
      isLoading: false,
      establishments: await geolocation.getNearbyEstablishments(center)
    });
  }

  render() {
    return (
      <div className="Home">
        <LocationForm
          className="Home__form"
          onChange={ this.setCenter }
        />

        {/*
          Quando o notify for verdadeiro, adicionar uma div vazia
          Por conta do flex, jutify conetnt
        */}
        <div></div>

        <LocationMap
          center={ this.state.center }
          isLoading={ this.state.isLoading }
          establishments={ this.state.establishments }
        />

        <SlippyNotify
          title="1 agendamento ativo"
          text="Clique aqui para ver mais informações"
        />
      </div>
    );
  }
}
