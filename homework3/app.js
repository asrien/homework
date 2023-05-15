const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const config = require("./config");
const mysql = require("mysql2");
const path = require("path");

const db = mysql.createConnection(config.dbConfig);

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true,
  })
);

const authRoutes = require("./routes/autoRoutes");
app.use("/auth", authRoutes);
app.use(express.static(path.join(__dirname, "public")));

// 홈 페이지 라우트
app.get("/", (req, res) => {
  const first = path.join(__dirname, "public", "html", "first.html");
  res.sendFile(first);
});

app.get("/login", (req, res) => {
  const login = path.join(__dirname, "public", "html", "signin.html");
  res.sendFile(login);
});

app.get("/signup", (req, res) => {
  const signup = path.join(__dirname, "public", "html", "signup.html");
  res.sendFile(signup);
});

app.get("/todo", (req, res) => {
  const todoFilePath = path.join(__dirname, "public", "html", "todo.html");
  res.sendFile(todoFilePath);
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    process.exit(1); // 연결 실패 시 앱 종료
  } else {
    console.log("Connected to MySQL server");
    // 서버 실행
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  }
});
