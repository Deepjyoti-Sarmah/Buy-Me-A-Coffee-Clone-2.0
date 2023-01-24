const hre = require("hardhat");
const abi = require("../artifacts/contracts/BuyMeCoffee.sol/BuyMeCoffee.json");

async function getBalance(provider, address) {
    const balanceBigInt = await provider.getBalance(address);
    return hre.ethers.utils.formatEther(balanceBigInt);
}

async function main() {
    //get the contract that has been deployed to Goerli.
    const contractAddress = "0x892D9E375934Bf0438EaE0503b2001EB30107b88";
    const contrcatABi = abi.abi;

    //Get the node connection and wallet connection.
    const provider = new hre.ethers.providers.AlchemyProvider("goerli", process.env.GOERLI_API_KEY);

    // Ensure that signer is the SAME address as the original contract deployer,
    // or else this script will fail with an error.
    const signer = new hre.ethers.Wallet(process.env.PRIVATE_KEY, provider);

    //Instantiate connected contract
    const buyMeCoffee = new hre.ethers.Contract(contractAddress, contrcatABi, signer);

    //check starting balances
    console.log("current balance of owner:", await getBalance(provider, signer.address), "ETH");
    const contractBalance = await getBalance(provider, buyMeCoffee.address);
    console.log("current balance of contrcat:", await getBalance(provider, buyMeCoffee.address));

    // Withdraw funds if there are funds to withdraw.
    if(contractBalance !== "0.0"){
        console.log("withdrawing funds..");
        const withdrawTxn = await buyMeCoffee.withdrawTips();
        await withdrawTxn.wait();
    } else {
        console.log("no funds to withdraw!");
    }

    //check ending balance.
    console.log("current balance of owner: ", await getBalance(provider, signer.address));

}

// We recommend this pattern to be able to use async
//await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });