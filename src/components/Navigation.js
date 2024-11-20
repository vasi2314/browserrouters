import { NavLink } from "react-router-dom";
const Navigation=()=>{
    return(
    <>
     <NavLink
        to="/">Home
     </NavLink><br></br>
     <NavLink
        to="/Contact">Contact
     </NavLink><br></br>
     <NavLink
        to="/Educational">Educational
     </NavLink><br></br>
     <NavLink
        to="/Currentskills">Currentskills
     </NavLink><br></br>

    </>
    )
}
export default Navigation