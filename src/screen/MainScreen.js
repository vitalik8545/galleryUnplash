import React,{useContext,useCallback,useEffect} from 'react'
import {View,StyleSheet,FlatList} from 'react-native'
import {ImageContext} from "../context/image/imageContext";
import {MyImage} from "../components/MyImage";
import {AppLoader} from "../components/ui/AppLoader";
import {ScreenContext} from "../context/screen/ScreenContext";
import {AppError} from "../components/ui/AppError";

export const MainScreen = () =>{
    const {images,fetchImages,loading,error} = useContext(ImageContext)
    const {changeScreen} = useContext(ScreenContext)
    const loadImage = useCallback(async ()=>await fetchImages(),[fetchImages])

    useEffect(()=>{
        loadImage()
    },[])

    if(loading){
        return <AppLoader/>
    }

    if(error){
        return <AppError text='Some error :('/>
    }

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={item=>item.id}
                data={images}
                renderItem={({item})=><MyImage id={item.id} onOpen={changeScreen} image={item.thumb} name={item.name} alt_description={item.alt_description}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:5
    }
})
