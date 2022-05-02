const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 const getEmailDomain = email => {
  let emailDomain = null;
  const pos = email.search('@');
  if (pos > 0) {
    emailDomain = email.slice(pos+1);
  }
  return emailDomain;
 };

module.exports = {
  getEmailDomain
};
