const http = require("http");
const fs = require('fs').promises;

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/raw-html":
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(`<html><body><h1>This is HTML</h1></body></html>`);
            break
        case "/users":
            fs.readFile(__dirname + "/user.json")
                .then(contents => {
                    res.setHeader("Content-Type", "text/json");
                    res.writeHead(200);
                    res.end(contents);
                }).catch(err => {
                res.writeHead(500);
                res.end(err);
                return;
            });
            break
        case "/":
            fs.readFile(__dirname + "/index.html")
                .then(contents => {
                    res.setHeader("Content-Type", "text/html");
                    res.writeHead(200);
                    res.end(contents);
                }).catch(err => {
                res.writeHead(500);
                res.end(err);
                return;
            });
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error:"Resource not found"}));
    }
}




const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

