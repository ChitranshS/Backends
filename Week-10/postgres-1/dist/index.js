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

async function  createAddressTable()
{
    await client.connect()
    const query = `CREATE TABLE addresses(
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        city VARCHAR(100) NOT NULL,
        country VARCHAR(100) NOT NULL,
        street VARCHAR(255) NOT NULL,
        pincode VARCHAR(20),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    )`
    try {
        const success = await client.query(query)
        console.log(success)

    }
    catch(e)
    {
        console.log(e)
    }
    finally{
        client.end()
    }
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

createAddressTable()