require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

const mnemonic = process.env.MNEMONIC;
const GAS_REPORT_CONFIG = {
  colors: true,
  reporter: 'eth-gas-reporter',
  reporterOptions: {
    currency: 'USD',
    excludeContracts: ['Migrations']
  }
};
module.exports = {

  networks: {

    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },

    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${process.env.INFURA_KEY}`),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    }
  },

  plugins: ["solidity-coverage"],

  // Set default mocha options here, use special reporters etc.
  mocha: process.env.GAS_REPORT ? GAS_REPORT_CONFIG : {},

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.6.0",
      settings: {
        optimizer: {
          enabled: false,
          runs: 200
        }
      }
    }
  }
};
