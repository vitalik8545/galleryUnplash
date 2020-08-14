import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {THEME} from "../theme";

export const TitleGallery = ({title}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:70,
        alignItems:'center',
        justifyContent:'flex-end',
        backgroundColor:THEME.MAIN_COLOR
    },
    text:{
        marginBottom:20,
        color:THEME.MAIN_TEXT_COLOR,
        fontSize:15
    }
})
