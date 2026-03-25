import { NavLink } from "react-router-dom"

 const Error = () => {
    return (
        <>
         <h2>page not found...</h2>
            <button type="button">
                <NavLink to='/'>Back</NavLink>

        </button>
        </>
       
    )
}

export default Error;