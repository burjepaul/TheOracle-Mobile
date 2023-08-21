import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Progress from 'react-native-progress';

const MatchProgressBar = ({percentage}) => {
    let hslValue
    percentage ?
    hslValue = 120*percentage/100
    :
    hslValue = 0

    return(
        <Progress.Bar 
        color={`hsl(${hslValue}, 100%, 50%)`}
        borderColor="wheat"
        unfilledColor="rgb(95, 67, 14)"
        progress={percentage/100} 
        height={15}
        width={120} 
        >
        <Text style={styles.progrssBarText}>{percentage.toFixed(2)}%</Text> 
    </Progress.Bar>
    )
}

const styles = StyleSheet.create({
    progrssBarText:{
        position:'absolute',
        alignSelf:"center",
        color:"wheat",
        fontWeight:"bold",
        fontSize:11,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -0.5, height: 0.5},
        textShadowRadius: 2
    },
})

export default MatchProgressBar