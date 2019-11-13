module.exports = {

  evolution(a, b) {
    if (a === 0) {
      return Infinity;
    }
    return this.round((100 * (b - a)) / a);
  },

  round(val) {
    return Math.round(100 * val) / 100;
  },

  wait(time, callback) {
    setTimeout(() => {
      callback(18);
    }, time);
  },

};
