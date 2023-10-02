const { Dog } = require('../db')

const deleteDog = async (req, res) => {

    const { id } = req.params
    console.log(id);
    try {
        const dog = await Dog.findByPk(id);
        if(!dog){
            res.status(404).json({error: 'Perro no encontrado'})
        }
        await Dog.destroy({
            where:{
                id
            }
        })
        const allDogs = await Dog.findAll()
        res.status(200).json(allDogs)
        console.log(allDogs);
    } catch (error) {
        res.status(500).json({error:error.message})        
    }

}

module.exports = {
    deleteDog
}

