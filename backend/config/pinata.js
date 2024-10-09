const { PinataSDK } = require("pinata-web3");

const pinata = new PinataSDK({
  pinataJwt: process.env.JWT,
  pinataGateway: "gray-accused-junglefowl-503.mypinata.cloud",
  pinataGatewayKey: "iQOtQAzruhuUI2L6QNPuyjPreh66Cab4aSed5hN-sTMdkDZmKTwgIdSV3IWjNtD5",
});

module.exports = pinata;
