import {ImageContext} from "./imageContext";
import React,{useReducer} from "react";
import {ImageReducer} from "./ImageReducer";
import {Http} from "../../http";
import {CLEAR_ERROR, GET_IMAGES, HIDE_LOADER, SET_ERROR, SHOW_LOADER} from "../types";

export const ImageState=({children})=>{
    const initialState = {
        images:[],
        error:null,
        loading:false
    }

    const [state,dispatch] = useReducer(ImageReducer,initialState)

     const get = async (url)=>{
        const config={
            method:'GET',
            headers:Http.HEADERS
        }

        const response = await fetch(url,config)
        return await response.json()
    }

    const showLoader = () =>dispatch({type:SHOW_LOADER})
    const hideLoader = () =>dispatch({type:HIDE_LOADER})
    const clearError = () =>dispatch({type:CLEAR_ERROR})
    const setError = error =>dispatch({type:SET_ERROR,error})

    const fetchImages = async () =>{
        try {
            clearError()
            showLoader()
            const jsonData =
                await get('https://api.unsplash.com/photos/?client_id=fH8KMGqYYbkoiZ220QXCEriMJox1FnF5FidGUyUqpIU')

            let images = []
            for (let i = 0; i < jsonData.length; i++) {
                images.push({
                    id:jsonData[i].id,
                    thumb:jsonData[i].urls.thumb,
                    raw:jsonData[i].urls.raw,
                    alt_description:jsonData[i].alt_description,
                    name:jsonData[i].user.name
                })
            }

            dispatch({type:GET_IMAGES,images})
        }catch (e){
            setError(e)
        }finally {
            hideLoader()
        }
    }

    return(
        <ImageContext.Provider
            value={{
                images:state.images,
                fetchImages,
                loading:state.loading,
                showLoader,
                hideLoader,
                error:state.error
            }}
        >
            {children}
        </ImageContext.Provider>
    )
}
