import './card.styles.css'

function Card({dog}) {

    const {image, name, temperament, weight} = dog

    return (
        <div className= 'card-container'>
          <img src = {image} alt={name} className='card-image'/>
          <p>{temperament}</p>
          <p>{weight}</p>
        </div>
    )

}

export default Card