/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { createContext, useContext, useState, useReducer } from "react";

const RecipeStates = createContext()

const initialState = JSON.parse(localStorage.getItem('favs')) || []

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_FAV':
            return [...state, action.payload];
        case 'DELETE_FAV':
            return [];
        default:
            throw new Error();
    }
}

const Context = ({children}) => {
    const [search, setSearch] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);
    
    //const [favs, setFavs] = useState([])

    useEffect(() => {
        console.log(state)
        localStorage.setItem('favs', JSON.stringify(state))
    })

    console.log(state)
    return (
        <RecipeStates.Provider value={{
            search, setSearch,
            state, dispatch
            //favs, setFavs
        }}>
            {children}
        </RecipeStates.Provider>
    )
}

export default Context

export const useRecipeStates = () => useContext(RecipeStates);