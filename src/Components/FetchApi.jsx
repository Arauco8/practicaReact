/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const FetchApi = () => {
    const [perrito, setPerrito] = useState({}) //inicializo con un objeto vacio
    const [counter, setCounter] = useState(0)
    const url = 'https://dog.ceo/api/breeds/image/random'

    useEffect(() => {
        fetch(url).then((response) => {
            return response.json()
            }).then((data) => {
                setPerrito(data)
                console.log(data)
        })
    }, [counter]) //agrego una dependencia vacia para que haga una sola vez y evito el bucle. Luego le puse el counter para que cada vez que cambie el estado vuelve hacer el fetch

    return (
        <div>
            <img src={perrito.message} alt="" />
            <button onClick={() => setCounter(counter + 1)}>Cambiar el perrito</button>
            <h4>Cantidad de veces que se clickeo el boton: {counter}</h4>
        </div>
    )
}

export default FetchApi