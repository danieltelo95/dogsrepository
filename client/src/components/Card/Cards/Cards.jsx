import Card from "../Card/Card"
import './cards.styles.css'

function Cards({allDogs}) {
    const dogsList = allDogs
    return (
        <div className="card-list">
            {dogsList?.map((dog) => (
                <Card 
                key={dog.id}
                dog={dog} />
            ))}
        </div>
    )
}

export default Cards