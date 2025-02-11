// 创建一个新的 Promise 来处理 axios 的 POST 请求
const axios_http = (config) => {
  return new Promise((resolve, reject) => {
    axios({
      config.url,
      method: config.method.toUpperCase(),
      headers: { "Content-Type": "application/json" },
      data: config.method.toUpperCase() === "GET" ? null : config.data,
      params: method.toUpperCase() === "GET" ? data : null,
    })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};
