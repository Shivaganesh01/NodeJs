const fs = require("fs")
const fileName = "watch-file.txt"

/**********Functional Approach***********
const errHandler = err => console.log(err)
const dataHandler = data => console.log(data.toString())
fs.readFile(fileName, (err, data) => {
    if (err) errHandler(err);
    else dataHandler(data);
})
console.log("Logging after read file call");
****************************************/


/********Syncronous read of file*********
const data = fs.readFileSync(fileName);
console.log("Data: ", data.toString());
****************************************/

/********Asyncronous read of file*********
fs.readFile(fileName, (err, data) => {
    if (err) {
        console.log("Error: ", err)
    } else {
        console.log(data.toString())
    }
})
console.log("Logging after read file call");
****************************************/

//fs.watch(fileName, () => console.log(`File watch-file data is changed`)) // Use ` instead of "/' oresle 2 times it prints log

/**********Express Server************
const express = require("express")
const expressServer = express()

expressServer.get('/', function(req, res) {
    res.send("Hello from MyApp.")
});

expressServer.listen(3030)
**********************************/

/**********HTTP Server*************
const http = require("http");

const server = http.createServer((req, res) => {
    res.end("NodeJs Application.")
});

server.listen(3030);
**********************************/