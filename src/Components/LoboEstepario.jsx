/* eslint-disable no-unused-vars */
import React from 'react'
import { useGlobalWolfStates } from '../Context/ContextLobo';

const LoboEstepario = () => {
    const { salario } = useGlobalWolfStates();

  return (
    <div className='lobo-estepario'>
        <img className='lobo' src="/lobo.png" alt="lobo" />
        <h3>Total: {salario*6}</h3>
        {console.log('Se renderiza el lobo')}
    </div>
  )

}

export default LoboEstepario