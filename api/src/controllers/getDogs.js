const axios = require('axios')
const { Dog } = require('../db')
const URL = 'https://api.thedogapi.com/v1/breeds'
const apiKey = process.env.API_KEY

const getDogs = async (_req, res) =>  {

    let allDogs = [];

    try {
        const { data } = await axios.get(`${URL}?api_key=${apiKey}`)

        const dogsApi = data.map((dog) => {
            return {
                id: dog.id,
                name: dog.name,
                breed: dog.breed_group,
                bred_for: dog.bred_for,
                life_span: dog.life_span,
                temperament: dog.temperament,
                origin: dog.origin,                
            }
        });
        
        const dogsDB = await Dog.findAll()

        allDogs = [...dogsDB, ...dogsApi].sort((a,b) => 
        a.name.localeCompare(b.name))
        
        res.status(200).json(allDogs)

    } catch (error) {
        res.status(500).send({error: "Internal Error"})
    }
}

module.exports = {
    getDogs
}