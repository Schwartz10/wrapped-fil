import hre, { ethers } from "hardhat";
import { WFIL } from "../typechain-types";

async function main() {
  try {
    const contractHexAddr = "0xFF000000000000000000000000000000000004CC";
    const [signer] = await hre.ethers.getSigners();
    const WFIL = await hre.ethers.getContractFactory("WFIL");
    const contract = new ethers.Contract(
      contractHexAddr,
      WFIL.interface,
      signer
    ) as WFIL;

    const name = await contract.name();
    console.log("Name: ", name);
  } catch (err) {
    const msg = err instanceof Error ? err.message : JSON.stringify(err);
    console.error(`Error when fetching name from wfil contract: ${msg}`);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
