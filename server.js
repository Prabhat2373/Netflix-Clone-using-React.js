const port = 5000;
const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.end("Hello");
    }
  })
  .listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
  });
