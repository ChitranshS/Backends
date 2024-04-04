const fs = require("fs");
function check(passedfn){
    fs.readFile("1.txt","utf-8",function(err,data){
        passedfn(data);
    });
}
function printer(data)
{
    console.log(data);
}
check(printer);
