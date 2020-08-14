import React from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'
import {THEME} from "../theme";

export const MyImage = ({image,name,alt_description,onOpen,id}) =>{
    const onPressHandler=()=>{
        onOpen(id)
    }

    return (
        <TouchableOpacity onPress={onPressHandler}>
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image source={{
                        uri: image,
                    }} style={styles.img}/>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.text}>{name}</Text>
                    <Text style={styles.text}>{alt_description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderRadius:5,
        padding:10,
        marginBottom:5,
        marginHorizontal:5,
        borderColor:THEME.MAIN_COLOR,
        flexDirection:'row',
        height: 100
    },
    textContainer:{
        width:'50%'
    },
    text:{
        color:'black'
    },
    imgContainer:{
        alignItems:'center',
        justifyContent:'center',
        padding:1,
        width:'40%'
    },
    img:{
        width:'100%',
        height:'100%',
        resizeMode:'contain'
    }
})
