'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styles = sourceString
    .trim()
    .split(';')
    .filter(Boolean)
    .map((style) => style.split(':'))
    .filter((style) => style[1] !== undefined)
    .map(([key, value]) => [key.trim(), value.trim()])
    .filter(([key, value]) => key.length > 0 && value.length > 0);

  return Object.fromEntries(styles);
}

module.exports = convertToObject;
