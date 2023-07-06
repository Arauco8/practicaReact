/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useReducer } from 'react';

const initialState = {
    users: [
        { id: 1, userName: "Juan Domingo", email: "juanperon@gmail.com"},
        { id: 2, userName: "Ernesto Guevara", email: "guevara@gmail.com"},
        { id: 3, userName: "Mario Roberto", email: "santucho@gmail.com"},
    ],
};

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_USER':
            return {users: [...state.users, action.payload]}
        case 'DELETE_USER' :
            return {}
        default:
            throw new Error()
    }
}

const UserList = () => {

        const [state, dispatch] = useReducer(reducer, initialState)
        const [newUser, setNewUser] = useState({
            id:'',
            userName:'',
            email:''
        })
        const handleChange = (e) => {
            setNewUser({
                ...newUser,
                [e.target.name]: e.target.value
            })
        }
        const handleSubmit = (e) => {
            e.preventDefault()
            dispatch({type: 'ADD_USER', payload: newUser})
            console.log(state)
        }

        useEffect(() => {
            console.log(state)
        }, [state])

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" name='id' onChange={handleChange}/>
            <input type="text" name='userName' onChange={handleChange}/>
            <input type="text" name='email' onChange={handleChange}/>
            <button>Submit</button>
        </form>
    )
}

export default UserList