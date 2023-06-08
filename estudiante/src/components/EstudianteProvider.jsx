import React, {useState, useEffect} from "react";
import EstudianteContexto from "./EstudianteContexto";

function EstudianteProvider({children}){
    const [estudiantes, setEstudiantes]=useState([]);

    let myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWNhY2lvbiI6MTAyNDQ2ODU1MSwiY29ycmVvIjoiY2FtaWxvd2lsbGFuc29uQGdtYWlsLmNvbSIsImlhdCI6MTY4Mjk5ODg3NiwiZXhwIjoxNjgzNjAzNjc2fQ.8NV0RB5MY8NPRbJQiwhUn4F0S_z3PfmXe5Os3frGWo0");

    
    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
};

useEffect (()=>{
    fetch("https://apiestudiantes.maosystems.dev/estudiantes", requestOptions)
    .then(response => response.json())
    .then(result => setEstudiantes(result.data))
    .catch(error => console.log('error', error));
},[]);

return(
    <EstudianteContexto.Provider value={estudiantes}>
        {children}
    </EstudianteContexto.Provider>
)
}

export default EstudianteProvider;
