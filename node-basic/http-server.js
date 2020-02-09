const http = require("http");

const server = http.createServer((req, res) => {
    res.end("HTTP Server listing. Hello from Nodejs App")
});

server.listen(3000);