import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import RadioButtonsGroup from "./RadioButtonsGoup";
import CircularBar from "./CircularBar";
import createStatisticsAllLeagusByCountry from '../config/helpers'

const StatisticsByCountry = ({statistics}) => {
    const countries = [...new Set(statistics.map(a => a.country))]

    const [leagueStats, setLeagueStats] = useState()

    const [selectedCountry, setselectedCountry] = useState(countries[0])
    const [selectedLeague, setSelectedLeague] = useState(statistics[0].league)
    const [selectedGameType, setSelectedGameType] = useState("All Games")

    let countryAndLeaguesCollection = {}
    statistics.forEach(element => {
        if (!countryAndLeaguesCollection[element.country]){
            countryAndLeaguesCollection[element.country] = [element.league]
        }
        else if(countryAndLeaguesCollection[element.country].length === 1){
            countryAndLeaguesCollection[element.country].unshift("All")
            countryAndLeaguesCollection[element.country].push(element.league)
        }
        else{
            countryAndLeaguesCollection[element.country].push(element.league)
        }
    });

    useEffect(() => {
        if (statistics){
            const data = statistics.find((statisticEntry) => (statisticEntry.country === selectedCountry) && (statisticEntry.league === selectedLeague))
            if (selectedLeague === "All"){
                let dataTemplate = createStatisticsAllLeagusByCountry(statistics, selectedCountry)
                setLeagueStats(dataTemplate)
        }
        else{
            setLeagueStats(data)
        }  
    }
},[selectedCountry,selectedLeague, statistics])

    let leagueStatsToForward = {...leagueStats}

    if(selectedGameType === "Predictions on results"){
        leagueStatsToForward = {...leagueStats}
        leagueStatsToForward.total_games = leagueStats.total_games_final_result
        leagueStatsToForward.total_win = leagueStats.win_final_result
        leagueStatsToForward.total_lost = leagueStats.lost_final_result
        leagueStatsToForward.total_win_percentage = leagueStats.win_percentage_final_result
    }
    else if(selectedGameType === "Predictions on goals"){
        leagueStatsToForward = {...leagueStats}
        leagueStatsToForward.total_games = leagueStats.total_games_goals
        leagueStatsToForward.total_win = leagueStats.win_goals
        leagueStatsToForward.total_lost = leagueStats.lost_goals
        leagueStatsToForward.total_win_percentage = leagueStats.win_percentage_goals
        leagueStatsToForward.average_odd_win = 0
        leagueStatsToForward.average_odd_lost = 0
    }
    else if(selectedGameType === "All Games"){
        leagueStatsToForward = {...leagueStats}
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Wins by country and league</Text>

            <View style={styles.queryContainer}>
                <Text style={styles.subtitle}>Select Country:</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={selectedCountry}
                    dropdownIconColor={"wheat"}
                    color={"rgb(95, 67, 14)"}
                    mode="dropdown"
                    onValueChange={(itemValue, itemIndex) =>
                        {
                            setselectedCountry(itemValue)
                            setSelectedLeague("All")
                        }
                    }>
                    {countries.map(country => {
                        return(
                            <Picker.Item style={styles.pickerLabel} label={country} value={country} key={country}/>
                            )
                        })}
                </Picker>
            </View>
            <View style={styles.queryContainer}>
                <Text style={styles.subtitle}>Select League:</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={selectedLeague}
                    dropdownIconColor={"wheat"}
                    color={"rgb(95, 67, 14)"}
                    mode="dropdown"
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLeague(itemValue)
                    }>
                    {countryAndLeaguesCollection[selectedCountry].map(country => {
                        return(
                            <Picker.Item style={styles.pickerLabel} label={country} value={country} key={country}/>
                            )
                        })}
                </Picker>
            </View>
            <View style={styles.queryContainer}>
                <RadioButtonsGroup onChangeType={setSelectedGameType}/>
            </View>
            {leagueStats?
            <View style={styles.queryContainer}>
                <CircularBar leagueStats={leagueStatsToForward}/>
            </View>
            :
            <></>}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"rgba(129, 133, 137, 0.25)",
    },
    title:{
        color:'wheat',
        fontSize:22,
        textAlign:"center",
        marginVertical:20,
        fontWeight:"bold",
    },
    subtitle:{
        color:'wheat',
        fontSize:18,
        textAlignVertical:"center",
        marginLeft:15,
    },
    queryContainer:{
        flexDirection:"row",
    },
    picker:{
        color:'wheat',
        fontWeight:"bold",
        backgroundColor:"rgb(95, 67, 14)",
        alignSelf:"flex-end",
        fontSize:15,
        borderRadius:115,
        alignSelf: 'center',
        width:260,
        height:60,
        transform: [
            { scaleX: 0.6 }, 
            { scaleY: 0.6 },
         ],
    },
    pickerLabel:{
        color:'wheat',
        fontWeight:"bold",
        fontSize:20,
        backgroundColor:"rgb(95, 67, 14)",
    }
})

export default StatisticsByCountry