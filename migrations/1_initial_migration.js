// The migrations are numbered so that the Truffle knows which one to run first. 
const Migrations = artifacts.require("Migrations");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
