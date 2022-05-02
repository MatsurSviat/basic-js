const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam (array) {

    {if(!Array.isArray(array)) 
      return false}
  

  array = array.map(function (el) {
    if(typeof el !== 'string') 
    return
    return el.trim().toUpperCase()
  });
  
    const filtered = array.filter(Boolean);
  
    const splitted = filtered.sort()
  
    const abbr = splitted.map((mate) => mate[0]).join('')
  


  return abbr
  
 }


 

module.exports = {
  createDreamTeam
};
