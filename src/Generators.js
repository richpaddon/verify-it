const Random = require('random-js')
const FunctionEnumerator = require('./util/FunctionEnumerator')
const StringGenerators = require('./generators/StringGenerators')
const NumericGenerators = require('./generators/NumericGenerators')
const CombinationGenerators = require('./generators/CombinationGenerators')

const random = new Random(Random.engines.mt19937().autoSeed())
const stringGenerators = new StringGenerators(random)
const numericGenerators = new NumericGenerators(random)
const combinationGenerators = new CombinationGenerators(random, 10)

const generators = [
  stringGenerators,
  numericGenerators,
  combinationGenerators
]

generators.forEach((generator) => {
  FunctionEnumerator.enumerate(generator).forEach((name) => {
    module.exports[name] = generator[name]
  })
})
