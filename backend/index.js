const express = require("express");
const cors = require("cors");
const {
  getPlaces,
  getPlaceById,
  getImageByCID,
} = require("./controller/placeController");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.get("/", getPlaces);
app.get("/:id", getPlaceById);
app.get("/photos/:cid", getImageByCID);

app.listen(8000, () => {
  console.log("The sever has connected");
});
