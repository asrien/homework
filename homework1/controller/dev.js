const express = require("express")();

const dev = (req, res) => {
  res.send("I Love Dev");
};

module.exports = { dev };
