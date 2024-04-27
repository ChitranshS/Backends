"use strict";
function isLegal(user) {
    if (user.age > 18)
        console.log(user.age);
    else
        console.log("not valid");
}
isLegal({
    firstName: "Chitransh",
    lastName: "asd",
    age: 18
});
