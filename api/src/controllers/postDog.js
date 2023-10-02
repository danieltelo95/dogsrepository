const { Dog, Temper } = require('../db')
const { Op } = require('sequelize');


const postDog = async (name, image, height, weight, life_span, temperament) => {    

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