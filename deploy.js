const HDWalletProvider = require("@truffle/hdwallet-provider")
const Web3 = require('web3')
const { interface, bytecode } = require('./compile')

const provider = new HDWalletProvider(
    'box hip drive end model invest drastic shadow jealous inmate health cook',
    'https://sepolia.infura.io/v3/566ab328f7734d14b16c5d0520a722dc'
)

const web3 = new Web3(provider)

const deploy = async () => {
    const accounts = await web3.eth.getAccount()
    console.log("Attempting to deploy from ", accounts[0])
    const vote = await new web3.eth.Contract(JSON.parse(interface)).deploy({data:bytecode}).send({from:accounts[0], gas:'1000000'})
    console.log("contract deployed ", vote.options.address)
    provider.engine.stop()
}

deploy()
