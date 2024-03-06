
import { ethers,upgrades } from "hardhat";
import {tokenArgs} from "../args/Token";
async function main() {
  const PikaMoon = await ethers.getContractFactory("PikaMoon");
  const token = await upgrades.deployProxy(PikaMoon,[tokenArgs[0], tokenArgs[1],tokenArgs[2],tokenArgs[3]],{ initializer: "initialize"});

  console.log("PikaMoon", token.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
