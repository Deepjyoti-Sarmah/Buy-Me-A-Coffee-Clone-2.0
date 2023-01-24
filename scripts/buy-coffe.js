const hre = require("hardhat");

//return the ether balance of a given address.
async function getBalance(address){
    const balanceBigInt = await hre.ethers.provider.getBalance(address);
    return hre.ethers.utils.formatEther(balanceBigInt);
}

// Logs the Ether balances for a list of addresses.
async function printBalance(addresses) {
    let idx = 0;
    for(const address of addresses) {
        console.log(`Address ${idx} balance:`, await getBalance(address));
        idx++;
    }
}

// Logs the donners stored on-chain from coffee purchases.
async function printDonners(donner) {
    for(const doner of donner) {
        const timestamp = doner.timestamp;
        const tipper = doner.name;
        const tipperAddress = doner.tipper;
        const message = doner.message;
        const value = doner.value;
        
        console.log(`At ${timestamp}, ${tipper} (${tipperAddress}), donated: ${value}, and said: "${message}"`);
    }
}

async function main() {
    // Get the example accounts we'll be working with.
    const [owner, tipper, tipper2, tipper3] = await hre.ethers.getSigners();

    // We get the contract to deploy.
    const BuyMeCoffee = await hre.ethers.getContractFactory("BuyMeCoffee");
    const buyMeCoffee = await BuyMeCoffee.deploy();

    //Deploy the contract
    await buyMeCoffee.deployed();
    console.log("BuyMeCoffee deployed to:", buyMeCoffee.address);

    // Check balances before the coffee purchase.
    const addresses = [owner.address, tipper.address, tipper2.address, tipper3.address];
    console.log("--start--");
    await printBalance(addresses)

    //Buy the owner a few coffees
    const tip = { value: hre.ethers.utils.parseEther("1") };
    await buyMeCoffee.connect(tipper).buyCoffee("Carolina", "You're the best!", tip);
    await buyMeCoffee.connect(tipper2).buyCoffee("Vitto", "Amazing teacher", tip);
    await buyMeCoffee.connect(tipper3).buyCoffee("Kay", "I love my Proof of Knowledge", tip);


    // Check balances after the coffee purchase.
    console.log("--bought coffee--");
    await printBalance(addresses);

    // Withdraw.
    await buyMeCoffee.connect(owner).withdrawTips();

    // Check balances after withdrawal.
    console.log("== withdrawTips ==");
    await printBalance(addresses);

    // Check out the donners
    console.log("--donner--");
    const donners = await buyMeCoffee.getDonners();
    printDonners(donners);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });