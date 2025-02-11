const express = require("express");
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
});
