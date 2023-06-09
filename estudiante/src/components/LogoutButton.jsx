import React, {useContext} from "react";
import AuthContext from "./AuthContext";

const LogoutButton = () =>{
    const{logout}= useContext(AuthContext);
    return(
        <button onClick={logout}>Cerrar sesion</button>
    )


}

export default LogoutButton;