# solidity-starter

[![Build Status](https://travis-ci.org/sc-forks/metacoin.svg?branch=master)](https://travis-ci.org/sc-forks/metacoin)
[![Coverage Status](https://coveralls.io/repos/github/davy42/solidity-starter/badge.svg?branch=feature/coveralls)](https://coveralls.io/github/davy42/solidity-starter?branch=feature/coveralls)

A starter kit for solidity project. This project includes tools for easy development

## Usage

Use this project as example for configuring your project or clone/fork and change this repo.

## Commands

- `npm i` - install dependencies
- `npm run compile` - compile smart contracts
- `npm run ganache` - run ganache network
- `npm test` - run truffle tests (require launced ganache network) 
- `npm run lint` - run solhint check
- `npm run docs` - generate documentation 
- `npm run coverage` - run tests with coverage counting
- `npm run gas-report` - run tests with gas report

## Using tools:

### Truffle

Truffe is a must have for solidity development. This tools makes compiling, deploying and testing yeasier.

#### usage

```sh
# install
npm i -g truffle

# init
truffle init

# Run
truffle compile
truffle test 
```

#### links

- [Official site](https://www.trufflesuite.com/truffle)
- [Official repo](https://github.com/trufflesuite/truffle)

### Ganache-cli

Ganache is a easy way to launch ethereum node for deploying and testing your dapp.

#### usage

```sh
# install
npm i -g ganache-cli

# Run
ganache-cli
```
#### links

- [Official site](https://www.trufflesuite.com/ganache)
- [Official repo](https://github.com/trufflesuite/ganache-cli)

### Solhint

Linter is a useful tool that analyzes code, check on style guide, errors and bugs.
Solhint includes a lot of style rules, security rules and best practice.

#### usage

```sh
# install
npm i -g solhint

# init
init-config

# run
solhint "contracts/**/*.sol"
```

[Official site](https://protofire.github.io/solhint/)
[Official repo](https://www.trufflesuite.com/ganache)

### OpenZeppelin test-helpers

OpenZeppelin test-helpers is a very useful utils for writing tests.

#### usage

```sh
# install
npm i -D @openzeppelin/test-helpers
```

Usage example see [here](https://github.com/davy42/solidity-starter/blob/master/test/%D1%81ontract_test.js)

### links

- [Official site](https://docs.openzeppelin.com/test-helpers/api)
- [Official repo](https://github.com/OpenZeppelin/openzeppelin-test-helpers)

### Gas reporter

Solidity gas reporter is a tools for calculating the used gas during the deployment and testing. 

#### usage
```sh
# istall
npm i -D eth-gas-reporter
```

add `eth-gas-reporter` as reporter to mocha config in truffle config file:

```js
/* truffle-config.js */
module.exports = {
  networks: { ... },
  mocha: {
    reporter: 'eth-gas-reporter'
  }
};
```

#### links

- [Official repo](https://github.com/cgewecke/eth-gas-reporter)

### Solidity coverage

#### usage
```sh
# install
npm i -D solidity-coverage

# run
truffle run coverage
```

before running add this package to plugin array in truffle config file:

```js
module.exports = {
  networks: {...},
  plugins: ["solidity-coverage"]
}
```

#### links

- [Official repo](https://github.com/sc-forks/solidity-coverage)


### Solidity docgen

Docgen is a tool for creating documentation based on [NatSpec Format](https://solidity.readthedocs.io/en/develop/natspec-format.html)

#### usage
```sh
# install
npm i solidity-docgen

# run
solidity-docgen
```

#### links

- [Official repo](https://github.com/OpenZeppelin/solidity-docgen)

### Husky

Husky can prevent bad git commit, git push and more.

#### usage
```sh
# install
npm i -D husky
```

configure `package.json`
```json
{
    "husky": {
        "hooks": {
            "pre-commit": "npm test",
      "pre-push": "npm test",
      "...": "..."
    }
  }
}
```

#### links

- [Official repo](https://github.com/typicode/husky)
