import {ScreenContext} from "./ScreenContext";
import React,{useReducer} from "react";
import {ScreenReducer} from "./screenReducer";
import {CHANGE_SCREEN} from "../types";

export const ScreenState = ({children}) =>{
    const [state,dispatch] = useReducer(ScreenReducer,null)

    const changeScreen=id=>{
        dispatch({type:CHANGE_SCREEN,payload:id})
    }

    return (
        <ScreenContext.Provider
            value={{
                idSelected:state,
                changeScreen
            }}
        >
            {children}
        </ScreenContext.Provider>
    )
}
