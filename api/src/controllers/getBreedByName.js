const axios = require('axios');
const { Dog } = require('../db');
const { Op } = require('sequelize');
const URL = 'https://api.thedogapi.com/v1/breeds';
const apiKey = process.env.API_KEY;

const getBreedByName = async (name) => {
  const lowerCaseName = name.toLowerCase();

  if (!lowerCaseName) throw Error('Por favor ingrese un nombre válido');

  const apiResponse = await axios.get(`${URL}/search?q=${name}&${apiKey}`);
  const apiResults = apiResponse.data;
  const breedId = apiResults[0].id;
  const breedDetailResponse = await axios.get(`${URL}/${breedId}?api_key=${apiKey}`);
  const breedDetail = breedDetailResponse.data  
  const imageUrl = `https://cdn2.thedogapi.com/images/${breedDetail.reference_image_id}.jpg`

  const dogsApi = apiResults.map((dog) => {
    return {
        id: dog.id,
        name: dog.name,
        breed: dog.breed_group,
        bred_for: dog.bred_for,
        life_span: dog.life_span,
        temperament: dog.temperament,
        origin: dog.origin,     
        weight: dog.weight.metric,
        height: dog.height.metric,  
        image: imageUrl
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
