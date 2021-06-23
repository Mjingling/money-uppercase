import moneyUpperCase from '../src/index.js'

console.log(moneyUpperCase(10304000))
// 壹仟零叁拾万零肆仟元整
console.log(moneyUpperCase('12348789000'))
console.log(moneyUpperCase('-12348789000'))
console.log('负数')
console.log(moneyUpperCase(-12348789000))
console.log(moneyUpperCase('-12348789000'))
console.log('小数')
console.log(moneyUpperCase(12348789000.02))
// 壹佰贰拾叁亿肆仟捌佰柒拾捌万玖仟元零贰分
console.log(moneyUpperCase(-12348789000.02))
// 欠壹佰贰拾叁亿肆仟捌佰柒拾捌万玖仟元零贰分
console.log(moneyUpperCase('-12348789000.02'))
// 欠壹佰贰拾叁亿肆仟捌佰柒拾捌万玖仟元零贰分

console.log('自定义小于0时的前缀字符，默认为 "欠"')
console.log(moneyUpperCase(-10304000, '负'))
console.log(moneyUpperCase())
console.log(moneyUpperCase(0))
console.log(moneyUpperCase(''))