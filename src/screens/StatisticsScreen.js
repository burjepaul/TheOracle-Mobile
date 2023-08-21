import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { StatisticsContext } from "../context/statistics.context";
import { ScrollView } from "react-native-gesture-handler";
import StatisticsByCountry from "../components/StatisticsByCountry";
import StatisticsByTops from "../components/StatisticsByTops";

const StatisticsScreen = () => {
    const {statistics} = useContext(StatisticsContext)

    let output
    if (statistics) 
        output = 
            <>
                <StatisticsByCountry statistics={statistics}/>
                <StatisticsByTops statistics={statistics}/>
            </>

    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Statistics</Text>
                {output}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"black",
        flex:1
    },
    title:{
        color:'wheat',
        fontSize:28,
        textAlign:"center",
        marginVertical:30,
        fontWeight:"bold",
    }
})

export default StatisticsScreen