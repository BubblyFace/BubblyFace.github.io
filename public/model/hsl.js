class HSL {
  constructor(...args) {
    let [hue, saturation, lightness, isComfortableColor] = args;

    this._hue = isNaN(Number(hue)) ?  360 * Math.random() : Number(hue);
    this._satuation = isNaN(Number(saturation)) ? Math.random() :  Number(saturation);
    this._lightness = isNaN(Number(lightness)) ?  Math.random(): Number(lightness);
  }

  toRGB() {
    let RGB = require('./rgb.js');
    let r, g, b;
    let h = this._hue / 360,
      s = this._satuation,
      l = this._lightness;
    let q, p;

    // satuation is zero. then r, g, b all should equals lightness in value areas [0,1];
    if (s === 0) {
      r = g = b = l;
      return new RGB(r * 255, g * 255, b * 255);
    }

    if (l >= 0.5) {  
      q = l + s - (l * s);
    } else {
      q = l * (1 + s);
    }

    p = 2 * l - q;

    r = h + 1 / 3;
    g = h;
    b = h - 1 / 3;

    [r, g, b] = [r, g, b].map(c => {
      c > 1 && (c = c - 1);
      c < 0 && (c = c + 1);

      if (c < 1 / 6) {
        c = p + ((q - p) * 6 * c);
      } else if (c >= 1 / 6 && c < 1 / 2) {
        c = q;
      } else if (c >= 1 / 2 && c < 2 / 3) {
        c = p + ((q - p) * 6 * (2 / 3 - c));
      } else {
        c = p;
      }

      return c
    })

    return new RGB(parseInt(r * 255), parseInt(g * 255), parseInt(b * 255));
  }
}

HSL.getUnifiedColors = (type, value, number) => {
  let h, s, l;
  switch (type) {
    case 'hue':
      h = value;
      break;
    case 'satuation':
      s = value;
      break;
    case 'lightness':
      l = value;
      break;
    default:
      l = value;
      break;
  }

  number = Number(number) || 1;

  let colorsArray = [];
  for (let i = 0; i < number; i++) {
    let hsl = new HSL(h, s, l);
    console.log(hsl);
    colorsArray.push(hsl.toRGB());
  }

  return colorsArray
}

console.log(HSL.getUnifiedColors('hue', 180, 5));
console.log(HSL.getUnifiedColors('satuation', 0.2, 5));
console.log(HSL.getUnifiedColors('lightness', 0.5, 5));

module.exports = HSL;