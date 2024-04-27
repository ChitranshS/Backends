function printHello(name:string)
{
    console.log("Hello " + name)
}

function sum (first:number,second:number): number{
return first+second
}

function runfunction(fn:()=>void)
{
    setTimeout(fn,1)
}
runfunction(()=>console.log("Function type inference"))
console.log(sum(2,3))
printHello("Chitransh")