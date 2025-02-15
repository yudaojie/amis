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
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
}
function axios_http2(options) {
  var url = options.url; // 接口地址
  var method = options.method; // 请求方法 get、post、put、delete
  var data = options.data; // 请求数据
  var responseType = options.responseType;
  var config = options.config || {}; // 其他配置
  var headers = options.headers; // 请求头

  config.withCredentials = true;

  if (responseType) {
    config.responseType = responseType;
  }

  if (config.cancelExecutor) {
    config.cancelToken = new axios.CancelToken(config.cancelExecutor);
  }

  config.headers = headers || {};

  if (method !== "post" && method !== "put" && method !== "patch") {
    if (data) {
      config.params = data;
    }

    return axios[method](url, config);
  } else if (data && data instanceof FormData) {
    config.headers = config.headers || {};
    config.headers["Content-Type"] = "multipart/form-data";
  } else if (
    data &&
    typeof data !== "string" &&
    !(data instanceof Blob) &&
    !(data instanceof ArrayBuffer)
  ) {
    data = JSON.stringify(data);
    config.headers = config.headers || {};
    config.headers["Content-Type"] = "application/json";
  }

  return axios[method](url, data, config);
}
