/**
 * Checa se o valor é uma `string` não vazia.
 * @param {*} value
 * @returns {boolean}
 */
function isNonEmptyString (value) {
  return !!(typeof value === 'string' && value.trim());
}

export { isNonEmptyString };
