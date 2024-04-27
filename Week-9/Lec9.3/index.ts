function employeeID<T>(arg:T)
{
    return arg
}

let empName = employeeID<string>("Chitransh")
let empNumber = employeeID<number>(12)

console.log(empName,empNumber)
