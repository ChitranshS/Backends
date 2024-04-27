"use strict";
function printHello(name) {
    console.log("Hello " + name);
}
function sum(first, second) {
    return first + second;
}
function runfunction(fn) {
    setTimeout(fn, 1);
}
runfunction(() => console.log("Function type inference"));
console.log(sum(2, 3));
printHello("Chitransh");
