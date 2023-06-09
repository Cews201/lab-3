import React, { useContext, useState } from "react";
import AuthContext from "./AuthContext";
import "../assets/css/login.css" 


const Login =() =>{

    const [identificacion, setIdentificacion] = useState("");
    const[correo, setCorreo]=useState("");
    const auth = useContext(AuthContext);


    const enviarForm = async (e)=>{
        e.preventDefault();
        console.log("Enviando Formulario");
        await auth.login(identificacion,correo);
    }

    return(
        <div className="login-container">
            <form className="login-form" onSubmit={enviarForm}>
                <input 
                    type="number"
                    placeholder="ingrese su identificacion"
                    value={identificacion}
                    onChange={(e)=> setIdentificacion(e.target.value)} />
                <input 
                    type="email"
                    placeholder="ingrese su correo electrónico" 
                    value={correo}
                    onChange={(e)=> setCorreo(e.target.value)}/>
                    <button type="submit">Iniciar sesion</button>

            </form>
        </div>
    )

}

export default Login;