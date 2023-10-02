const axios = require('axios')
const { Temper } = require('../db')
const URL = 'https://api.thedogapi.com/v1/breeds'
const apiKey = process.env.API_KEY


const getTemperaments = async () => {
    const {data} = await axios.get(`${URL}?api_key=${apiKey}`)
    
    const temperaments = data.map((dog) => {
        return {
        temperament: dog.temperament
        }
    })

    const singleTemper = temperaments.map((dog) => {
        if(dog.temperament){
            return {
                temperament: dog.temperament.split(",").map((t) => 
                    t.trim()
                )
            }
        }
        return dog
    })

    const dbTemperaments = await Temper.bulkCreate(
        singleTemper.map((temperament) => ({
          name: JSON.stringify(temperament),
        }))
      );
   
    return singleTemper
}

module.exports = {
    getTemperaments
}