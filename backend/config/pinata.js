const { PinataSDK } = require("pinata-web3");

const pinata = new PinataSDK({
  pinataJwt: process.env.JWT,
  pinataGateway: "gray-accused-junglefowl-503.mypinata.cloud",
});

module.exports = pinata;
