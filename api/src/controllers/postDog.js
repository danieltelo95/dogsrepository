const { Dog, Temper } = require('../db')
const { Op } = require('sequelize');


const postDog = async (name, image, height, weight, life_span, temperament) => {
    
    // console.log("name: ", name);
    // console.log("height: ", height);
    // console.log("weight: ", weight);
    // console.log("lifespan: ", life_span);
    // console.log("temperament: ", temperament);
    // console.log("image: ", image);

    try {               
        const newDog = await Dog.create({               
                name,
                height,
                weight,
                life_span,  
                image,
                temperament                              
        })
                       
        if(temperament) {
            const temper = await Temper.findOrCreate({
                where: {
                    name: temperament,
                }
            })
            await newDog.addTemper(temper[0])
        }
        
        return newDog;
        
    } catch (error) {
        console.error('Error creating new dog:', error);
        res.status(500).json({ error: 'No se creó el nuevo perro' });
    }
}

module.exports = {
    postDog
}