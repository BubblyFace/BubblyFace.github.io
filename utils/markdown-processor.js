
const md = require('markdown-it')();

module.exports = function(input) {

  return md.render(input);
}