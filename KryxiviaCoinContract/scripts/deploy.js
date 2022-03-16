const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account BNB Balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("KryxiviaCoin");
  const token = await Token.deploy("Kryxivia Coin", "KXA");

  console.log("Kryxivia coin deployed address:", token.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});