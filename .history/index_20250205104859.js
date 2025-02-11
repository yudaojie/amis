const axios = require("axios");

// 创建一个新的 Promise 来处理 axios 的 POST 请求
const postData = (url, data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then((response) => {
        resolve(response.data); // 将响应数据传递给 resolve
      })
      .catch((error) => {
        reject(error); // 将错误传递给 reject
      });
  });
};

// 使用示例
const url = "https://your-api-endpoint.com/data";
const postBody = { key: "value" };

postData(url, postBody)
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
