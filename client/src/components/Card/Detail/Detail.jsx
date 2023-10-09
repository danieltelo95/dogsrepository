import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux"
import './Detail.styles.css'

const Detail = () => {
    const { id } = useParams()
    const dogs = useSelector((state) => state.dogs)
    
    const dog = dogs.find((dog) => dog.id === Number(id))

   
    return (
        <div>
            <img src={dog.image} alt={dog.name} className='card-image'></img>
            <p>Height: {dog.height}</p>
            <p>Weight: {dog.weight}</p>
            <p>Temperaments:{dog.temperament} </p>
            <p>Lifespan:{dog.life_span}</p>
            <p>Origin:{dog.origin} </p>
        </div>
    )

}

export default Detail