# money-uppercase

## 1、简介
将数字转换为大写格式函数

## 2、如何使用

### 2.1 安装
```
npm i money-uppercase
```

### 2.2 使用方法

> 引入

```JavaScript
import moneyUpperCase from 'money-uppercase'
```

> 转换一个正数(支持字符串)

```JavaScript
console.log(moneyUpperCase(10304000))
// 壹仟零叁拾万零肆仟元整
console.log(moneyUpperCase('12348789000'))
// 壹佰贰拾叁亿肆仟捌佰柒拾捌万玖仟元整
console.log(moneyUpperCase('-12348789000'))
// 欠壹佰贰拾叁亿肆仟捌佰柒拾捌万玖仟元整
```

> 转换一个负数(支持字符串)

```JavaScript
console.log(moneyUpperCase(-12348789000))
// 欠壹佰贰拾叁亿肆仟捌佰柒拾捌万玖仟元整
console.log(moneyUpperCase('-12348789000'))
// 欠壹佰贰拾叁亿肆仟捌佰柒拾捌万玖仟元整
```

> 转换一个带小数(支持字符串)

```JavaScript
console.log(moneyUpperCase(12348789000.02))
// 壹佰贰拾叁亿肆仟捌佰柒拾捌万玖仟元零贰分
console.log(moneyUpperCase(-12348789000.02))
// 欠壹佰贰拾叁亿肆仟捌佰柒拾捌万玖仟元零贰分
console.log(moneyUpperCase('-12348789000.02'))
// 欠壹佰贰拾叁亿肆仟捌佰柒拾捌万玖仟元零贰分
```

> 自定义小于0时的前缀字符，默认为 "欠"

```JavaScript
console.log(moneyUpperCase(-10304000, '负'))
// 负壹仟零叁拾万零肆仟元整
```

> 其他情况

```JavaScript
console.log(moneyUpperCase())
// 零元整
console.log(moneyUpperCase(0))
// 零元整
console.log(moneyUpperCase(''))
// 零元整
```
