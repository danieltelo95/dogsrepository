const axios = require('axios')
const URL = 'https://api.thedogapi.com/v1/breeds'

const getDogs = async (_req, res) =>  {

    try {
        const { data } = await axios.get(`${URL}`)

        const allDogs = { data }

        return res.status(200).json(allDogs)

    } catch (error) {
        res.status(500).send({error: "Internal Error"})
    }
}

module.exports = {
    getDogs
}