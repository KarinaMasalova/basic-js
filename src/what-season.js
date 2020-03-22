module.exports = function getSeason(date) {
  if(date == undefined) {
    return 'Unable to determine the time of year!';
  }

  if(!date.getUTCMilliseconds()) { throw new Error; }

  let curMonth = date.getMonth() + 1;

  if((curMonth >= 1 && curMonth <= 2) || curMonth == 12) { return 'winter'; }
  if(curMonth >= 3 && curMonth <= 5) { return 'spring'; }
  if(curMonth >= 6 && curMonth <= 8) { return 'summer'; }
  if(curMonth >= 9 && curMonth <= 11) { return 'autumn'; }
};