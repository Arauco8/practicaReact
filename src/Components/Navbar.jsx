/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../utils/routes'
import { useRecipeStates } from '../Context/Context'

const Navbar = () => {
  const {setSearch} = useRecipeStates();
  const navigate = useNavigate();


 /*  useEffect(() => {
    const isVerified = verifyAccount();
    if(isVerified){
      navigate('/')
    } else {
      navigate('/login')
    }

  }, []); */

  return (
    <div className='navbar'>
        <div className='links'>
          <button onClick={() => navigate(-1)}>↩Back</button>
            <Link to={routes.home}><h4 className='link'>Home</h4></Link>
            <Link to={routes.contact}><h4 className='link'>Contact</h4></Link>
            <Link to={routes.about}><h4 className='link'>About</h4></Link>
            <Link to={routes.recipes}><h4 className='link'>Recetas</h4></Link>  
            <Link to={routes.favoritesPage}><h4 className='link'>Recetas Favoritas</h4></Link>  
            <Link to={routes.pokemonList}><h4 className='link'>Pokemon List</h4></Link>
            <Link to={routes.pizza}><h4 className='link'>Pizzas</h4></Link>  
            <Link to={routes.pedidos}><h4 className='link'>Pedidos</h4></Link>    
        </div>
        <input className='search' type="text" onBlur={(e) => setSearch(e.target.value)} />
    </div>
  )
}
export default Navbar