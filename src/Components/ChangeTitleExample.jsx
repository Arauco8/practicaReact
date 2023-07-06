/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

const ChangeTitleExample = () => {
        const[ title, setTitle] = useState (
            "Certified Tech Developer | Digital House"
        );

        useEffect(() => {
            document.title = title;
        }, [title]);
    return (
        <div />
    )
}

export default ChangeTitleExample