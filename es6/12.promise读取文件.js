const fs = require("fs");
const p = new Promise(function (resolve, reject) {
  fs.readFile("D:/study_workspan/前端学习/Front-Study/es6/11.promise.html", (err, data) => {
    if (err) reject(err);
    //调用resolve  可以将promise状态设置为成功
    resolve(data);
  });
});
p.then(
  function (value) {
    console.log(value.toString());
  },
  function (reason) {
    console.log("文件读取失败！");
  }
);
