//nodemon .\server.js  全局安装nodemon ，自动重启服务
const express = require("express");
const app = express();

// 解析 JSON 请求体
app.use(express.json()); // 解析 application/json 格式的请求体

// 解析 URL-encoded 请求体
app.use(express.urlencoded({ extended: true })); // 解析 application/x-www-form-urlencoded 格式的请求体

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500"); // 允许 'http://127.0.0.1:5500' 地址来访问服务器
  res.header("Access-Control-Allow-Methods", "GET,POST"); // 允许的请求方法
  res.header("Access-Control-Allow-Headers", "Content-Type"); // 允许的请求头
  res.header("Access-Control-Allow-Credentials", "true"); // 允许携带凭据（如 cookies
  // 处理预检请求
  if (req.method === "OPTIONS") {
    return res.sendStatus(204); // 直接返回 204 No Content
  }
  next(); //请求回来，并进行下一步的操作；
});

const port = 5000;

// 为GET请求到根URL（'/'）设置路由
app.get("/api/usm/login/:name/:password", (req, res) => {
  const name = req.params.name;
  const password = req.params.password;

  console.log("Name: ", name);
  console.log("Password: ", password);

  res.json({
    data: true,
    code: 0,
    message: "操作成功!",
  });
});

app.get("/", (req, res) => {
  res.json({
    message: "Hello, this is a mock server",
    data: {
      item1: "value1",
      item2: "value2",
    },
  });
});

app.get("/page", (req, res) => {
  res.json({
   {
      "status": 0,
      "msg": "ok",
      "data": {
          "count": 1710,
          "rows": [
              {
                  "engine": "Other browsers - hfscm",
                  "browser": "All others",
                  "platform": "-",
                  "version": "-",
                  "grade": "U",
                  "id": 1710
              },
              {
                  "engine": "Misc - uou99q",
                  "browser": "PSP browser",
                  "platform": "PSP",
                  "version": "-",
                  "grade": "C",
                  "id": 1709
              },
              {
                  "engine": "Misc - 2lv378",
                  "browser": "IE Mobile",
                  "platform": "Windows Mobile 6",
                  "version": "-",
                  "grade": "C",
                  "id": 1708
              },
              {
                  "engine": "Misc - e0dqqm",
                  "browser": "Lynx",
                  "platform": "Text only",
                  "version": "-",
                  "grade": "X",
                  "id": 1707
              },
              {
                  "engine": "Misc - rhw5cpu",
                  "browser": "Links",
                  "platform": "Text only",
                  "version": "-",
                  "grade": "X",
                  "id": 1706
              },
              {
                  "engine": "Misc - pdq57f",
                  "browser": "Dillo 0.8",
                  "platform": "Embedded devices",
                  "version": "-",
                  "grade": "X",
                  "id": 1705
              },
              {
                  "engine": "Misc - x0a1vo",
                  "browser": "NetFront 3.4",
                  "platform": "Embedded devices",
                  "version": "-",
                  "grade": "A",
                  "id": 1704
              },
              {
                  "engine": "Misc - m1n5b8",
                  "browser": "NetFront 3.1",
                  "platform": "Embedded devices",
                  "version": "-",
                  "grade": "C",
                  "id": 1703
              },
              {
                  "engine": "Tasman - i359o",
                  "browser": "Internet Explorer 5.2",
                  "platform": "Mac OS 8-X",
                  "version": "1",
                  "grade": "C",
                  "id": 1702
              },
              {
                  "engine": "Tasman - qhow49",
                  "browser": "Internet Explorer 5.1",
                  "platform": "Mac OS 7.6-9",
                  "version": "1",
                  "grade": "C",
                  "id": 1701
              }
          ]
      }
  }
  });
});

app.post("/post/save", (req, res) => {
  // req.body 会包含传入的请求的JSON对象
  console.log(req.body); // 输出接收到的请求体
  res.json({
    msg: "测试nodejs修改成功",
    status: 0,
    data: req.body,
  });
});

app.post("/post/update", (req, res) => {
  // req.body 会包含传入的请求的JSON对象
  console.log(req.body); // 输出接收到的请求体
  res.json({
    data: {
      title: "修改标题",
      data: {
        msg: "测试nodejs修改成功",
        status: 0,
      },
    }, // 将请求体返回给客户端
  });
});

// 使应用监听特定端口，等待连接
app.listen(port, () => {
  console.log(`Mock server running at http://localhost:${port}`);
});
