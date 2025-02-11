/* const express = require("express");
const app = express();
const port = 3000;

app.get("/api/data", (req, res) => {
  res.json({
    message: "Hello, this is a mock API response!",
    data: { id: 1, name: "Example" },
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
}); */

const http = require("http");

// 创建HTTP服务器
const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString(); // 收集请求体数据
    });
    req.on("end", () => {
      const jsonData = JSON.parse(body); // 解析JSON数据
      console.log("Received POST data:", jsonData);

      // 准备响应数据
      const responseData = {
        status: "success",
        data: jsonData, // 或者你可以修改或扩展这个数据
      };

      res.writeHead(200, { "Content-Type": "application/json" }); // 设置响应头为JSON格式
      res.end(JSON.stringify(responseData)); // 发送JSON格式的响应
    });
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" }); // 方法不被允许，返回405状态码
    res.end("Method Not Allowed");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
