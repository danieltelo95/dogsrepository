import Card from "../Card/Card"
import { useState, useEffect } from "react"
import './cards.styles.css'

function Cards({allDogs}) {
    //const dogsList = allDogs
    
    const[currentPage, setCurrentPage] = useState(1)
    const[dogsList, setDogList] = useState([])
    const dogsPerPage = 8;

    const indexLastDog = (currentPage) * dogsPerPage;
    const indexFirstDog = indexLastDog - dogsPerPage;
    const currentDogs = dogsList.slice(indexFirstDog, indexLastDog);
    console.log(currentDogs);

    const handlePage = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        setDogList(allDogs)
    },[allDogs])



    return (
        <>
        <div className="card-list">
            {currentDogs.map((dog) => (
                <Card 
                key={dog.id}
                dog={dog} />
            ))}
        </div>
        <hr className="transparent-hr"></hr>
        <button onClick={()=>handlePage(currentPage - 1)} 
            disabled={currentPage === 1}
        >
            Previous
        </button>
        <button onClick={() => handlePage(currentPage + 1)}
            disabled={currentDogs.length < dogsPerPage}
        >
            Next
        </button>
        </>
    )
}

export default Cards