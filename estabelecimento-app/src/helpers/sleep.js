/**
 * Aguarda o tempo definido antes de resolver a promessa.
 * @param {number} time Tempo em ms.
 * @returns {Promise.<void>}
 */
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default sleep;
