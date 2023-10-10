import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTemps, filterTemp} from '../../../redux/actions'

function FilterByTemperament () {
    
    const dispatch = useDispatch()
    const allTemperaments = useSelector((state) => state.temperaments)
    const [searchQuery, setSearchQuery] = useState('')
    const [ filteredTemperaments, setFilteredTemperaments] = useState([])

    useEffect(() => {
        dispatch(allTemps())
    }, [dispatch])

    useEffect(() => {
        const filtered = allTemperaments.filter((temp) =>
        temp.toLowerCase().includes(searchQuery.toLocaleLowerCase())
        );
        setFilteredTemperaments(filtered)
    },[searchQuery, allTemperaments])

    const handleFilterClick = () => {
        dispatch(filterTemp(searchQuery))
    }

    return (
        <div>
            <select
                value={searchQuery}
                onChange={(e)=> setSearchQuery(e.target.value)}
            >
                <option value=''> Select temperament</option>
                {allTemperaments.map((temperament)=>(
                    <option key={temperament} value={temperament}>
                        {temperament}
                    </option>
                ))}
            </select>
                <button onClick={handleFilterClick}>Filter</button>
        </div>
    )
}
export default FilterByTemperament