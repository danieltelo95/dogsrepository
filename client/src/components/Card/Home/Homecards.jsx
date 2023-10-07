import Cards from '../Cards/Cards'
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getDogs } from "../../../redux/actions";

export default function HomeCards(){

  const dispatch = useDispatch()
  const dogs = useSelector((state) => state.dogs)

  useEffect(() => {
    dispatch(getDogs())
  },[dispatch])
  
    
  return (
          
    <div>                        

      <Cards allDogs = {dogs}></Cards>
                    
    </div>
                
              
  );
}