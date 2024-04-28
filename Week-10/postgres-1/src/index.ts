import {Client} from 'pg'

const client = new Client({
    connectionString:"postgresql://postgres:mysecretpassword@localhost:5432/postgres"
})


async function createUsersTable()
{
    await client.connect()
 const result = await client.query(`CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(220) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
 )`)
    console.log(result)
}

async function insertIntoTable()
{
    const insertionString = `INSERT into users values("chitransh","nigga1@gmail.com","chic123")`
    try{
    const success = await client.query(insertionString)
    console.log("insertion successful" , success)
    }
    catch(e)
    {
        console.error(e)
    }
    finally
    {
        await client.end()
    }
}

insertIntoTable()