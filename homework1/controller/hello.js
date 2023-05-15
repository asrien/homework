const express = require("express")();

const hello = (req, res) => {
  res.send("Hello World! My name is Seo Dong Bin!");
};

module.exports = { hello };
