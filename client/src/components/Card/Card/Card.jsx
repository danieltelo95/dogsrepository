function Card({id, name, image, height, weight, life_span, temperament}) {

    return (
        <div>
            <img src={image} alt="imagen"></img>
            <h2>Nombre: {name}</h2>

        </div>
    )

}

export default Card