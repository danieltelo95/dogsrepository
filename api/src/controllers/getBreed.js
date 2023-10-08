const axios = require('axios')
const { Dog } = require('../db')
const URL = 'https://api.thedogapi.com/v1/breeds'
const apiKey = process.env.API_KEY


const getBreed = async (id, source) =>  {

    if(source === "api"){
        const apiResponse = await axios.get(`${URL}/${id}?api_key=${apiKey}`)
        const apiResults = apiResponse.data
        let dogImage = [apiResults]

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
        
    } else if(source === "database"){
        const dbBreedsDogs = await Dog.findByPk(id)
        return dbBreedsDogs;
    }
}

module.exports = {
    getBreed
}


// const { id } = req.params
// try {
//     const { data } = await axios.get(`${URL}/${id}`)

//     if(!data.name) throw Error (`id: ${id} No fue encontrado`)

//     const dogbreed = {

//         id: data.id,
//         name: data.name,
//         height: data.height.metric,
//         weight: data.weight.metric,
//         lifespan: data.life_span,
//         temperament: data.temperament,
//         image: data.reference_image_id

//     }

//     return res.status(200).json(dogbreed)

// } catch (error) {
//     res.status(500).send({error: error.message})
// }