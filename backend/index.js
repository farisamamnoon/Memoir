const express = require("express");
const data = require("./db/data.json");
const pinata = require("./config/pinata");
const cors = require("cors");
const axios = require("axios");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(data);
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const result = data.places.find((p) => p.id === +id);

  try {
    // const file = await pinata.gateways.createSignedURL({
    //   cid: "bafybeic2qg66rvwametpdke2rgsxhq6qzpssvvzrj2hwtdmsfw4gldk4a4",
    //   expires: 1800,
    // });

    const data = await pinata.gateways.get(
      "QmX2s8P2wYRyHPvB2SHGjHzygdHN1LievL3Ks2rp6eG52k"
    );
    console.log(data);

    res.set("Content-Type", data.contentType);

    res.send(data.data);
  } catch (e) {
    console.error(e.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

app.listen(8000, () => {
  console.log("The sever has connected");
});
