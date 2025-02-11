// 创建一个新的 Promise 来处理 axios 的 POST 请求
const postData = (config) => {
  return new Promise((resolve, reject) => {
    axios
      .post(config.url, JSON.stringify(config.data), {
      .then((response) => {
        resolve(response.data); // 将响应数据传递给 resolve
      })
      .catch((error) => {
        reject(error); // 将错误传递给 reject
      });
  });
};
