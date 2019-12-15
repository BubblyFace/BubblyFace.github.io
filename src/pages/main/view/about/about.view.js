import React, { useState } from 'react';
import { AUTHOR_INTRODUCE } from '../../../../../lib/const.js';
import { breakSentence }  from '../../../../../utils/break-sentence.js'

import './assets/about.style.css'

export function AboutView () {
  const [authorIntroduce] = useState(AUTHOR_INTRODUCE);
  let sentences = breakSentence(authorIntroduce, 2).map((sentence, index) => {
    return <div className='about-sentence' key={'sentence-' + index}>
      {sentence}
    </div>
  })
  return <div id='about'>
    {
      sentences
    }
  </div>
}