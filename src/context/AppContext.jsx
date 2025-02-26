import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext()

let AppContextProvider = (props) => {

    let value = {
        doctors
    }
    return <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
}

export default AppContextProvider