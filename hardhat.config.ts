import { HardhatUserConfig, task } from 'hardhat/config';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';
import 'solidity-coverage';
import '@openzeppelin/hardhat-upgrades';
import '@nomiclabs/hardhat-etherscan';

const DEFAULT_MNEMONIC = 'test test test test test test test test test test test junk';

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.20'
      },
      {
        version: '0.8.16'
      }
    ]
  },
  networks: {
    // main: {
    //   chainId: 137,
    //   url: `${process.env.MAIN_RPC_URL}`,
    //   accounts: [`0x${process.env.MAIN_PRIVATE_KEY}`],
    //   gasPrice: 200000000000
    // },
    // mumbai: {
    //   chainId: 80001,
    //   url: `${process.env.MUMBAI_RPC_URL}`,
    //   accounts: [`0x${process.env.MUMBAI_PRIVATE_KEY}`]
    // },
    amoy: {
      chainId: 80002,
      // url: `https://polygon-amoy.g.alchemy.com/v2/eaweGMRJOk9Dkxd7ruaIFiiIYK5v6a4K`,
      url: `https://rpc-amoy.polygon.technology/`,
      accounts: [`9c77c35303ae22d436f542b9a814a9d448528f2f946770bdf3945a65c8c5cb41`]
    },
    localhost: {
      url: 'http://127.0.0.1:8545',
      accounts: {
        mnemonic: DEFAULT_MNEMONIC,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20
      }
    }
  },
  gasReporter: {
    currency: 'USD',
    coinmarketcap: process.env.COINMARKETCAP_KEY,
    enabled: !!process.env.REPORT_GAS,
    token: 'MATIC'
  }
};

export default config;
