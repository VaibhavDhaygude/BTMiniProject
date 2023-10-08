const path = require('path')
const fs = require('fs')
const solc = require('solc')

contractPath = path.resolve(__dirname, "contracts", "voting.sol")
const source = fs.readFileSync(contractPath,'utf-8')

// module.exports = solc.compile(source, 1).contracts[':Vote']
const contract = solc.compile(source, 1)
console.log(contract)