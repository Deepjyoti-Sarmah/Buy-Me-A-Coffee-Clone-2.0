// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract BuyMeCoffee is Ownable{

    event NewDonate(address indexed tipper, uint256 value, string name, string messsage);

    struct Donate{
        address tipper;
        uint256 value;
        string name;
        string message;
        uint256 timestamp;
    }

    Donate[] donates;

    // Address of contract deployer. Marked payable so that
    // we can withdraw to this address later.
    // address payable owner;

    // constructor(){
    //     // Store the address of the deployer as a payable address.
    //     // When we withdraw funds, we'll withdraw here.
    //     owner = payable(msg.sender);
    // }

    // Buys a tea for the contract owner.
    // _name name of the tea buyer
    // _message a nice message from the tea buyer

    function buyCoffee(string memory _name, string memory _message) public payable {
        
        require(msg.value > 0, "Can't buy a coffee with no ether");

        donates.push(Donate(msg.sender, msg.value, _name, _message, block.timestamp));

        console.log(
            "Donated %s by %s with message: %s",
            msg.value,
            _name,
            _message
        );

        emit NewDonate(msg.sender, msg.value, _name, _message);

    } 

    // Returns all donates to a user.

    function getDonners() public view returns(Donate[] memory) {
        return donates;
    }

    //send the entire balance stored in this contract to the owner
    function withdrawTips() public  onlyOwner{
        // Global variable msg.sender can be used for
        console.log(
            "Withdrawing %s wei from %s to %s",
            address(this).balance,
            address(this),
            msg.sender
        );

        (bool success, ) = msg.sender.call{value: address(this).balance}("");
        require(success, "Withdraw failed");
    }
}