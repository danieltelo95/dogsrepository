
const Navbar = ({handleChange, handleSubmit}) => {

    return(
        <>
            <div>
                <select>
                    <option value='A'> Ascendente</option>
                    <option value='D'>Descendente</option>
                </select>

                <select>
                    <option value='maxWeight'>Más pesados</option>
                    <option value='minWeight'>Menos pesados</option>
                </select>
                <select>
                    <option value='BDD'>Base de Datos</option>
                    <option value='API'>API</option>
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