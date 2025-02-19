const people = [
  { name: 'anna', age: 22, position: 'designer' },
  { name: 'susy', age: 29, position: 'lead' },
  { name: 'bob', age: 20, position: 'dev' },
  { name: 'john', age: 21, position: 'intern' },
]

const getAges = (person) => person.age

const ages = people.map((person) => {
  return person.age
})

console.log(ages)
console.log(getAges)
