function RGB(...args) {
  let [red, green, blue] = args;

  this.red = red || 360 * Math.random();
  this.green = green || Math.random();
  this.blue = blue || Math.random();

  return this
}

module.exports = RGB;