function employeeID<T>(arg:T[])
{
    return arg
}

let empName = employeeID<string>(["Chitransh","Sri"])
let empNumber = employeeID<number>([12,11])

console.log(empName.map(emp => emp.toUpperCase()),empNumber)
