const mongoose = require("mongoose");
const shortID = require("shortid");

mongoose.connect("mongodb://127.0.0.1:27017/urlShortner");

const shortURLSchema = new mongoose.Schema({
  longURL: {
    type: String,
    required: true,
  },
  shortURL: {
    type: String,
    required: true,
    default: shortID.generate,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("ShortUrl", shortURLSchema);
