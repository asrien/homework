const express = require("express")();

const non = (req, res) => {
  res.send("왜 내가 하면 다 망가지는 느낌이지? 왜? 왜????");
};

module.exports = { non };
