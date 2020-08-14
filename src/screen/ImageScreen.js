import React,{useContext} from 'react'
import {View,Image,StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import {ImageContext} from "../context/image/imageContext";
import {ScreenContext} from "../context/screen/ScreenContext";
import {AppLoader} from "../components/ui/AppLoader";
import Text from "react-native-web/dist/exports/Text";

export const ImageScreen = () =>{
const {images,loading,showLoader,hideLoader} = useContext(ImageContext)
const {idSelected,changeScreen} = useContext(ScreenContext)


    const imagePath = images.find(image=>image.id==idSelected).raw

    const onClose = () =>{
        changeScreen(null)
    }



    return(
        <View style={styles.container}>
            <AntDesign.Button name="back" onPress={onClose} backgroundColor='transparent' size={24} color="#767676" />
            {loading?<AppLoader/>:<View/>}
            <View style={styles.containerImg}>
            <Image
                onLoadStart={()=>{
                    console.log('started load image')
                    showLoader()
                }}
                onLoad={()=>{
                    console.log('finish load image')
                    hideLoader()
                }
                }
                source={{
                    uri: imagePath,
                }} style={styles.img}
            />
        </View>


        </View>
    )
}

const styles = StyleSheet.create({
    containerImg:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    container:{
        flex:1
    },
    img:{
        width:'100%',
        height:'100%',
        resizeMode:'contain'
    }
})
