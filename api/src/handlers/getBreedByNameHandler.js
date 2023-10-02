const { getBreedByName } = require('../controllers/getBreedByName')


const getBreedByNameHandler = async (req, res) => {

    try {
        const { name } = req.query;
        const breeds = await getBreedByName(name)
        
        res.status(200).json(breeds)

    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = {
    getBreedByNameHandler
}