import {CLEAR_ERROR, GET_IMAGES, HIDE_LOADER, SET_ERROR, SHOW_LOADER} from "../types";

const handlers = {
    [GET_IMAGES]:(state,{images})=>({...state,images:images}),
    [SHOW_LOADER]:(state)=>({...state,loading:true}),
    [HIDE_LOADER]:(state)=>({...state,loading:false}),
    [CLEAR_ERROR]:(state)=>({...state,error:null}),
    [SET_ERROR]:(state,{error})=>({...state,error:error}),
    DEFAULT:state=>state
}


export const ImageReducer = (state,action) =>{
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state,action)
}
