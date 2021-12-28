"use strict"

const fs = require('fs');
const path = require('path');
const http = require('http');
const staticBasePath = './www';
const PORT = process.env.PORT || 5000;

const staticServe = (req, res) => {
    let resolvedBase = path.resolve(staticBasePath);
    let safeSuffix = path.normalize(req.url).replace(/^(\.\.[\/\\])+/, "");
    let fileLoc = path.join(resolvedBase, safeSuffix);
    fs.readFile(fileLoc, (err, data) => {
        if (err) {
            res.writeHead(404, 'Not Found');
            res.write('404: File not found!');
            return res.end();
        }
        res.statusCode = 200;
        res.write(data);
        return res.end();
    });
};
const httpServer = http.createServer(staticServe);

httpServer.listen(PORT, () => {
    console.log('Server listening on port 8080');
})