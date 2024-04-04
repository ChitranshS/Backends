const fs = require("fs");
function checker()
{
    return new Promise(function(resolve){
    setTimeout(function(){
        fs.readFile("1.txt","utf-8",function(err,data){
            resolve(data);
        })
    },2000)
});
}
async function printer()
{

    let check = await checker();
    console.log("After await");
    console.log(check);

}

printer()
console.log("After printer")