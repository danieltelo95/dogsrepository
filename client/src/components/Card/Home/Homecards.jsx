import Cards from '../Cards/Cards'
import Navbar from '../NavBar/NavBar';

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getByName, getDogs } from "../../../redux/actions";

export default function HomeCards(){

  const dispatch = useDispatch()
  const dogs = useSelector((state) => state.dogs)
  const [searchString, setSearchString] = useState('')

  //Dispatch para traer a todos los perros
  useEffect(() => {
    dispatch(getDogs())
  },[dispatch])

  //Evitar que la página se refresque cada que se hace la búsqueda
  function handleChange(e) {
    e.preventDefault();
    setSearchString(e.target.value)
  }

  //Dispatch para ejecturar getByName con la info que tengo en searchString
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(getByName(searchString))
  }
      
  return (
          
    <div>                        
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
      <hr></hr>
      <Cards allDogs = {dogs}></Cards>
                    
    </div>
                
              
  );
}