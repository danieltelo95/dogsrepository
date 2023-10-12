const axios = require('axios')
const { Temper } = require('../db')
const URL = 'https://api.thedogapi.com/v1/breeds'
const apiKey = process.env.API_KEY


const getTemperaments = async () => {
    const {data} = await axios.get(`${URL}?api_key=${apiKey}`)
    //obtengo solo los temperamentos de los perros
    const temperaments = data.map((dog) => {
        return {
        temperament: dog.temperament
        }
    })
    // filtro los temperamentos de los perros y los pusheo en un solo array 
    const filterTemperaments = temperaments.filter((dog) => 
    dog.temperament).reduce((acc, dog) => {
        const dogTemperaments = dog.temperament.split(",").
        map((t) => t.trim())
        acc.push(...dogTemperaments)
        return acc
    }, [])

    //elimino los temperamentos duplicados
    const uniqueTemperament = [...new Set(filterTemperaments)];
    
    // guardo los temperamentos en la db en la tabla Temper
    const dbTemperaments = await Temper.bulkCreate(
        uniqueTemperament.map((temperament) => ({
          name: JSON.stringify(temperament),
        }))
      );
      const savedTemperaments = await Temper.findAll();
     
  
      return savedTemperaments.map((temperament) => JSON.parse(temperament.name));
}

module.exports = {
    getTemperaments
}