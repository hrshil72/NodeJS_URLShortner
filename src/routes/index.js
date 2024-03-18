const express = require("express");
const router = express.Router();
const ShortUrl = require("../models/links");
const { createLink, findLink, redirectLink } = require("../controllers/index");

router.get("/", findLink);

router.post("/shortUrls", createLink);

router.get("/:shorturl", redirectLink);

module.exports = router;
