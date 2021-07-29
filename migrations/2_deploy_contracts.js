var LibraryContract = artifacts.require("./Library.sol");

module.exports = function(deployer) {
   deployer.deploy(LibraryContract);
};
