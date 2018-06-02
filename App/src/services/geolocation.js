import sleep from '../helpers/sleep';

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
 * Assiste a geolocalização do usuário.
 * @param {function(position: Position)} fn Função executada no intervalo definido.
 * @param {number} time Intervalo das execuções, em ms.
 * @returns {number} ID do watcher. Deve ser usado para finalizar o watcher.
 */
function watchPosition (fn, time = 8 * SECOND) {
  return window.setInterval(async () => {
    const position = await getPosition();
    return fn(position);
  }, time);
}

/**
 * Cancela o watcher pelo ID.
 * @param {number} watcher ID do watcher que deve ser finalizado.
 */
function clearWatcher (watcher) {
  window.clearInterval(watcher);
}

export { initialize, getPosition, watchPosition, clearWatcher };
