const mysql = require("mysql2");
const config = require("../config");
const bcrypt = require("bcrypt");

const db = mysql.createConnection(config.dbConfig);

exports.signup = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required." });
  }

  // Check if the user already exists in the database
  db.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Database error" });
      }

      if (result.length > 0) {
        return res.status(400).json({ error: "Username already exists." });
      }

      // Hash the password before saving it to the database
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: "Hashing error" });
        }

        // Insert the user into the database
        db.query(
          "INSERT INTO users (username, password) VALUES (?, ?)",
          [username, hash],
          (err) => {
            if (err) {
              console.error(err);
              return res.status(500).json({ error: "Database error" });
            }

            return res.status(200).json({ message: "Signup successful." });
          }
        );
      });
    }
  );
};
