const axios = require('axios')
const { Dog } = require('../db')
const URL = 'https://api.thedogapi.com/v1/breeds'
const apiKey = process.env.API_KEY


const getBreed = async (id, source) =>  {

    if(source === "api"){
        const { data } = await axios.get(`${URL}/${id}?api_key=${apiKey}`)
        console.log(Dog);

        const dogBreedDetail = {
            id: data.id,
            name: data.name,
            weight: data.weight.metric,
            height: data.height.metric,
            breedgroup: data.breed_group,
            lifespan: data.life_span,
            origin: data.origin,
            temperament: data?.temperament,            
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