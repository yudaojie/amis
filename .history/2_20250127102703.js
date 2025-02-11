// 密码和盐
const password = "your-password";
const salt = window.crypto.getRandomValues(new Uint8Array(16)); // 生成随机盐

// 将密码转换为一个 CryptoKey 对象
const encoder = new TextEncoder();
const passwordBuffer = encoder.encode(password);

// 使用 SubtleCrypto 进行 PBKDF2 派生密钥
crypto.subtle
  .importKey(
    "raw", // 输入格式
    passwordBuffer, // 密码
    { name: "PBKDF2" }, // 算法
    false, // 是否可以导出
    ["deriveKey"] // 使用方式：派生密钥
  )
  .then((baseKey) => {
    // 派生密钥
    return crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: salt, // 盐
        iterations: 100000, // 迭代次数
        hash: "SHA-256", // 哈希算法
      },
      baseKey, // 从密码派生密钥
      { name: "AES-GCM", length: 256 }, // 派生出的密钥类型，这里以 AES-GCM 为例
      false, // 是否可以导出
      ["encrypt", "decrypt"] // 需要的用途
    );
  })
  .then((derivedKey) => {
    // 输出派生的密钥
    console.log(derivedKey);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
