import { Wallet, utils } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";


// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the zkBitcoin contract`);

  // Initialize the wallet.

  const wallet = new Wallet('ENTER YOUR PRIVATE KEY HERE');

  // Create deployer object and load the artifact of the contract you want to deploy.
  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact("zkBitcoin");

  // Estimate contract deployment fee
  const greeting = "Hi there!";
  const test2 = '';
  const test3 = '3';
  const deploymentFee = await deployer.estimateDeployFee(artifact, []);


  // Deploy this contract. The returned object will be of a `Contract` type, similarly to ones in `ethers`.
  // `greeting` is an argument for contract constructor.
  const parsedFee = ethers.utils.formatEther(deploymentFee.toString());
  console.log(`The deployment is estimated to cost ${parsedFee} ETH`);

  const greeterContractZKBTC = await deployer.deploy(artifact, []);

  //obtain the Constructor Arguments
  console.log("constructor args:" + greeterContractZKBTC.interface.encodeDeploy([]));

  // Show the contract info.
  const contractAddressZKBTC = greeterContractZKBTC.address;
  console.log(`${artifact.contractName} was deployed to ${contractAddressZKBTC}`);



  console.log(`Running deploy script for the zkBitcoin contract`);



  const artifact2 = await deployer.loadArtifact("zkBitcoinAuctions");

  // Estimate contract deployment fee
  const deploymentFee2 = await deployer.estimateDeployFee(artifact2, []);


  // Deploy this contract. The returned object will be of a `Contract` type, similarly to ones in `ethers`.
  // `greeting` is an argument for contract constructor.
  const parsedFee2 = ethers.utils.formatEther(deploymentFee2.toString());
  console.log(`The deployment is estimated to cost ${parsedFee2} ETH`);

  const greeterContractAuctions = await deployer.deploy(artifact2, []);

  //obtain the Constructor Arguments
  console.log("constructor args:" + greeterContractAuctions.interface.encodeDeploy([]));

  // Show the contract info.
  const contractAddress2 = greeterContractAuctions.address;
  console.log(`${artifact2.contractName} was deployed to ${contractAddress2}`);
  console.log(`LAUNCHING NEW ERC20 0xBTC Token, subsitute 0xBTC address for it`);
  
  const artifact0xBTC = await deployer.loadArtifact("a0xbtcMock");

  // Estimate contract deployment fee
  const greeting0xBTC = "Hi there!";
  const test20xBTC = '';
  const test30xBTC = '3';
  const deploymentFee0xBTC = await deployer.estimateDeployFee(artifact0xBTC, []);

  // OPTIONAL: Deposit funds to L2
  // Comment this block if you already have funds on zkSync.
 // const depositHandle = await deployer.zkWallet.deposit({
 //   to: deployer.zkWallet.address,
  //  token: utils.ETH_ADDRESS,
 //   amount: deploymentFee.mul(2),
 // });
  // Wait until the deposit is processed on zkSync
 // await depositHandle.wait();

  // Deploy this contract. The returned object will be of a `Contract` type, similarly to ones in `ethers`.
  // `greeting` is an argument for contract constructor.
  const parsedFee0xBTC = ethers.utils.formatEther(deploymentFee0xBTC.toString());
  console.log(`The deployment is estimated to cost ${parsedFee0xBTC} ETH`);

  const greeterContract0xBTC = await deployer.deploy(artifact0xBTC, []);

  //obtain the Constructor Arguments
  console.log("constructor args:" + greeterContract0xBTC.interface.encodeDeploy([]));

  // Show the contract info.
  const contractAddress0xBTC = greeterContract0xBTC.address;
  console.log(`${artifact0xBTC.contractName} was deployed to ${contractAddress0xBTC}`);











  console.log(`Running deploy script for the LP MOCK contract, replace contractAddressLP with real contract address`);

  const artifactLP = await deployer.loadArtifact("aLPMock");

  // Estimate contract deployment fee
  const greetingLP = "Hi there!";
  const test2LP = '';
  const test3LP = '3';
  const deploymentFeeLP = await deployer.estimateDeployFee(artifactLP, []);

  // OPTIONAL: Deposit funds to L2
  // Comment this block if you already have funds on zkSync.
 // const depositHandle = await deployer.zkWallet.deposit({
 //   to: deployer.zkWallet.address,
  //  token: utils.ETH_ADDRESS,
 //   amount: deploymentFee.mul(2),
 // });
  // Wait until the deposit is processed on zkSync
 // await depositHandle.wait();

  // Deploy this contract. The returned object will be of a `Contract` type, similarly to ones in `ethers`.
  // `greeting` is an argument for contract constructor.
  const parsedFeeLP = ethers.utils.formatEther(deploymentFeeLP.toString());
  console.log(`The deployment is estimated to cost ${parsedFeeLP} ETH`);

  const greeterContractLP = await deployer.deploy(artifactLP, []);

  //obtain the Constructor Arguments
  console.log("constructor args:" + greeterContractLP.interface.encodeDeploy([]));

  // Show the contract info.
  const contractAddressLP = greeterContractLP.address;
  console.log(`${artifactLP.contractName} was deployed to ${contractAddressLP}`);











  console.log("zkBTC Contract: ", contractAddressZKBTC);
  console.log("LP Contract: ", contractAddressLP);
  console.log("0xBTC Contract: ", contractAddress0xBTC );
  console.log("Auctions: ", contractAddress2);
  


  console.log(`DEPLOY STAKING FOR TESTING`);
  // Create deployer object and load the artifact of the contract you want to deploy.
  const artifactSTAKING = await deployer.loadArtifact("zkBitcoinStaking");

  // Estimate contract deployment fee
  const greetingSTAKING = "Hi there!";
  const test2STAKING = '';
  const test3STAKING = '3';
  const deploymentFeeSTAKING = await deployer.estimateDeployFee(artifactSTAKING, [contractAddressZKBTC, contractAddressLP, contractAddress0xBTC, contractAddress2]);

  // OPTIONAL: Deposit funds to L2
  // Comment this block if you already have funds on zkSync.
 // const depositHandle = await deployer.zkWallet.deposit({
 //   to: deployer.zkWallet.address,
  //  token: utils.ETH_ADDRESS,
 //   amount: deploymentFee.mul(2),
 // });
  // Wait until the deposit is processed on zkSync
 // await depositHandle.wait();

  // Deploy this contract. The returned object will be of a `Contract` type, similarly to ones in `ethers`.
  // `greeting` is an argument for contract constructor.
  const parsedFeeSTAKING = ethers.utils.formatEther(deploymentFeeSTAKING.toString());
  console.log(`The deployment is estimated to cost ${parsedFeeSTAKING} ETH`);

  const greeterContractSTAKING = await deployer.deploy(artifactSTAKING, [contractAddressZKBTC, contractAddressLP, contractAddress0xBTC, contractAddress2]);

  //obtain the Constructor Arguments
  console.log("constructor args:" + greeterContractSTAKING.interface.encodeDeploy([contractAddressZKBTC, contractAddressLP, contractAddress0xBTC, contractAddress2]));

  // Show the contract info.
  const contractAddressSTAKING = greeterContractSTAKING.address;
  console.log(`${artifactSTAKING.contractName} was deployed to ${contractAddressSTAKING}`);



  console.log("zkBTC Contract: ", contractAddressZKBTC);
  console.log("Auctions Contract: ", contractAddress2);
  console.log("Staking Contract: ", contractAddressSTAKING);
  console.log("0xBTC Contract: ", contractAddress0xBTC );
  console.log("LP Token Contract: ", contractAddressLP);
  
console.log("FINISHED");
const stringz = "yarn hardhat verify --network zkSyncTestnet "+contractAddressSTAKING+` "`+contractAddressZKBTC+`" "`+contractAddressLP+`" "`+contractAddress0xBTC+`" "`+contractAddress2+`" --contract "contracts/zkBitcoinStaking.sol:zkBitcoinStaking"`;
console.log("FINISHED");
console.log("zkBTC Contract: ", contractAddressZKBTC);
console.log(`yarn hardhat verify --network zkSyncTestnet `,contractAddressZKBTC,` --contract "contracts/zkBitcoin.sol:zkBitcoin"`);
console.log("LP Contract: ", contractAddressLP);
console.log(`yarn hardhat verify --network zkSyncTestnet `,contractAddressLP,` --contract "contracts/aLPMock.sol:aLPMock"`);
console.log("0xBTC Contract: ", contractAddress0xBTC );
console.log(`yarn hardhat verify --network zkSyncTestnet `,contractAddress0xBTC,` --contract "contracts/a0xbtcMock.sol:a0xbtcMock"`);

console.log("Auctions: ", contractAddress2);
console.log(`yarn hardhat verify --network zkSyncTestnet `,contractAddress2,` --contract "contracts/zkBitcoinAuctions.sol:zkBitcoinAuctions"`);

console.log("Staking, zkBitcoinStaking: ", contractAddressSTAKING);
console.log(stringz);

  console.log('const LP_CONTRACT_ADDRESS = "'+ contractAddressLP + '"');
  console.log('const Staking_zkBTC_CONTRACT_ADDRESS = "'+ contractAddressSTAKING + '"');
  console.log('const zkBTC_CONTRACT_ADDRESS = "'+ contractAddressZKBTC + '"');
  console.log('const ZeroxBitcoin_addresss = "'+ contractAddress0xBTC + '"');
  console.log('const AUCTION_CONTRACT_ADDRESS = "'+ contractAddress2 + '"');
  


}
