"use strict";
function employeeID(arg) {
    return arg;
}
let empName = employeeID(["Chitransh", "Sri"]);
let empNumber = employeeID([12, 11]);
console.log(empName.map(emp => emp.toUpperCase()), empNumber);
