/**
 * @desc 根据等级生成段落
 * @param { String } paragraph 
 * @param { Number } level // 1 split with '.'; 2 spilt with ',' and '.'
 */
exports.breakSentence = (paragraph, level) => {

  let sentenceArr = [];

  sentenceArr = paragraph.split('.')

  if(level === 2) {
    for(let i = 0; i < sentenceArr.length; i ++ ) {
      let sentence = sentenceArr[i];
      if(sentence.indexOf(',') !== -1) {
        let _subSenceArr = sentence.split(',')
        sentenceArr = [].concat(sentenceArr.slice(0, i), _subSenceArr, sentenceArr.slice(i + 1, sentenceArr.lengthds))
      }
    }
  }
  return sentenceArr
}
