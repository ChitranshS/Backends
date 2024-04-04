// Read a file using async functions
const fs = require("fs");
fs.readFile('1.txt','utf-8',function(err,data){console.log(data)});
console.log('Hi There')

