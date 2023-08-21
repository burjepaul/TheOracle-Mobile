import React from "react";
import { Text, StyleSheet,View } from "react-native";

const CustomButton = ({title, navigation, routeTo}) => {
    return(
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonText} onPress={() => navigation.navigate(routeTo)}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:'rgb(95, 67, 14)',
        width:"35%",
        alignSelf:"center",
        alignItems:"center",
        borderRadius:6,
        elevation: 10,
        shadowColor: 'white',
        marginBottom:"4%",
    },
    buttonText:{
        color:"wheat",
        padding:10,
        textAlign:"center"
    }
})

export default CustomButton