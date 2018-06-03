import './LocationForm.css';
import React, { Component } from 'react';
import LocationOptions from './LocationOptions';
import LocationIcon from '../../assets/icons/location.png';
import { getLocationsByAddress } from '../../services/geolocation';
import SlippySpinner from '../Slippy/SlippySpinner';

class LocationForm extends Component {
  state = {
    address: '',
    locations: [],
    isLoading: false
  };

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ isLoading: true });
    this.setState({
      isLoading: false,
      locations: await getLocationsByAddress(this.state.address)
    });
  };

  onSelect = (location) => {
    this.setState({
      address: location.address,
      locations: []
    });

    if (typeof this.props.onChange !== 'function')
      return;

    this.props.onChange(location);
  }

  onChange = (event) => {
    const address = event.target.value;
    this.setState({
      address,
      locations: []
    });
  }

  render () {
    const isOptionsVisible = !!(this.state.locations.length);

    return (
      <form className="LocationForm" onSubmit={ this.onSubmit }>
        <div className="LocationForm__search">
          <img className="LocationForm__icon" src={ LocationIcon } alt="Ícone de Pesquisa" />
          <span className="LocationForm__pipe"></span>
          <input
            className="LocationForm__entry"
            type="search"
            value={ this.state.address }
            placeholder="Pesquisar"
            onChange={ this.onChange }
          />

          {
            this.state.isLoading && (
              <SlippySpinner className="LocationForm__spinner" />
            )
          }

          {
            isOptionsVisible && (
              <LocationOptions
                locations={ this.state.locations }
                onSelect={ this.onSelect }
              />
            )
          }
        </div>
      </form>
    );
  }
}

export default LocationForm;
