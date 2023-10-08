import { filterTemp } from "../../../redux/actions";
import { useDispatch, useSelector } from 'react-redux'


const Navbar = ({handleChange, handleSubmit}) => {
    const dispatch = useDispatch();
    const temperament = useSelector((state) => state.temperaments)


    const handleFilterByTemp = (event) => {
        dispatch(filterTemp(event.target.value))
    }

    return(
        <>
            <div>
                <select>
                    <option value='A'> Ascendente</option>
                    <option value='D'>Descendente</option>            
                    <option value='maxWeight'>Más pesados</option>
                    <option value='minWeight'>Menos pesados</option>
                </select>
                <select>
                    <option value='BDD'>Base de Datos</option>
                    <option value='API'>API</option>
                </select>
                <select name="filterTemp" value={filterTemp} onChange={handleFilterByTemp}>
                    <option value='All'>All</option>
                </select>
            </div>
            <div>
                <form onChange={(e) => handleChange(e)}>
                    <input placeholder="Search" type="search"/>
                    <button type="submit" onClick={handleSubmit}> 
                        Search 
                    </button>
                </form>
            </div>
        </>
    )

}

export default Navbar;