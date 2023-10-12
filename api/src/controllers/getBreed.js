const axios = require('axios')
const { Dog } = require('../db')
const URL = 'https://api.thedogapi.com/v1/breeds'
const apiKey = process.env.API_KEY


const getBreed = async (id, source) =>  {
    //si id viene de la api
    if(source === "api"){
        const apiResponse = await axios.get(`${URL}/${id}?api_key=${apiKey}`)
        const apiResults = apiResponse.data
        
        let dogImage = [apiResults]

        //se mapea sobre dogImage para extraer la reference_image
        let imageOfTheDog = await Promise.all(dogImage.map(async (e) => {
            let imageId = e?.reference_image_id;
            if (imageId) {
              const imageResponse = await axios.get(`https://api.thedogapi.com/v1/images/${imageId}`);
              return imageResponse.data.url;
            }
            return null
          }));
        

        const dogBreedDetail = {
            id: apiResults.id,
            name: apiResults.name,
            weight: apiResults.weight.metric,
            height: apiResults.height.metric,
            breedgroup: apiResults.breed_group,
            lifespan: apiResults.life_span,
            origin: apiResults.origin,
            temperament: apiResults?.temperament,     
            image: imageOfTheDog
        }
        
        return dogBreedDetail;
        
    // consulta a la db usando el modelo Dog y el id
    } else if(source === "database"){
        const dbBreedsDogs = await Dog.findByPk(id)
        return dbBreedsDogs;
    }
}

module.exports = {
    getBreed
}

