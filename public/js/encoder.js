let errorArray = '%D0%C2%CC%EC%B5%D8%B8%BD%BD%FC%B5%C4'.split('%'); 
let ba = [];
let buffer = [];

let decoder = new TextDecoder();

for (let i = 1; i <= errorArray.length; i++ ) {
  buffer.push (parseInt(errorArray[i], 16));
  if(buffer.length === 3) {
    let ua =  new Uint8Array(3);
    ua.set(buffer)
    ba.push(ua);
    debugger
    buffer = [];
  } 
}
 
console.log(...ba.map(item => decoder.decode(item)));
