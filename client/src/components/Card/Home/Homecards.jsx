import { useEffect, useState } from "react"
import axios from 'axios'

const URL = 'http://localhost:3001/dogs'

export default function HomeCards(){

    const [dogs, setDogs] = useState([])
        
        useEffect(() => {
            try {
                axios.get(`${URL}`).then((response) => {
                    setDogs(response.data)
                })                
            } catch (error) {
                console.error('Error al cargar los perros: ', error)                
            }
        }, []);        
    
        return (
            <div>
            <h1></h1>
            {dogs.map((dog) => (
              <div key={dog.id}>
                <img src={dog.image} alt={dog.name} />
                <h2>{dog.name}</h2>
                <p>id: {dog.id}</p>
                <p>Altura: {dog.height} </p>
                <p>Peso: {dog.weight} </p>
              </div>
            ))}
          </div>
          );
}