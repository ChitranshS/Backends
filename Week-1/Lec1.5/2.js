const fs = require("fs");
function check()
{
    return new Promise(function(resolve){
        fs.readFile("1.txt","utf-8",function(err,data){
            resolve(data);
        });
    });
}

function printer()
{
    console.log(check);
}
check().then(printer);
