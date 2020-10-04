---
hero:
  title: Bubblyface Blog
  desc: 一个小站关于一名想可持续发展的前端研发工程师
  action:
    - text: About
      link: /about
footer: © Copyright 2020 ~ 2020 by shwBubbly
---

## Bubblyface

```javascript
import { existSolution, allSkillsYouHave, askOther, bypass } from 'your-head';

const solveProblem = problem => {
  let solution;

  // step1
  solution = existSolution.find(problem);

  // step2
  solution = allSkillsYouHave.find(problem);

  // step3
  try {
    askOther.find(problem);
  } catch (e) {
    log('not ask him again');
  }

  // if do not find a solution, save your time
  return solution || bypass(problem);
};

export default solveProblem;
```
