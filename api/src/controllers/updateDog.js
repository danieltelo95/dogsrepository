const { Dog } = require('../db')

const updateDog = async (req, res) => {

    const { name, height, weight, life_span, image, temperament } = req.body

    try {
        const existingDog = await Dog.findOne({
            where: {name}
        })
        console.log(name);
        if(existingDog){
            existingDog.name = name;
            existingDog.height = height;
            existingDog.weight = weight;
            existingDog.life_span = life_span;
            existingDog.image = image;
            existingDog.temperament = temperament
        }
        console.log(existingDog);
        await existingDog.save()
        
        res.status(200).json(existingDog)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message})         
    }
}

module.exports = {
    updateDog
}

