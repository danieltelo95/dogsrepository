const axios = require('axios')
const { Temper } = require('../db')
const URL = 'https://api.thedogapi.com/v1/breeds'
const apiKey = process.env.API_KEY


const getTemperaments = async () => {
    const {data} = await axios.get(`${URL}?api_key=${apiKey}`)
    console.log(data);
    const temperaments = data.map((dog) => {
        return {
            temperament: dog.temperament
        }
    })
    return temperaments
}

module.exports = {
    getTemperaments
}