import React, {createContext, useState} from "react";

const AuthContext = createContext();

export const AuthProvider= ({children})=>{
    const[user,setUser]=useState(null);
    const[token, setToken]= useState(null);

    const obtenerToken = async (identificacion, correo)=>{
        const apiUrl="https://apiestudiantes.maosystems.dev/tokens";
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({identificacion, correo})
        });
        if (response.ok){
            const data= await response.json();
            return data.token;
        }else{
            throw new Error("Error al obtener el token");
        }
    }

    const login = async (identificacion, correo)=>{
        const token =  await obtenerToken(identificacion, correo);
        setToken(token);
        setUser({identificacion,correo});
    };

    const logout=() =>{
        setUser(null);
        setToken(null);
    }
    return(
        <AuthContext.Provider value={{user, token, login, logout}}>
            {children}
        </AuthContext.Provider>
    )

};

export default AuthContext;