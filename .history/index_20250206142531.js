// 创建一个新的 Promise 来处理 axios 的 POST 请求
function axios_http(config) {
  return new Promise((resolve, reject) => {
    axios({
      url: config.url,
      method: config.method.toUpperCase(),
      headers: { "Content-Type": "application/json" },
      data: config.method.toUpperCase() === "GET" ? null : config.data,
      params: config.method.toUpperCase() === "GET" ? config.data : null,
    })
       .then((response) =>
          let obj = { msg: response.data.msg, status: response.data.status }
          Object.assign(response.data, obj)
          resolve(response.data))
      .catch((error) => reject(error));
  });
}
