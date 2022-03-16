require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');

const fs = require('fs');
var mnemonic = fs.readFileSync('./secrets.txt').toString();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",
  networks: {
    localhost: {
      url: "http://127.0.0.1:7545"
    },
    bsc_testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [`0x${mnemonic}`]
    },
    bsc_mainnet: {
      url: "https://bsc-dataseed.binance.org",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: [`0x${mnemonic}`]
    },
    eth_testnet: {
      url: "https://ropsten.infura.io/v3/5960932edaaa4313bbf4d744ba56f9bf",
      chainId: 3,
      gasPrice: 20000000000,
      accounts: [`0x${mnemonic}`]
    },
    eth_mainnet: {
      url: "https://mainnet.infura.io/v3/5960932edaaa4313bbf4d744ba56f9bf",
      chainId: 1,
      gasPrice: 90000000000,
      accounts: [`0x${mnemonic}`]
    },
    poly_testnet: {
      url: "https://polygon-mumbai.infura.io/v3/5960932edaaa4313bbf4d744ba56f9bf",
      chainId: 80001,
      gasPrice: 20000000000,
      accounts: [`0x${mnemonic}`]
    },
    poly_mainnet: {
      url: "https://polygon-mainnet.infura.io/v3/5960932edaaa4313bbf4d744ba56f9bf",
      chainId: 137,
      gasPrice: 20000000000,
      accounts: [`0x${mnemonic}`]
    }
  },
};
