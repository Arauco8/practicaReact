/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import LoboEstepario from "../Components/LoboEstepario";
import ParentComponent from "../Components/ParentComponent";
import ContextWolf from '../Context/ContextLobo';

const Home = () => {

  return (
    <div>
      <h1>Bienvenido a mi sitio</h1>
      <ContextWolf>
        <ParentComponent />
        <LoboEstepario />
      </ContextWolf>
    </div>
  )
}

export default Home