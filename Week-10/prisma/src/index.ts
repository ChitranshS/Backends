import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function insertUser(email:string , firstName :string  , lastName :string , password: string)
{
    const res = await prisma.user.create({
        data:{
            email,
            firstName,
            lastName,
            password
        },
        select:{
            id : true
        }
    })
    console.log(res)
}

insertUser("asda1@a.com","chitranh","sri","asdasd")