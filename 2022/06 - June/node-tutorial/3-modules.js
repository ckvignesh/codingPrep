const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

console.log(data.singlePerson.name)
console.log(sayHi)
console.log(names)

sayHi('test')
sayHi(names.test1)
