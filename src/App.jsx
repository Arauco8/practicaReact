/* eslint-disable no-unused-vars */
// import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import Recipes from "./Pages/Recipes";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import PokemonList from "./Pages/PokemonList";
import PageNotFound from "./Pages/PageNotFound";
import { routes } from './utils/routes'
import Detail from './Pages/Detail'
import Layout from './Layout/Layout'
import Pokemon from "./Pages/Pokemon";
import Pizza from "./Pages/Pizza"
import Pedidos from "./Pages/Pedidos"
import FavoritesPage from "./Pages/FavoritesPage";



function App() {
  // const [toggle, setToggle] = useState(true)

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path={routes.home} element={<Home/>} />
          <Route path={routes.contact} element={<Contact/>} />
          <Route path={routes.about} element={<About/>} />
          <Route path={routes.recipes} element={<Recipes/>}/>
          <Route path={routes.detail} element={<Detail/>}/>
          <Route path={routes.favoritesPage} element={<FavoritesPage/>}/>
          <Route path={routes.pokemonList} element={<PokemonList/>}/>
          <Route path={routes.pokemon} element={<Pokemon/>}/>
          <Route path={routes.pizza} element={<Pizza/>}/>
          <Route path={routes.pedidos} element={<Pedidos/>}/>
          <Route path={routes.pageNotFound} element={<PageNotFound/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
