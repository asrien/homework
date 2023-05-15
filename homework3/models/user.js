const mysql = require("mysql");
const bcrypt = require("bcrypt");
const config = require("../config");

const db = mysql.createConnection(config.dbConfig);
db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL server");
});

exports.getUserByUsername = (username) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM users WHERE username = ?";
    db.query(query, [username], (err, results) => {
      if (err) reject(err);
      resolve(results.length > 0 ? results[0] : null);
    });
  });
};

// 유저를 생성하는 함수
exports.createUser = async (username, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO users (username, password) VALUES (?, ?)";
    db.query(query, [username, hashedPassword], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};
