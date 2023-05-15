//약 30분 이상 왜 안되는지 보고 모듈에 문제가 생긴걸 알아 처음부터 다시 설치한 망할 모듈이 또 고장나 뭔지 확인해보니 package.json이 잘못되었다고 해서 그냥 다른 파일에 새로 만든 과제...(쉽지 않다)
const express = require("express")();
const n = require("./controller/non");
const h = require("./controller/hello");
const d = require("./controller/dev");

const host = 8000;

express.get("/", n.non);
express.get("/hello", h.hello);
express.get("/dev", d.dev);

express.listen(host, () => {
  console.log(`contect!!!!!!!!!! ${host}`);
});
