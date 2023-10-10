import FilterByTemperament from "../TemperSearchBar/FilterSearchBar";
import { order, origin } from "../../../redux/actions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'


const Navbar = ({handleChange, handleSubmit}) => {
    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(order(event.target.value))
    }

    const handleOrigin = (event) => {
        dispatch(origin(event.target.value))
    }

    return(
        <>
            <div>
                <select name="order" value={order} onChange={handleOrder} >
                    <option value='A'> Ascendente</option>
                    <option value='D'> Descendente</option>            
                    <option value='maxWeight'>Más pesados</option>
                    <option value='minWeight'>Menos pesados</option>
                </select>
                <select name="origin" value={origin} onChange={handleOrigin}>
                    <option value='All'>All</option>
                    <option value='BDD'>Base de Datos</option>
                    <option value='API'>API</option>
                </select>
                
                <form onChange={(e) => handleChange(e)}>
                    <input placeholder="Search" type="search"/>
                        <button type="submit" onClick={handleSubmit}> 
                                Search 
                        </button>
                </form>

                <div>
                    <FilterByTemperament/>
                </div>

                <div>            
                    <Link to={'/create'}>
                        <button > 
                            Create 
                        </button>
                    </Link>
                    
                </div>
            </div>
        </>
    )

}

export default Navbar;