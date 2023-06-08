import React, {useContext} from "react";
import EstudianteContexto from "./EstudianteContexto";

function EstudianteLista(){
    const estudiantes=useContext(EstudianteContexto);
    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apelllido</th>
                    <th>Correo</th>
                    <th>Celular</th>
                    <th>LinkedIn</th>
                    <th>GirHub</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {
                    estudiantes.map(estudiante =>(
                        <tr key={estudiante.estudiante_id}>
                            <td>{estudiante.estudiante_id}</td>
                            <td>{estudiante.estudiante_nombres}</td>
                            <td>{estudiante.estudiante_apellidos}</td>                            
                            <td>{estudiante.estudiante_correo}</td>
                            <td>{estudiante.estudiante_celular}</td>
                            <td>{estudiante.estudiante_linkedin}</td>
                            <td>{estudiante.estudiante_github}</td>
                            <td>{estudiante.estudiante_estado}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default EstudianteLista;