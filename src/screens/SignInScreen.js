import React from "react";
import { View, StyleSheet, Text } from "react-native";

const SignInScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>For now, there is no need for an account!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"black",
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        color:'wheat',
        fontSize:30,
        fontWeight:"bold",
        textAlign:"center",
        marginHorizontal:30
    }
})

export default SignInScreen