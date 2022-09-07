//This file tells the truffle how to move the contract onto the blockchain. It is a migration file.

const MemoryToken = artifacts.require("MemoryToken"); //importing MemoryToken artifcat into this file.

module.exports = function(deployer) {
  deployer.deploy(MemoryToken);
};


