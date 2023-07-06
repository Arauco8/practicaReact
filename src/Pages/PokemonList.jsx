/* eslint-disable no-unused-vars */

import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Pokemon = () => {

    const [pokeList, setPokeList] = useState([]) // inicializo como un array
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
    useEffect(() => {
        axios(url)
        .then( res => setPokeList(res.data.results))
    }, [])

    console.log(pokeList)
    return (
        <div>
            {pokeList.map((poke, index) => (
                <Link key={index} to={`/pokemon/${poke.name}`}>
                    <li>{poke.name}</li>
                </Link>
            ))}
        </div>
    )
}

export default Pokemon