async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account BNB Balance:", (await deployer.getBalance()).toString());

  const NftContract = await ethers.getContractFactory("KryxiviaNft");
  const nftContractInstance = await NftContract.deploy("Kryxivia", "KXX", false);

  console.log("KryxiviaNft contract deployed at:", nftContractInstance.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});
