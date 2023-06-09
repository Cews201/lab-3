import { useState } from 'react'
import './App.css'
import AuthContext from './components/AuthContext'
import { useContext } from 'react'
import TablaEstudiantes from './components/tablaestudiantes'
import Login from './components/login'



function App() {

  const {user, token} = useContext(AuthContext);
  
  return (

    <div>
      {
        token ?
        (
          <TablaEstudiantes/>

        ):(
          <Login/>
        )
      }
    </div>    

  )
}

export default App
