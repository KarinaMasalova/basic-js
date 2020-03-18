module.exports = function createDreamTeam(members) {
  if(!members) return false;

  let array = [];

  for(let i = 0; i < members.length; i++) {
    if(typeof members[i] === 'string') {
      array.push(members[i].trim().charAt(0).toUpperCase());
    }
  }
  return array.sort().join('');
};