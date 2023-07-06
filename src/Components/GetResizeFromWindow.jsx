/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect } from 'react'

const GetResizeFromWindow = () => {
    useEffect(() => {
        function handleResize() {
            console.log( "Redimiensionar: ", window.innerWidth, " x ", window.innerHeight);
        }

        window.addEventListener("resize", handleResize);
    });

    return (
        <div />
    );
}

export default GetResizeFromWindow