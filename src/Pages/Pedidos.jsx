/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Pizza from './Pizza'

const Pedidos = () => {
    const[show,setShow] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 2000);
    }, [])

  return (
    <div>
        <h2>Su pedido:</h2>
        {show && <Pizza/> }
        <button onClick={() => setShow(false)}>
            Cancelar</button>
    </div>
  )
}

export default Pedidos