const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const VALUE = 0.693;

module.exports = function dateSample(sampleActivity) {
  let k = VALUE / HALF_LIFE_PERIOD;
  let convertToNum = parseFloat(sampleActivity);

  if(typeof sampleActivity == 'string' && convertToNum < MODERN_ACTIVITY && convertToNum > 0) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / convertToNum) / k);
  } else {
    return false;
  }
};