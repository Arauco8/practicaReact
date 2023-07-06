/* eslint-disable no-unused-vars */
// rafce

import React, { useEffect, useState } from 'react'

const FuncComponent = () => {
    console.log("Función: Primero se renderiza esto")
    const [user, setUser] = useState({
        name: 'Arauco'
    })

    //useEffect(<funcion>, <dependencias>)
    // se ejecuta solo cuando se monta o para que se ejecute otra vez hay que agregar una dependencia
    useEffect(() => {
        console.log("Función: Se montó el componente")

        return () => {
            console.log("Función: Se desmontó el componente")
        }
    },  [])

    useEffect(() => {
        console.log("Función: Se actualiza el estado user")
    }, [user])


    return (
        <div>
            {console.log("Función: se ejecuta el render")}
            <h1>Componente de Función</h1>
            <h1>{user.name}</h1>
            <button onClick={() => setUser({name: 'Lautaro'})}>
                    Cambiar el Nombre</button>
        </div>
    )
}

export default FuncComponent
