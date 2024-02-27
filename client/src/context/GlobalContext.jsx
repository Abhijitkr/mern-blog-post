import { createContext } from "react";


export const GlobalContext = createContext(null);

export default function GlobalState({children}){
    const test="testing";
    return <GlobalContext.Provider value={{test}}>{children}</GlobalContext.Provider>
} 