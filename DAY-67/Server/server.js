const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const server = http.createServer((req, res) => {
  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
  );

  const extName = String(path.extname(filePath)).toLowerCase();
  const mimeTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpg",
    ".gif": "image/gif",
    ".wav": "audio/wav",
    ".mp4": "video/mp4",
    ".woff": "application/font-woff",
    ".ttf": "application/font-ttf",
    ".eot": "application/vnd.ms-fontobject",
    ".otf": "application/font-otf",
    ".svg": "application/image/svg+xml",
  };
  const contentType = mimeTypes[extName] || "application/octet-stream";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        res.writeHead(200, { "Content-Type": contentType });

        res.end(`Page not found!`, "utf8");
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });

      res.end(content, "utf8");
    }
  });

  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "text/html");
  //   switch (req.url) {
  //     case "/":
  //         fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
  //             if (err) throw err;
  //             res.end(data);
  //         });
  //         break;
  //     case "/about":
  //         fs.readFile(path.join(__dirname, "about.html"), (err, data) => {
  //             if (err) throw err;
  //             res.end(data);
  //         });
  //         break;
  //     case "/contact":
  //         fs.readFile(path.join(__dirname, "contact.html"), (err, data) => {
  //             if (err) throw err;
  //             res.end(data);
  //         });
  //         break;
  //     default:
  //         res.end(`
  //             <h1>Oops!</h1>
  //             <p>We can't seem to find the page you are looking for</p>
  //             <a href="/">Back Home</a>
  //         `);
  // }
});

server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
