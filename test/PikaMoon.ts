import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers,upgrades } from "hardhat";
import { PikaMoon } from "../typechain-types";
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";

const ZeroAddress = ethers.ZeroAddress; 
const toWei = (value: number) => ethers.parseEther(value.toString());
// const fromWei = (value: number) => ethers.formatEther(value);
// const now = () => Math.floor(Date.now() / 1000);

describe("Pikamoon token", function () {
  async function deployFixture() {
    const [owner, otherAccount, account2, account3] = await ethers.getSigners();
    const pikamoon = await ethers.getContractFactory("PikaMoon");

    const token = await upgrades.deployProxy(pikamoon,
      [
      "PIKAMoon",
      "PIKA",
      owner.address,
      owner.address
      ],
      { initializer: "initialize"}
      
    );
    await token.mint(otherAccount.address, toWei(5000));
    return { token, owner, otherAccount, account2, account3 };
  }
  describe("functional unit test", () => {
    let token: PikaMoon,
      owner: HardhatEthersSigner,
      otherAccount: HardhatEthersSigner,
      account2: HardhatEthersSigner,
      account3: HardhatEthersSigner;

    before(async () => {
      let fixture = await loadFixture(deployFixture);
      //@ts-ignore
      token = fixture?.token;
      owner = fixture?.owner;
      otherAccount = fixture?.otherAccount;
      account2 = fixture?.account2;
      account3 = fixture?.account3;
    });
    it("should not allow minting", async () => {
      await expect(token.connect(account2).mint(account2.address,1000)).to.be.revertedWithCustomError(token,"AccessControlUnauthorizedAccount")

    });
    it("should allow minting", async () => {
      let bal = await token.balanceOf(otherAccount.address)
      await expect(token.connect(account2).mint(account2.address,1000)).to.be.revertedWithCustomError(token,"AccessControlUnauthorizedAccount")

      await token.mint(otherAccount.address, toWei(5000));
      expect(await token.balanceOf(otherAccount.address)).to.be.equal(bal+toWei(5000));
    });
    it("should be equal to decimal 9", async () => {

      expect(await token.decimals()).to.be.equal(9);
    });
    it("should check name", async () => {
      expect(await token.name()).to.be.equal("PIKAMoon");
    });
    it("should check symbol", async () => {
      expect(await token.symbol()).to.be.equal("PIKA");
    }); 
    it("should not allow change marketing wallet", async () => {
      await expect(token.connect(account2).changeMarketingWallet(account2.address)).to.be.revertedWithCustomError(token,"AccessControlUnauthorizedAccount")
    });
    it("should not allow change ecosystem wallet", async () => {
      await expect(token.connect(account2).changeEcoSystemWallet(account2.address)).to.be.revertedWithCustomError(token,"AccessControlUnauthorizedAccount")
    });
    it("should change marketing wallet", async () => {
      expect(await token.marketingWallet()).to.be.equal(owner.address);

     await token.changeMarketingWallet(account2.address);
      expect(await token.marketingWallet()).to.be.equal(account2.address);
    });
    it("should change ecosystem wallet", async () => {
      expect(await token.ecoSystemWallet()).to.be.equal(owner.address);
   
      await token.changeEcoSystemWallet(account3.address);
      expect(await token.ecoSystemWallet()).to.be.equal(account3.address);
    });
    it("should allow transfer", async () => {
      expect(await token.balanceOf(owner.address)).to.be.equal(0);
     
     
      await expect(
        token.connect(account3).transfer(owner.address, toWei(500))
      ).to.be.reverted

     
      await expect(
        token.connect(otherAccount).transfer(owner.address, toWei(500))
      ).to.emit(token, "Transfer");
      let tax = await token
      .connect(otherAccount)
      .calculateTax(otherAccount.address, owner.address,toWei(500));
      expect(await token.balanceOf(owner.address)).to.be.equal(
        toWei(500) - tax[0]
      );
    });
    it("should allow transferFrom", async () => {
      expect(
        await token.allowance(otherAccount.address, owner.address)
      ).to.be.equal(0);
      await token.connect(otherAccount).approve(owner.address, toWei(500));
      expect(
        await token.allowance(otherAccount.address, owner.address)
      ).to.be.equal(toWei(500));
      let bal = await token.balanceOf(owner.address);
      await expect(
        token.transferFrom(otherAccount.address, owner.address, toWei(500))
      ).to.emit(token, "Transfer");
      let tax = await token
      .calculateTax(otherAccount.address, owner.address,toWei(500));
      expect(await token.balanceOf(owner.address)).to.be.equal(
        bal + toWei(500) - tax[0]
      );
    });
    it("should allow excluding from tax", async () => {
      expect(await token.isExcludeFromTax(otherAccount.address)).to.be.equal(
        false
      );
      await token.excludeFromTax(otherAccount.address, true);
      expect(await token.isExcludeFromTax(otherAccount.address)).to.be.equal(
        true
      );
    });
    it("should not allow excluding from tax", async () => {
     
      await expect(token.connect(account2).excludeFromTax(otherAccount.address, true)).to.be.revertedWithCustomError(token,"AccessControlUnauthorizedAccount")
     
    });
    it("should toggle tax", async () => {
      expect(await token.isTaxEnabled()).to.be.equal(true);
      await token.toggleTax();
      expect(await token.isTaxEnabled()).to.be.equal(false);
    });

    it("should set Automated MarketMaker Pair", async () => {
      await token.setAutomatedMarketMakerPair(owner.address,true);
      await expect(token.setAutomatedMarketMakerPair(owner.address,true)).to.be.revertedWithCustomError(token,"PairIsAlreadyGivenValue")
     
    });
    it("should not allow set Automated MarketMaker Pair", async () => {
      await expect(token.connect(account2).setAutomatedMarketMakerPair(owner.address,true)).to.be.revertedWithCustomError(token,"AccessControlUnauthorizedAccount")
     
    });

    it("should not allow toggle tax", async () => {
      await expect(token.connect(account2).toggleTax()).to.be.revertedWithCustomError(token,"AccessControlUnauthorizedAccount")
     
    });

    it("should allow burning", async () => {
      let bal = await token.balanceOf(owner.address)
      await expect(token.burn(toWei(5)))
        .to.emit(token, "Transfer")
        .withArgs(owner.address, ZeroAddress, toWei(5));
      expect(await token.balanceOf(owner.address)).to.be.equal(bal-toWei(5));
    });
    it("should calculate tax correctly",async () => {
      await token.toggleTax();
      await token.excludeFromTax(otherAccount.address, false);
      let value = toWei(500)
      let burnAmount = (value * (await token.burnTax())) / await token.feeMultiply();
      let marketingAmount = (value * await token.marketingTax()) / await token.feeMultiply();
      let ecosystemAmount = (value * await token.ecosystemTax()) / await token.feeMultiply();
      let taxAmount = burnAmount + marketingAmount + ecosystemAmount;
      let tax = await token
      .calculateTax(otherAccount.address, owner.address,toWei(500));
      expect(tax[0]).to.be.eq(taxAmount)
      
    
    })



    it("should not calculate tax if excluded",async()=>{
      await token.excludeFromTax(otherAccount.address, true);
      let tax = await token
      .connect(otherAccount)
      .calculateTax(otherAccount.address, owner.address,toWei(500));
      expect(tax[0]).to.be.eq(0)
    })


  });
});