import React, {Component} from 'react';
import SlippyButton from '../components/Slippy/SlippyButton';
import SlippySpinner from '../components/Slippy/SlippySpinner';
import SearchIcon from '../assets/icons/search.png';
import { getLocationsByAddress, initialize, getPosition } from '../services/geolocation';
import LocationForm from '../components/Location/LocationForm';

function toCenter (location) {
  return {
    lat: location.latitude,
    lng: location.longitude
  };
}

export default class Home extends Component {
  state = {
    address: '',
    center: null,
    isLoading: false,
    locations: []
  };

  search = async () => {
    this.setState({ isLoading: true });
    this.setState({
      isLoading: false,
      locations: await getLocationsByAddress(this.state.address)
    });
  };

  setCenter = (location) => {
    this.setState({
      center: toCenter(location),
      locations: []
    });
  };



  render() {
    if (this.state.isLoading)
      return (
        <div>
          <SlippySpinner />
        </div>
      );

    return (
      <div style={{ width: '100%', height: '100vh' }}>
        <LocationForm />
      </div>
    );
  }
}
