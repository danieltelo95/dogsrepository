const { Dog } = require('../db')

const deleteDog = async (req, res) => {

    const { id } = req.params
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
        res.status(200).json(`El perro con id: ${id} fue correctamente eliminado`)
    } catch (error) {
        res.status(500).json({error:error.message})        
    }

}

module.exports = {
    deleteDog
}

