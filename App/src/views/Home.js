import React, {Component} from 'react';
import SlippyButton from '../components/Slippy/SlippyButton';
import SlippySpinner from '../components/Slippy/SlippySpinner';
import SearchIcon from '../assets/icons/search.png';
import { getLocationsByAddress } from '../services/geolocation';

export default class Home extends Component {
  state = {
    address: '',
    isLoading: false,
    locations: []
  };

  async search () {
    this.setState({ isLoading: true });
    this.setState({
      isLoading: false,
      locations: await getLocationsByAddress(this.state.address)
    });
  }

  render() {
    if (this.state.isLoading)
      return (
        <div>
          <SlippySpinner />
        </div>
      );

    return (
      <div style={{ width: '100%', height: '100vh' }}>
        <div>
          <input
            value={ this.state.address }
            onChange={ (e) => this.setState({ address: e.target.value }) }
          />

          {
            this.state.locations.length && (
              <ul>
                {
                  this.state.locations.map((location) => (
                    <li key={location.id}>
                      {location.address}
                    </li>
                  ))
                }
              </ul>
            )
          }

          <SlippyButton
            isOnlyIcon
            icon={ SearchIcon }
            isDisabled={ this.state.isLoading }
            onClick={ () => this.search() }
          />
        </div>
      </div>
    );
  }
}
