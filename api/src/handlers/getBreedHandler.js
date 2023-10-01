const { getBreed } = require('../controllers/getBreed')

const getBreedHandler = async (req, res) => {

    const { id } = req.params;

    const source = isNaN(id)? "api" : "database"

    try {
        const response = await getBreed(id, source)
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = {
    getBreedHandler
}