const fse = require('fs-extra');
const path = require('path');
const md = require('markdown-it')();
const outputPath = path.join(__dirname, '../public/md_output')


getMarkDown('../public/markdown/webGL/1.md').then(result => {
  let { fileName: outputName, data: outputData } = result;
  fse.writeFile(path.join(outputPath, outputName + '.mdo'), outputData);
})


async function getMarkDown (filePath){
  let mdFileRaw =  await fse.readFile(path.join(__dirname, filePath));
  let mdFileString = mdFileRaw.toString();
  let mdContent = '';
  try {
    mdContent = md.render(mdFileString);
  } catch (error) {
    new Error(error); 
  }
  return {
    fileName: path.basename(filePath, '.md'),
    data: mdContent
  }
}