import sleep from '../helpers/sleep';
import QueryString from 'qs';

const SECOND = 1000;

/**
 * Modelo da posição.
 * @typedef {{ latitude: number, longitude: number }} Position
 */

/**
 * Obtém a localização atual do usuário.
 * @returns {Promise.<Position>} Retorna a posição do usuário.
 */
function getPosition () {
  return new Promise((resolve, reject) => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      return resolve({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    });
  });
}

/**
 * Inicializa a API de geolocalização.
 * @returns {Promise.<boolean>} `true` pra permissão garantida e `false` pra não garantida
 */
async function initialize () {
  await sleep(5 * SECOND);
  const { state } = await window.navigator.permissions.query({
    name: 'geolocation'
  });
  return (state === 'granted');
}

/**
 * Modelo de localidade.
 * @typedef {Object} Location
 * @property {string} id
 * @property {string} address
 * @property {number} latitude
 * @property {number} longitude
 */

/**
 * Transforma um retorno de geolocalização numa localidade.
 * @param {Object} geolocation
 * @returns {Location}
 */
function toLocation (geolocation) {
  return {
    id: geolocation.place_id,
    address: geolocation.formatted_address,
    latitude: geolocation.geometry.location.lat,
    longitude: geolocation.geometry.location.lng
  };
}

/**
 * Busca localidades por um endereço.
 * @param {string} address
 * @returns {Promise.<Location[]>}
 */
async function getLocationsByAddress (address) {
  const url = 'https://maps.googleapis.com/maps/api/geocode/json?'+ QueryString.stringify({
    address,
    key: 'AIzaSyCf1IZBBiC3tgQfMeDFItoe1eKeMYgFiYw',
  });

  const response = await fetch(url, { method: 'GET' });
  const { results } = await response.json();
  const locations = results.map(toLocation);
  return locations;
}

/**
 * Get nearby establishments.
 * @param {Position} position
 * @returns {Array.<Object>}
 */
async function getNearbyEstablishments ({ latitude, longitude }) {
  const url = 'https://us-central1-uber-hack-sp.cloudfunctions.net/search?' + QueryString.stringify({
    latitude,
    longitude,
    around: 3, // Kilometros
  });

  const response = await fetch(url, { method: 'GET' });

  const establishments = await response.json();
  return establishments;
}

export {
  initialize,
  getPosition,
  getLocationsByAddress,
  getNearbyEstablishments
};
