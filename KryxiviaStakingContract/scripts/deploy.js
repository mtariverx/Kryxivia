const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account BNB Balance:", (await deployer.getBalance()).toString());

  const stakingFactory = await ethers.getContractFactory("KryxiviaStaking");
  const stakingContract = await stakingFactory.deploy("0x2223bf1d7c19ef7c06dab88938ec7b85952ccd89", "0x605639FfFdBf3747A886fbFd47B159BF88263394");

  console.log("Staking contract deployed address:", stakingContract.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});