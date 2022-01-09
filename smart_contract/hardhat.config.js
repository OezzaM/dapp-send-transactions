require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: process.env.API_KEY_ALCHEMY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
