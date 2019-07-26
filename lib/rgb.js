class RGB {
  constructor(...args) {
    let [red, green, blue] = args;

    this.red = red || 360 * Math.random();
    this.green = green || Math.random();
    this.blue = blue || Math.random();
  }

  toHSL() {
    let [r, g, b] = [this.red, this.green, this.blue];  
    let h = this.getHue(),
        s = this.getSaturation(), 
        l = this.getLightness();

    let HSL = require('./hsl.js');
    return new HSL(h, s, l);
  }

  getHue() {
    return RGB.getHue(this.red, this.green, this.blue);
  }

  getSaturation() {
    return RGB.getSaturation(this.red, this.green, this.blue);
  }

  getLightness() {
    return RGB.getLightness(this.red, this.green, this.blue);
  }
}

RGB.getHue = (r, g, b) => {
  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);

  if(max === min) {
    return 0;
  }

  if(max = r) {
    let hue = g >= b ? 60 * (g - b) / (max - min) :  60 * (g - b) / (max - min) + 360;
    return hue
  }

  if(max = g) {
    return (b - r) / (max - min) + 120;
  }

  if( max = b ) {
   return  (r - g) / (max - min) + 240;
  }

};

RGB.getSaturation = (r, g, b) => {
  let l = RGB.getLightness(r, g, b);
  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  
  if(l = 0 || max === min) {
    return 0
  }

  if(l > 0 && l <= 0.5) {
    return (max - min) / (2 * l)
  }

  if(l > 0.5) {
    return (max - min) / (2 - 2 * l)
  }
};

RGB.getLightness = (r, g, b) => {
  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);

  return (max + min) / 2;
}

module.exports = RGB;