const axios = require('axios');
const { Dog } = require('../db');
const { Op } = require('sequelize');
const URL = 'https://api.thedogapi.com/v1/breeds';
const apiKey = process.env.API_KEY;

const getBreedByName = async (name) => {
  const lowerCaseName = name.toLowerCase();

  if (!lowerCaseName) throw Error('Por favor ingrese un nombre válido');

  let apiResponse = await axios.get(`${URL}/search?q=${name}&api_key=${apiKey}`);
  let apiResults = apiResponse.data;

  let dogImages = await Promise.all(apiResults.map(async (e) => {
    let imageId = e?.reference_image_id;
    if (imageId) {
      const imageResponse = await axios.get(`https://api.thedogapi.com/v1/images/${imageId}`);
      return imageResponse.data.url;
    }
    return null
  }));

  console.log(dogImages);

  const dogsApi = apiResults.map((dog, index) => {
    return {
        id: dog.id,
        name: dog.name,        
        temperament: dog.temperament,
        origin: dog.origin,     
        weight: dog.weight.metric,
        height: dog.height.metric, 
        image: dogImages[index]
        
    }
})
    const dbBreeds = await Dog.findAll({
      where: {
        name: {
          [Op.iLike]: `%${lowerCaseName}%`,
        },
      },
    });

  return dbBreeds.concat(dogsApi)
}

module.exports = {
  getBreedByName,
};
