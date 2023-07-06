/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'

const Pizza = () => {

    useEffect(() => {
        console.log("Se Cargo el componente")
        return () => {
            console.log('El Componente fue desmontado')
        }
    })
  return (
    <div>Pizza</div>
  )
}

export default Pizza