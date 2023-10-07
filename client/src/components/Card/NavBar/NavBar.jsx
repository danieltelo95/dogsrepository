
const Navbar = ({handleChange, handleSubmit}) => {

    return(
        <div>
            <form onChange={(e) => handleChange(e)}>
                <input placeholder="Search" type="search"/>
                <button type="submit" onClick={handleSubmit}> 
                    Search 
                </button>
            </form>
        </div>
    )

}

export default Navbar;