import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

/**
 * Deploys the CheckIn contract.
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployCheckIn: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deploy } = hre.deployments;
  //const { deployer } = await hre.getNamedAccounts();
  //myAccount
  const deployer = "0x0721295db7157e4050fC906684F6B146E3161839";
  // Fetch the deployed BatchRegistry address
  //const batchRegistryDeployment = await hre.deployments.get("BatchRegistry");
  //const batchRegistryAddress = batchRegistryDeployment.address;
  const batchRegistryAddress = "0x72ccAbE6620fa94eC69569d17f18a3914BEFBFD6";
  // Deploy CheckIn
  const checkInDeployment = await deploy("CheckIn", {
    from: deployer,
    args: [batchRegistryAddress], // Pass BatchRegistry's address to the constructor
    log: true,
    autoMine: true,
  });

  console.log("\nCheckIn deployed to:", checkInDeployment.address);
};

export default deployCheckIn;

deployCheckIn.tags = ["CheckIn"];
