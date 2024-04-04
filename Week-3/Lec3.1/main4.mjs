import fetch from 'node-fetch';

async function getAnimalData()
{
    const res = await fetch("https://fakerapi.it/api/v1/persons");
    const final = await res.json()
    console.log(final)
}
getAnimalData()
