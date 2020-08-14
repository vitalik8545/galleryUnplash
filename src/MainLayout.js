import React,{useContext} from 'react'
import {View,StyleSheet} from 'react-native'
import {TitleGallery} from "./components/TitleGallery";
import {MainScreen} from "./screen/MainScreen";
import {ScreenContext} from "./context/screen/ScreenContext";
import {ImageScreen} from "./screen/ImageScreen";

export const MainLayout = () =>{
    const {idSelected} = useContext(ScreenContext)

    return (
        <View style={styles.mainContainer}>
            <TitleGallery title='Gallery Unsplash'/>
            <View style={styles.container}>
                {idSelected?<ImageScreen/>:<MainScreen/>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1
    },
    container:{
        flex:1
    }
})
