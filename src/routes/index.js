const express = require("express");
const router = express.Router();
const ShortUrl = require("../models/links");

router.get("/", async (req, res) => {
  const shortUrls = await ShortUrl.find();
  res.render("index", { shortUrls });
});

router.post("/shortUrls", async (req, res) => {
  await ShortUrl.create({ longURL: req.body.longURL });

  res.redirect("/");
});

router.get("/:shorturl", async (req, res) => {
  let { shorturl } = req.params;

  let shortLink = await ShortUrl.findOne({ shortURL: shorturl });

  shortLink.clicks++;
  shortLink.save();

  res.redirect(shortLink.longURL);
});

module.exports = router;
