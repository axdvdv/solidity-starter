const contract = artifacts.require('SimpleContract');
const MAINNET_ANSWER = 42;
const TESTNET_ANSWER = 42;
const DEVSNET_ANSWER = 42;

module.exports = function (deployer, network, [deepThougt]) {
    deployer.then(async () => {
        switch (network) {
            case "mainnet":
                await deployer.deploy(contract, MAINNET_ANSWER, { from: deepThougt });
                console.log(`Contract deployed on mainnet. address: ${contract.address}`);
                break;
            case "ropsten":
                await deployer.deploy(contract, TESTNET_ANSWER, { from: deepThougt });
                console.log(`Contract deployed on ropsten. Address: ${contract.address}`);
                break;
            case "develop":
            case "development":
            case "soliditycoverage":
                await deployer.deploy(contract, DEVSNET_ANSWER, { from: deepThougt });
                console.log(`Contract deployed on devnet. Address: ${contract.address}`);
                break;
            default:
                console.log(`Unknown network: ${network}. Contract did not deploy`);
                break;
        }
    });
};
