import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native-elements";

const AboutUsCard = ({cardTitle, cardText, imgSource, onPressCard}) => {
    const onPress = () =>{
        onPressCard(cardTitle)
    }

    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title}>{cardTitle}</Text>
            <Image
                source={imgSource}    
                style={styles.image}
            />
            <Text style={styles.subtitle}>{cardText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"rgb(95, 67, 14)",
        alignItems:"center",
        padding:2,
        width:110,
        borderRadius:3,
    },
    title:{
        color:'wheat',
        fontSize:12,
        fontWeight:"900",
        paddingVertical:10,
    },
    subtitle:{
        color:'wheat',
        fontSize:10,
        paddingVertical:10,
    },
    image:{
        height:50,
        width:50,
    }
})

export default AboutUsCard