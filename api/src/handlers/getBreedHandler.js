const { getBreed } = require('../controllers/getBreed')


const getBreedHandler = async (req, res) => {

    try {
        const { id } = req.params;
        
        const source = isNaN(Number(id))? "database" : "api"

        const response = await getBreed(id, source)
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = {
    getBreedHandler
}