let textArray = '%D0%C2%CC%EC%B5%D8%B8%BD%BD%FC%B5%C4'.split('%');
let textArray = '%D0%C2%CC%EC%B5%D8%B8%BD%BD%FC%B5%C4'.split('%');
let ba = [];
let buffer = [];
​
let decoder = new TextDecoder('chinese');
for (let i = 1; i <= textArray.length; i ++) {
  buffer.push(parseInt(textArray[i], 16));
  if(buffer.length === 2) {
    let ua = new Uint8Array(3);
    ua.set(buffer);
    ba.push(ua);
    buffer = [];
  }
}
let out = ba.map(item => decoder.decode(item));
console.log(out)
