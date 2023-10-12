const { postDog } = require('../controllers/postDog')

const postDogHandler = async (req, res) => {
    //recibo las propieades por query
    const { name, image, height, weight, life_span, temperament } = req.body

    //si no me ha enviado todas las propiedades, lanzo el error
    try {
        if(![name, height, weight, life_span, temperament].
            every(Boolean)) return res.status(401).send("Faltan datos")
    //le mando las propiedades que recibí a postdog para que las utilice
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