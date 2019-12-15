const input = `.more {
  background: #FFFFFF;
  box-shadow: 0px 0.6rem 0.7rem 0px #f1f1f1;
  border: 0.05rem solid #E1E1E1;
  border-radius: .7rem;
  padding-bottom: 2rem;
  margin-top: 1.5rem;
}
.title {
  font-size: 1.9rem;
  font-weight: bold;
  color: #333;
  height: 2.6rem;
  line-height: 2.6rem;
  padding: 1.5rem;
}
.item {
  display: inline-block;
  width: 25%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 2.5rem;
}
.item:nth-child(n+3) {
  margin-bottom: 0;
}
.item img {
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 5.5rem;
  background-color: #ccc;
  margin-bottom: 0.5rem;
}
.item .subTitle {
  font-weight: bold;
  font-size: 1.3rem;
  color: #111111;
  height: 1.85rem;
  line-height: 1.85rem;
}
.item .desc {
  font-size: 1.1rem;
  color: #bbb;
  height: 1.5rem;
  line-height: 1.5rem;
}

`

function cssTransform(currentUnit, targetUnit, input, scale) {
  let cRegS = /(\-|\+)?\d+(\.\d+)?rem/g
  let a = input.replace(cRegS, (str) => {
    let [number] = str.split('rem');
    return number * 20 + 'rpx'
  })

  return a
}

let a = cssTransform('rem', 'rpx', input, 20);

debugger