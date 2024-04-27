interface User {
    firstName :string
    lastName :string
    age:number
    email?: string
}

function isLegal(user : User )
{
    if(user.age>18)
    console.log(user.age)
    else
    console.log("not valid")
}

isLegal({
    firstName:"Chitransh",
    lastName:"asd",
    age:18
})