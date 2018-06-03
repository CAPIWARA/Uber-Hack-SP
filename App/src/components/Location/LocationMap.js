import GoogleMap from 'google-map-react';
import React, { Component } from 'react';
import SlippySpinner from '../Slippy/SlippySpinner';

class LocationMap extends Component {
  defaultProps = {
    center: null,
    isLoading: true
  };

  toCenter (location) {
    return {
      lat: location.latitude,
      lng: location.longitude
    };
  }

  render () {
    if (this.props.isLoading || !this.props.center)
      return (
        <SlippySpinner />
      );


    return (
      <GoogleMap
        center={ this.toCenter(this.props.center) }
        bootstrapURLKeys={{
          key: 'AIzaSyCf1IZBBiC3tgQfMeDFItoe1eKeMYgFiYw',
          language: 'pt-BR'
        }}
        defaultCenter={ this.toCenter(this.props.center) }
        defaultZoom={ 14 }
      >

      </GoogleMap>
    );
  }
}

export default LocationMap;
