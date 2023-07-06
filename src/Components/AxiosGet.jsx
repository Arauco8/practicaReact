/* eslint-disable no-unused-vars */
import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'

const AxiosGet = () => {
    const [gatito, setGatito] = useState([{}])
    const url = 'https://api.thecatapi.com/v1/images/search'

    useEffect(() => {
        axios(url)
        .then((response) => setGatito(response.data))
        .catch((err) => alert(err))
    }, [])
    

    console.log(gatito[0])
    return (
        <div>
            <img src={gatito[0].url} alt="" />
        </div>
    )
}

export default AxiosGet