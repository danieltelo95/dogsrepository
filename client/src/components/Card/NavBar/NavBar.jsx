import FilterByTemperament from "../TemperSearchBar/FilterSearchBar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import {origin, order} from '../../../redux/actions'
import './navbar.styles.css'


const Navbar = ({handleChange, handleSubmit}) => {
    const dispatch = useDispatch();

    const orderDogs = useSelector((state) => state.order)
    const originDogs = useSelector((state) => state.origin)

    const handleOrder = (event) => {
        dispatch(order(event.target.value))
    }

    const handleOrigin = (event) => {
        dispatch(origin(event.target.value))
    }

    return(
        <>
            <div>
                <select name="order" value={orderDogs} onChange={handleOrder} >
                    <option value='A'> Ascendente</option>
                    <option value='D'> Descendente</option>            
                    <option value='maxWeight'>Más pesados</option>
                    <option value='minWeight'>Menos pesados</option>
                </select>
                <select name="origin" value={originDogs} onChange={handleOrigin}>
                    <option value='All'>All</option>
                    <option value='BDD'>Base de Datos</option>
                    <option value='API'>API</option>
                </select>

                <div className="search-container">
                    <form onChange={(e) => handleChange(e)}>
                        <input className="search-input" placeholder="Search..." type="search"/>
                            <button className="search-button" type="submit" onClick={handleSubmit}> 
                                    Search
                            </button>
                    </form>
                </div>

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