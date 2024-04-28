const {Client} = require('pg')

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
    await client.connect()
    const data = ['chitranhs','asda@a.com','213dss']
    const insertionString = `INSERT into users (username,email,password) VALUES ($1,$2,$3)`
    try{
    const success = await client.query(insertionString,data)
    console.log("insertion successful" , success)
    }
    catch(e)
    {
        console.log(e)
    }
    finally
    {
        await client.end()
    }
}

insertIntoTable()