/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    

  return (
    <div className='parent'>
        <h1>ParentComponent</h1>
        <ChildComponent />
        {console.log('Se renderiza el padre')}
        {/* <p> Salario: {salario} </p> */}
    </div>
    
  )
}

export default ParentComponent