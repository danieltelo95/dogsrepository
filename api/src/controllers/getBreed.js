const axios = require('axios')
const Dogs = require('../db')
const URL = 'https://api.thedogapi.com/v1/breeds'

const getBreed = async (id, source) =>  {

    const dogBreed = source === "api"? (await axios.get(`${URL}?api_key=${API_KEY}`)).data
        : await Dogs.findByPk(id)
    
    return dogBreed;
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