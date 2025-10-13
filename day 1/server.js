import http from 'http';
import fs from "fs/promises"
import url from "url"
import path from "path"
const PORT = 5000;

// Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);

const server = http.createServer((req, res) => {

    try {
        if (req.method === "GET") {
            let filePath;
            if (req.url === "/") {
                // res.writeHead(200, { 'Content-Type': 'text/html' });
                // res.end("<h1>Hello from the homepage</h1>");
                filePath = path.join(__dirname, "public" ,"index.html")
            } else if (req.url === "/about") {
                // res.writeHead(200, { 'Content-Type': 'text/html' });
                // res.end("<h1>Hello from the about page</h1>");
                filePath = path.join(__dirname, "public" ,"about.html")
            } 
            // else {
                // res.writeHead(404, { 'Content-Type': 'text/html' });
                // res.end("<h1>404 Page Not Found</h1>");
            // }
        } else {
            throw new Error("not found");
            // throw new Error("This method is not allowed");
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end("<h1>500 Internal Server Error</h1>");
    }


});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
