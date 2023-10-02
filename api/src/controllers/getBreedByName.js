const axios = require('axios');
const { Dog } = require('../db');
const { Op } = require('sequelize');
const URL = 'https://api.thedogapi.com/v1/breeds';
const apiKey = process.env.API_KEY;

const getBreedByName = async (name) => {
  const lowerCaseName = name.toLowerCase();

  if (!lowerCaseName) throw Error('Por favor ingrese un nombre válido');

  const apiResponse = await axios.get(`${URL}/search?q=${name}`);
  const apiResults = apiResponse.data;



  const dbBreeds = await Dog.findAll({
    where: {
      name: {
        [Op.iLike]: `%${lowerCaseName}%`,
      },
    },
  });

  return dbBreeds.concat(apiResults)
}

module.exports = {
  getBreedByName,
};
