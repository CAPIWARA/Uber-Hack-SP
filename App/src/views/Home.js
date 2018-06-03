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
    establishments: [],
    reservas: []
  };

  constructor(props) {
    super(props);

    this.initialize();
  }

  componentDidMount() {
    fetch('https://us-central1-uber-hack-sp.cloudfunctions.net/reservations?user=0', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => this.setState({reservas: Object.values(json)}))
  }

  async initialize() {
    await geolocation.initialize();

    const center = await geolocation.getPosition();

    await this.setCenter(center);
  }

  setCenter = async (center) => {
    this.setState({isLoading: true});
    this.setState({
      center,
      isLoading: false,
      establishments: await geolocation.getNearbyEstablishments(center)
    });
  };

  render() {
    return (
      <div className="Home">
        <LocationForm
          className="Home__form"
          onChange={this.setCenter}
        />

        <div/>

        <LocationMap
          center={this.state.center}
          isLoading={this.state.isLoading}
          establishments={this.state.establishments}
        />

        {this.state.reservas.length > 0 ? (
          <SlippyNotify
            title={`${this.state.reservas.length} reseva ativa`}
            text="Clique aqui para ver mais informações"
          />
        ) : (<div/>)}

      </div>
    );
  }
}
