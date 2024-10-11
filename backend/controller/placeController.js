const pinata = require("../config/pinata");
const { places } = require("../db/data.json");
const PATH = require("path");

const IMAGE_DIR = PATH.join(__dirname, "../images");

const getPlaces = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Fetched places successfully",
    data: places,
  });
};

const getPlaceById = async (req, res) => {
  const { id } = req.params;
  const data = places.find((p) => p.id === +id);
  res.status(200).json({
    success: true,
    message: `Fetched place of ${id} successfully`,
    data,
  });
};

const getImageByCID = async (req, res) => {
  const { cid } = req.params;
  const options = Object.fromEntries(new URLSearchParams(req.query));
  try {
    //GOES TO PINATA AND FETCH it BACK..create a binary and res.send to the client
    // const image = await pinata.gateways.get(cid).optimizeImage(options);
    // const buffer = Buffer.from(await image.data.arrayBuffer());
    // res.set("Content-Type", image.contentType);
    // res.status(200).send(buffer);

    //FOR DEV PURPOSES... I have ONLY 7000 of the 10000 requests available...
    res.set("Content-Type", "image/jpeg");
    const IMAGE = PATH.join(IMAGE_DIR, `${cid}.jpg`);
    res.status(200).sendFile(IMAGE);
  } catch (error) {
    if (error instanceof RangeError) {
      return res.status(500).json({
        success: false,
        message: "The requested image was too big",
      });
    }
    if (error instanceof TypeError) {
      return res.status(500).json({
        success: false,
        message: "The requested image seems to be corrupted",
      });
    }
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getPlaces,
  getPlaceById,
  getImageByCID,
};
