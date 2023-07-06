import { createContext, useContext, useState } from "react";

const GlobalStateWolf = createContext();
console.log(GlobalStateWolf)
const ContextWolf = ({children}) => {
    // Estados Globales
    const [salario, setSalario] = useState(150000);
    const [total, setTotal] = useState(0)

    return (
        <GlobalStateWolf.Provider value={{salario, 
            setSalario, 
            total, 
            setTotal}}>
            {children}
        </GlobalStateWolf.Provider>
    )
}

export default ContextWolf;

export const useGlobalWolfStates = () => {
    return useContext(GlobalStateWolf);
}