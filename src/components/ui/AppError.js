import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import {THEME} from "../../theme";

export const AppError = ({text})=>{
    return (
        <View style={styles.center}>
            <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    center:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    error:{
        fontSize:20,
        color:THEME.DANGER_COLOR
    }
})
