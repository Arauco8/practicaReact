/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState, useContext} from 'react'
import { useGlobalWolfStates } from '../Context/ContextLobo'

const ChildComponent = () => {
    const { salario , setSalario} = useGlobalWolfStates();

  return (
    <div className='child'>
        <h3>ChildComponent</h3>
        <p>Cuanto ganas por semestre?</p>
        <h3>Total: {salario*6}</h3>
        <button onClick={() => setSalario(salario + 60000)}>Aumentar</button>
        {console.log('Se renderiza el hijo')}
    </div>
  )
}

export default ChildComponent