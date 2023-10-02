const { postDog } = require('../controllers/postDog')

const postDogHandler = async (req, res) => {

    const { name, image, height, weight, life_span, temperament } = req.body
    console.log("temperament: ", temperament);

    try {
        // if(![name, height, weight, life_span, temperament].
        //     every(Boolean)) return res.status(401).send("Faltan datos")
        //     console.log(temperament);

        const newDogInfo = await postDog(
            name, 
            image,
            height, 
            weight, 
            life_span, 
            temperament,
        )   
        res.status(201).json(newDogInfo)
    } catch (error) {
        res.status(500).json({error: error.message})
    }

}

module.exports = {
    postDogHandler
}