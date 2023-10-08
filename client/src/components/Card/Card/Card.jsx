import { Link } from 'react-router-dom'
import './card.styles.css'

function Card({dog}) {

    const {id, image, name, temperament, weight} = dog

    return (
        <div className= 'card-container'>
          <Link to={`/detail/${id}`}>
          <img src = {image} alt={name} className='card-image'/>
          <h2>{name}</h2>
          <p>{temperament}</p>
          <p>{weight}</p>
          </Link>

        </div>
    )

}

export default Card