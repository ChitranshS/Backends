let obj = new Promise(function(resolve){
    setTimeout(function(){resolve("Here is some sample testing data")},2000);
});
function check()
{
    console.log(obj);
}
console.log(obj);
obj.then(check);