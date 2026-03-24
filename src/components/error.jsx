import { NavLink } from "react-router-dom"

export const Error = () => {
    return (
        <>
         <h2>page not found...</h2>
            <button type="button">
                <NavLink to='/'>Back</NavLink>

        </button>
        </>
       
    )
}