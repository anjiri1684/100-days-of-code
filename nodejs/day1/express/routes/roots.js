const express = require("express");
const router = express.Router();
const path = require("path");

router.get("^/$|index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

router.get("^/about$|about.html", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "..", "about.html"));
});
router.get("/old-page", (req, res) => {
  res.redirect(301, "/new-page.html");
});

module.exports = router;
