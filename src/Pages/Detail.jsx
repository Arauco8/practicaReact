/* eslint-disable no-unused-vars */
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRecipeStates } from '../Context/Context'

const Detail = () => {
    const [detail, setDetail] = useState({})
    const params = useParams()
    //const {setFavs, favs} = useRecipeStates() 
    const {dispatch} = useRecipeStates();

    const apiKey = '8cae9d1bb02c4802a8f212ec40f5e92c'
    const url = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apiKey}`

    useEffect(() => {
        axios(url)
        .then(res => setDetail(res.data))
    }, [url])

    console.log(detail)
    return (
        <div>
            Detalle n° {params.id}
            <h2>{detail.title}</h2>
            <img src={detail.image} alt="" />
            <p>Ingredientes: </p>
            {detail.extendedIngredients && detail.extendedIngredients?.map((ingredients) => 
            <li key={ingredients.id}>{ingredients.name}</li>
            )}
            <button
            onClick={() => dispatch({type:'ADD_FAV', payload: detail})}
            //onClick={() => setFavs((prevFavs) => [...prevFavs ,detail])}
            // onClick={() => setFavs([...favs ,detail])} Lo mismo que la linea de arriba
            >⭐</button> 
        </div>
    )
}

export default Detail