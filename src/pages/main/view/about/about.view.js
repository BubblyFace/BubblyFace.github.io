import React, { useState } from "react";
import { AUTHOR_INTRODUCE } from "../../../../../lib/const.js";
import * as breakSentence from "../../../../../utils/break-sentence.js"



export function AboutView () {
  const [ authorIntroduce ] = useState(AUTHOR_INTRODUCE);
  let sentences = breakSentence.default(authorIntroduce, 2).map((sentence, index) => {
    return <div class="about-sentence" key="{'sentence-' + index}">
        {sentence}
      </div>
    })
  return <div id="about">
      {
        sentences
      }
  </div>
}