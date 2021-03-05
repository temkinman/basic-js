const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports =
function dateSample(sampleActivity) {
  if ( arguments === 0 || typeof sampleActivity !== 'string' || sampleActivity === '' || isNaN(parseInt(sampleActivity)) || sampleActivity <= 0) {
    return false;
  }
  const elTime = Math.log(MODERN_ACTIVITY / sampleActivity);

  if(elTime < 0) {
    return false;
  }
  const k = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(elTime / k);
}
