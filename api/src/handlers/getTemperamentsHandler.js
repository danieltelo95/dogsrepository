const { getTemperaments } = require('../controllers/getTemperaments')

const getTemperamentsHandler = async (req, res) => {

    try {
        const temperaments = await getTemperaments()
        res.status(200).json(temperaments)
    } catch (error) {
        console.log("Error fetching and saving:", error);
        res.status(500).json({error: error.message})

    }

}

module.exports = {
    getTemperamentsHandler
}