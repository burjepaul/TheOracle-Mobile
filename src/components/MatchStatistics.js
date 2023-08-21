import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatisticsContext } from "../context/statistics.context";
import {createStatisticsAllLeagusByCountry} from "../config/helpers";
import MatchProgressBar from "./MatchProgressBar";

const MatchStatistics = ({league, country, prediction}) => {
    const {statistics} = useContext(StatisticsContext)

    const existsCountry = statistics.find((statisticEntry) => (statisticEntry.country === country))
    const exitstLeague = statistics.find((statisticEntry) => (statisticEntry.country === country) && (statisticEntry.league === league))
    const dataCountry = createStatisticsAllLeagusByCountry(statistics, country)
    const dataLeague = statistics.find((statisticEntry) => (statisticEntry.country === country) && statisticEntry.league === league)

    if (existsCountry){
        return(
            <View>
            <View style={styles.statistics}>
                <Text style={styles.text}>{country} - </Text>
                <MatchProgressBar percentage={dataCountry.total_win_percentage}/>
                <Text style={styles.text}> {dataCountry.total_win} wins of {dataCountry.total_games}</Text>
            </View>

            {exitstLeague ?
            <View style={styles.statistics}>
                <Text style={styles.text}>{league} - </Text>
                <MatchProgressBar percentage={dataLeague.total_win_percentage}/>
                <Text style={styles.text}> {dataLeague.total_win} wins of {dataLeague.total_games}</Text>
            </View>
            :
            <></>
            }

            {
                prediction.length > 4 && exitstLeague ? //if it's an on Goals(true) or on Final Result(false) 
                    dataLeague.total_games_goals > 10 ? //if there are more than 10 matches on Goals display league stats else display country stats
                        <View style={styles.statistics}>
                            <Text style={styles.text}>{league} on Goals - </Text>
                            <MatchProgressBar percentage={dataLeague.win_percentage_goals}/>
                            <Text style={styles.text}> {dataLeague.win_goals} wins of {dataLeague.total_games_goals}</Text>
                        </View>
                        :
                        <View style={styles.statistics}>
                            <Text style={styles.text}>{country} on Goals - </Text>
                            <MatchProgressBar percentage={dataCountry.win_percentage_goals}/>
                            <Text style={styles.text}> {dataCountry.win_goals} wins of {dataCountry.total_games_goals}</Text>                        
                        </View>
                :
                        exitstLeague ?
                            dataLeague.total_final_result > 10 ?
                                <View style={styles.statistics}>
                                    <Text style={styles.text}>{league} on Results - </Text>
                                    <MatchProgressBar percentage={dataLeague.win_percentage_final_result}/>
                                    <Text style={styles.text}> {dataLeague.win_final_result} wins of {dataLeague.total_games_final_result}</Text>
                                </View>
                            :
                                <View style={styles.statistics}>
                                    <Text style={styles.text}>{country} on Results - </Text>
                                    <MatchProgressBar percentage={dataCountry.win_percentage_final_result}/>
                                    <Text style={styles.text}> {dataCountry.win_final_result} wins of {dataCountry.total_games_final_result}</Text>                        
                                </View>
                        :
                            <View style={styles.statistics}>
                                <Text style={styles.text}>{country} on Results - </Text>
                                <MatchProgressBar percentage={dataCountry.win_percentage_final_result}/>
                                <Text style={styles.text}> {dataCountry.win_final_result} wins of {dataCountry.total_games_final_result}</Text>                        
                            </View>
            }
        </View>
    )
}else{
    return(
        <View style={styles.statistics}>
            <Text style={styles.text}>No data available for this Country</Text>
        </View>
    )
}
}

const styles = StyleSheet.create({
    statistics:{
        color:"wheat",
        textAlign:"center",
        flexDirection:"row",
        marginVertical:3,
        alignSelf:"center"
    },
    text:{
        color:'wheat',
        fontSize:11
    }
})

export default MatchStatistics