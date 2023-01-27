const { expect } = require("chai");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { ethers } = require("hardhat");

describe("Buy me coffee contract", function () {
  const tip = { value: ethers.utils.parseEther("1") };
  const oneEther = ethers.utils.parseEther("1");

  async function deployBuyMeCoffee() {
    // Get the ContractFactory and Signers.
    const BuyMeCoffee = await ethers.getContractFactory("BuyMeCoffee");
    const buymeCoffee = await BuyMeCoffee.deploy();
    await buymeCoffee.deployed();
    const contractAddress = buymeCoffee.address;

    const [owner, tipper1, tipper2, tipper3] = await ethers.getSigners();

    return { buymeCoffee, contractAddress, owner, tipper1, tipper2, tipper3 };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { buymeCoffee, owner } = await loadFixture(deployBuyMeCoffee);

      expect(await buymeCoffee.owners()).to.equal(owner.address);
    });
  });

  describe("Transactions", function () {
    it("Should tip", async function () {
      const { buymeCoffee, contractAddress, tipper1, tipper2, tipper3 } =
        await loadFixture(deployBuyMeCoffee);

      await expect(
        await buymeCoffee.connect(tipper1).buyCoffee("Jake", "Nice job", tip)
      ).to.changeEtherBalances(
        [tipper1, contractAddress],
        [(-oneEther).toString(), oneEther.toString()]
      );

      await expect(
        await buymeCoffee.connect(tipper2).buyCoffee("Caleb", "Thanks!", tip)
      ).to.changeEtherBalances(
        [tipper2, contractAddress],
        [(-oneEther).toString(), oneEther.toString()]
      );

      await expect(
        await buymeCoffee.connect(tipper3).buyCoffee("Monica", "Cool", tip)
      ).to.changeEtherBalances(
        [tipper3, contractAddress],
        [(-oneEther).toString(), oneEther.toString()]
      );

      expect(await ethers.provider.getBalance(contractAddress)).to.equal(
        ethers.utils.parseEther("3")
      );
    });

    it("Should emit events", async function () {
      const { buymeCoffee, tipper1, tipper2, tipper3 } = await loadFixture(
        deployBuyMeCoffee
      );

      await expect(
        await buymeCoffee.connect(tipper1).buyCoffee("Jake", "Nice job", tip)
      )
        .to.emit(buymeCoffee, "NewDonate")
        .withArgs(tipper1.address, oneEther, "Jake", "Nice job");

      await expect(
        await buymeCoffee.connect(tipper2).buyCoffee("Caleb", "Thanks!", tip)
      )
        .to.emit(buymeCoffee, "NewDonate")
        .withArgs(tipper2.address, oneEther, "Caleb", "Thanks!");

      await expect(
        await buymeCoffee.connect(tipper3).buyCoffee("Monica", "Cool", tip)
      )
        .to.emit(buymeCoffee, "NewDonate")
        .withArgs(tipper3.address, oneEther, "Monica", "Cool");
    });

    it("Should withdraw", async function () {
      const { buymeCoffee, contractAddress, owner, tipper1 } =
        await loadFixture(deployBuyMeCoffee);

      await buymeCoffee.connect(tipper1).buyCoffee("Jake", "Nice job", tip);
      const balaceAfterTip = await ethers.provider.getBalance(contractAddress);
      expect(balaceAfterTip).to.equal(oneEther);

      await expect(await buymeCoffee.withdrawTips()).changeEtherBalances(
        [contractAddress, owner],
        [(-oneEther).toString(), oneEther.toString()]
      );

      const balanceAfterWithdraw = await ethers.provider.getBalance(
        contractAddress
      );
      expect(balanceAfterWithdraw).to.equal(0);
    });

    it("Should revert withdraw", async function () {
      const { buymeCoffee, tipper1 } = await loadFixture(deployBuyMeCoffee);

      await expect(
        buymeCoffee.connect(tipper1).withdrawTips()
      ).to.be.revertedWith("Ownable: caller is not the owner");
    });
  });
});
