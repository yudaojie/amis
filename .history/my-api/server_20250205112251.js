const express = require("express");
const app = express();

app.all("*", function (req, res) {
  //此时的 '*' 指用来处理所有的请求，从而在服务器端解决跨域的问题；
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500"); //此时表示：允许 'http://127.0.0.1:5500' 地址来访问服务器；
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT"); //此时表示：允许发的请求方式，如：'GET,POST,PUT';
  res.header("Access-Control-Allow-Headers", "Content-Type"); //此时表示：允许发的请求头，如：'Content-Type' 请求头的类型;
  req.next(); //请求回来，并进行下一步的操作；
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

app.post("/post", (req, res) => {
  // req.body 会包含传入的请求的JSON对象
  console.log(req.body); // 输出接收到的请求体

  res.json({
    msg: "新增成功",
    status: 0,
    data: {
      title: "标题",
    }, // 将请求体返回给客户端
  });
});

// 使应用监听特定端口，等待连接
app.listen(port, () => {
  console.log(`Mock server running at http://localhost:${port}`);
});
