import React from "react";
import { View, StyleSheet, Text } from "react-native";

import RadioButtonRN from 'radio-buttons-react-native';


const RadioButtonsGroup = ({onChangeType}) => {
    const data = [
    {
      label: 'All Games'
     },
     {
      label: 'Predictions on results'
     },
     {
      label: 'Predictions on goals'
     },
    ];
    return(
    <RadioButtonRN
        data={data}
        initial={1}
        selectedBtn={(e) => onChangeType(e["label"])}
        style={styles.radioButtons}
        activeColor={'wheat'}
        deactiveColor={'wheat'}
        boxDeactiveBgColor={'rgb(95, 67, 14)'}
        textColor={'wheat'}
    />
    )
}

const styles = StyleSheet.create({
    radioButtons:{
        flex:1,
        height:50,
        width:210,
        marginHorizontal:60,
        flexDirection:"column",
        alignSelf:"center",
        alignItems:"center"
    }
})

export default RadioButtonsGroup