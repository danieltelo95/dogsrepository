import Cards from '../Cards/Cards'
import Navbar from '../NavBar/NavBar';

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getByName, getDogs } from "../../../redux/actions";

import './homecards.styles.css'

export default function HomeCards(){

  const dispatch = useDispatch()
  //obtener el estado de los perros desde la store
  const dogs = useSelector((state) => state.dogs)
  const [searchString, setSearchString] = useState('')

  //Dispatch para traer a todos los perros al montar el componente
  useEffect(() => {
    dispatch(getDogs())
  },[dispatch])

  //Evitar que la página se refresque cada que se hace la búsqueda y manejar los cambios en el input
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
      <hr className='transparent-hr'></hr>
      <Cards allDogs = {dogs}></Cards>
                    
    </div>                              
  );
}