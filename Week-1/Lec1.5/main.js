function printer()
{
    console.log("Waits 2 seconds then it is printed");
}
setTimeout(printer,2000);
console.log("This gets printed first");
// Basically it delegates / context switches in case of asynchronous functions