const ShortUrl = require("../models/links");

const findLink = async (req, res) => {
  const shortUrls = await ShortUrl.find();
  res.render("index", { shortUrls });
};

const createLink = async (req, res) => {
  await ShortUrl.create({ longURL: req.body.longURL });

  res.redirect("/");
};

const redirectLink = async (req, res) => {
  let { shorturl } = req.params;

  let shortLink = await ShortUrl.findOne({ shortURL: shorturl });

  shortLink.clicks++;
  shortLink.save();

  res.redirect(shortLink.longURL);
};

module.exports = { findLink, createLink, redirectLink };
