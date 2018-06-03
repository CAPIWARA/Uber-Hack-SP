import GoogleMap from 'google-map-react';
import React, { Component } from 'react';
import SlippySpinner from '../Slippy/SlippySpinner';
import LocationMarker from './LocationMarker';

class LocationMap extends Component {
  static defaultProps = {
    center: null,
    isLoading: true,
    establishments: []
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

    const center = this.toCenter(this.props.center);

    return (
      <GoogleMap
        center={ center }
        bootstrapURLKeys={{
          key: 'AIzaSyCf1IZBBiC3tgQfMeDFItoe1eKeMYgFiYw',
          language: 'pt-BR'
        }}
        // defaultCenter={ center }
        defaultZoom={ 14 }
      >
        <LocationMarker { ...center } isCurrent />

        {
          this.props.establishments.map((establishment) => (
            <LocationMarker
              key={establishment.id}
              {...this.toCenter(establishment)}
            />
          ))
        }
      </GoogleMap>
    );
  }
}

export default LocationMap;
