import { createContext, useReducer } from "react"
import AppContextReducer from "./reducers";
import initialState from "./initialState";

const AppContext = createContext();

const AppContextProvider = ({children}) => {
    const [myAppState, dispatch] = useReducer(AppContextReducer, initialState);

    return <AppContext.Provider value={{myAppState, dispatch}}>
                {children}
           </AppContext.Provider>
}

export default AppContext;
export {AppContextProvider};