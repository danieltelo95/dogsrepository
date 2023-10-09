import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"

const Detail = () => {
    const { id } = useParams()
    const dogs = useSelector((state) => state.dogs)
    
    const dog = dogs.find((dog) => dog.id === Number(id))

   
    return (
        <di>
            <img src={dog.image} alt={dog.name}></img>
            <p>Height: {dog.height}</p>
            <p>Weight: {dog.weight}</p>
            <p>Temperaments:{dog.temperament} </p>
            <p>Lifespan:{dog.life_span}</p>
            <p>Origin:{dog.origin} </p>
        </di>
    )

}

export default Detail