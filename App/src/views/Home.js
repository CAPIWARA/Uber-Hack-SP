import './Home.css';
import React, {Component} from 'react';
import * as geolocation from '../services/geolocation';
import LocationForm from '../components/Location/LocationForm';
import LocationMap from '../components/Location/LocationMap';

export default class Home extends Component {
  state = {
    center: null,
    isLoading: false
  };

  constructor (props) {
    super (props);

    this.initialize();
  }

  async initialize () {
    await geolocation.initialize();

    this.setState({
      center: await geolocation.getPosition(),
      isLoading: false
    });
  }

  render() {
    return (
      <div className="Home">
        <LocationForm
          className="Home__form"
          onChange={ (center) => this.setState({ center }) }
        />

        <LocationMap
          center={ this.state.center }
          isLoading={ this.state.isLoading }
        />
      </div>
    );
  }
}
