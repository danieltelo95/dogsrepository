const { Dog, Temper } = require('../db')


const postDog = async (name, image, height, weight, life_span, temperament) => {    
    //utilizo el modelo dog para crear un nuev registro en la dt
    try {               
        const newDog = await Dog.create({               
                name,
                height,
                weight,
                life_span,  
                image,
                temperament                              
        })
        //verificar si se proporcionó el temperamento,   
        if(temperament) {
            const temper = await Temper.findOrCreate({
                where: {
                    name: temperament,
                }
            })
            //asocio al nuevo perro creado con el temperamento que se encontró/creó
            await newDog.addTemper(temper[0])
        }
        
        return newDog;
        
    } catch (error) {
        res.status(500).json({ error: 'No se creó el nuevo perro' });
    }
}

module.exports = {
    postDog
}