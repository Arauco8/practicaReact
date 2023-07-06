/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import Login from "./Login";
import Home from "./Home";

const UserLogged = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        function checkUser() {
            const item = localStorage.getItem("User");
            if (item) setUser(item);
        }

        window.addEventListener("storage", checkUser);

    return () => {
        window.removeEventListener("storage", checkUser);
        };
    }, []);

    return <>{user ? <Home /> : <Login />}</>;
};

export default UserLogged;