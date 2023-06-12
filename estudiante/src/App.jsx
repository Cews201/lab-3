import { useState } from 'react'
import './App.css'
import AuthContext from './components/AuthContext'
import { useContext } from 'react'
import TablaEstudiantes from './components/tablaestudiantes'
import Login from './components/login'
import LogoutButton from './components/LogoutButton'
import Contador from './components/contador'


function App() {

  const {user, token} = useContext(AuthContext);
  
  return (

    <div>
      {
        token ?
        (
          <>
          <nav>
            <LogoutButton/>
          </nav>          
          <TablaEstudiantes/>
          <Contador/>
          </>    


        ):(
          <Login/>
        )
      }
    </div>    

  )
}

export default App
