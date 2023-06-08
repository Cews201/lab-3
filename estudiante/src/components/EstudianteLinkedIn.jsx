import React, {useContext} from "react";
import EstudianteContexto from "./EstudianteContexto";

function EstudianteLinkedIn(){
    const estudiantes=useContext(EstudianteContexto);
    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>LinkedIn</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    estudiantes.map(estudiante =>(
                        <tr key={estudiante.estudiante_id}>
                            <td>{estudiante.estudiante_id}</td>
                            <td>{estudiante.estudiante_linkedin}</td>

                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default EstudianteLinkedIn;