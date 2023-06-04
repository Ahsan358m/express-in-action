const express = require("express");
const path = require("path");
const http = require("http");


const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.use((req, res)=>{
    res.writeHead(200, {"Content-Type":"text/plain"});
    res.end("Looks like you didn't find a static file.");
});

http.createServer(app).listen(3000, ()=>{
    console.log("server created successfullly on localhost 3000");
});
/*
here to access the meow.txt file we have to give the file name present in the directory we have metioned
in our localhoost like this http://localhost:3000/meow.txt
*/

/*
Why use path.resolve?
What’s all that business about path.resolve? Why can’t you just say /public? The
short answer is that you could, but it’s not cross-platform.
On Mac and Linux, you want this directory:
/public
But on Windows, you want this directory:
\public
Node’s built-in path module will make sure that things run smoothly on Windows,
Mac, and Linux

*/