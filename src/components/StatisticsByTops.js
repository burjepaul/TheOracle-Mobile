import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Progress from 'react-native-progress';
import NumericInput from 'react-native-numeric-input';
import { Picker } from "@react-native-picker/picker";

const topCountryExtractor = (statistics, minimNuberOfGames, topReturnedValues, selectedGameType) =>{
    // Takes all data from statistics and returns top "topReturnedValues" values by winning percentage
    const topCountry = []
    let totalGames = 0
    let totalWins = 0
    let topLeagues
    switch (selectedGameType){
        
        case "All":
                topLeagues = []
                for (let i=0; i<statistics.length-1; i++){
                    if (statistics[i].country == statistics[i+1].country){
                        totalGames += statistics[i].total_games
                        totalWins += statistics[i].total_win
                    }
                    else{
                        totalGames += statistics[i].total_games
                        totalWins += statistics[i].total_win
                        if(totalGames > minimNuberOfGames){
                            topCountry.push({
                                country: statistics[i].country,
                                total_games:totalGames,
                                total_win:totalWins,
                                total_lost:totalGames-totalWins,
                                total_win_percentage:(totalWins/totalGames*100)
                            })
                        }
                        totalGames = 0
                        totalWins = 0
                    }
                }
                topLeagues = statistics.filter(league => league.total_games > minimNuberOfGames)
                return [topCountry.sort((a,b) => b.total_win_percentage-a.total_win_percentage).slice(0,topReturnedValues), topLeagues.sort((a,b) => b.total_win_percentage-a.total_win_percentage).slice(0,topReturnedValues)]
            
            case "Result":
                topLeagues = []
                for (let i=0; i<statistics.length-1; i++){
                    if (statistics[i].country == statistics[i+1].country){
                        totalGames += statistics[i].total_games_final_result
                        totalWins += statistics[i].win_final_result
                    }
                    else{
                        totalGames += statistics[i].total_games_final_result
                        totalWins += statistics[i].win_final_result
                        if(totalGames > minimNuberOfGames){
                            topCountry.push({
                                country: statistics[i].country,
                                total_games:totalGames,
                                total_win:totalWins,
                                total_lost:totalGames-totalWins,
                                total_win_percentage:(totalWins/totalGames*100)
                            })
                        }
                        totalGames = 0
                        totalWins = 0
                    }
                }
                topLeagues = statistics.filter(league => league.total_games_final_result > minimNuberOfGames).sort((a,b) => b.win_percentage_final_result-a.win_percentage_final_result).slice(0,topReturnedValues)
                for (let entry in topLeagues){
                    topLeagues[entry].total_win_percentage = topLeagues[entry].win_percentage_final_result
                    topLeagues[entry].total_games = topLeagues[entry].total_games_final_result
                    topLeagues[entry].total_win = topLeagues[entry].win_final_result
                }
                return [topCountry.sort((a,b) => b.total_win_percentage-a.total_win_percentage).slice(0,topReturnedValues), topLeagues]
            
            case "Goals":
                topLeagues = []
                for (let i=0; i<statistics.length-1; i++){
                    if (statistics[i].country == statistics[i+1].country){
                        totalGames += statistics[i].total_games_goals
                        totalWins += statistics[i].win_goals
                    }
                    else{
                        totalGames += statistics[i].total_games_goals
                        totalWins += statistics[i].win_goals
                        if(totalGames > minimNuberOfGames){
                            topCountry.push({
                                country: statistics[i].country,
                                total_games:totalGames,
                                total_win:totalWins,
                                total_lost:totalGames-totalWins,
                                total_win_percentage:(totalWins/totalGames*100)
                            })
                        }
                        totalGames = 0
                        totalWins = 0
                    }
                }
                topLeagues = statistics.filter(league => league.total_games_goals > minimNuberOfGames).sort((a,b) => b.win_percentage_goals-a.win_percentage_goals).slice(0,topReturnedValues)
                for (let entry in topLeagues){
                    topLeagues[entry].total_win_percentage = topLeagues[entry].win_percentage_goals
                    topLeagues[entry].total_games = topLeagues[entry].total_games_goals
                    topLeagues[entry].total_win = topLeagues[entry].win_goals
                }
                return [topCountry.sort((a,b) => b.total_win_percentage-a.total_win_percentage).slice(0,topReturnedValues), topLeagues]
        
    }
}

const StatisticsByTops = ({statistics}) => {
    const [overGames, setOverGames] = useState(100)
    const [selectedTop, setSelectedTop] = useState(5)
    const [selectedCountryLeague, setSelectedCountryLeague] = useState("Country")
    const [selectedGameType, setSelectedGameType] = useState("All")

    const topCountry = topCountryExtractor(statistics, overGames, selectedTop, selectedGameType)[0]
    const topLeague = topCountryExtractor(statistics, overGames, selectedTop, selectedGameType)[1]

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Top Winning Percentage</Text>
            <View style={styles.querry}>

                <View style={styles.topPicker}>
                    <Text style={styles.text}>Top </Text> 
                    <Picker
                        style={styles.picker}
                        selectedValue={selectedTop}
                        dropdownIconColor={"wheat"}
                        color={"rgb(95, 67, 14)"}
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex) =>
                            {
                                setSelectedTop(itemValue)
                            }
                        }>
                        <Picker.Item style={styles.pickerLabel} label={'10'} value={10} key={'10'}/>
                        <Picker.Item style={styles.pickerLabel} label={'5'} value={5} key={'5'}/>
                        <Picker.Item style={styles.pickerLabel} label={'15'} value={15} key={'15'}/>
                    </Picker>
                </View>
                <View style={styles.countryLeaguePicker}>
                    <Text style={styles.text}>By</Text> 
                    <Picker
                        style={styles.picker}
                        selectedValue={selectedCountryLeague}
                        dropdownIconColor={"wheat"}
                        color={"rgb(95, 67, 14)"}
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex) =>
                            {
                                setSelectedCountryLeague(itemValue)
                                selectedCountryLeague === "Country" ? setOverGames(50) : setOverGames(100)
                            }
                        }>
                        <Picker.Item style={styles.pickerLabel} label={'Country'} value={'Country'} key={'Country'}/>
                        <Picker.Item style={styles.pickerLabel} label={'League'} value={'League'} key={'League'}/>
                    </Picker>
                    <Text style={styles.text}>and by </Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={selectedGameType}
                        dropdownIconColor={"wheat"}
                        color={"rgb(95, 67, 14)"}
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex) =>
                            {
                                setSelectedGameType(itemValue)
                            }
                        }>
                        <Picker.Item style={styles.pickerLabel} label={'All'} value={'All'} key={'All'}/>
                        <Picker.Item style={styles.pickerLabel} label={'Result'} value={'Result'} key={'Result'}/>
                        <Picker.Item style={styles.pickerLabel} label={'Goals'} value={'Goals'} key={'Goals'}/>
                    </Picker>
                    <Text style={styles.text}>With</Text>
                </View>

                <View style={styles.numericInputContainer}>
                    <Text style={styles.text}>Over</Text>
                    <NumericInput 
                        onChange={value => setOverGames(value)} 
                        totalWidth={130} 
                        totalHeight={40} 
                        iconSize={25}
                        step={selectedCountryLeague === "Country" ? 20 : 10}
                        valueType='real'
                        rounded 
                        textColor='wheat' 
                        iconStyle={{ color: 'wheat' }} 
                        rightButtonBackgroundColor='rgb(95, 67, 14)' 
                        leftButtonBackgroundColor='rgb(95, 67, 14)'
                        minValue={selectedCountryLeague === "Country" ? 60 : 40}
                        style={{marginHorizontal:5}}
                        initValue={overGames}
                        />
                    <Text style={styles.text}>Games</Text>
                </View>
            </View>
            {
                selectedCountryLeague === "Country" ?
                    topCountry.map(topEntry => {
                        return(
                            <View style={styles.row} key={topEntry.total_games + topEntry.country + topEntry.league}>
                                <Text style={styles.subtitle}>{topEntry.country}</Text>
                                <Progress.Bar 
                                    color='green'
                                    borderColor="wheat"
                                    unfilledColor="rgb(95, 67, 14)"
                                    progress={topEntry.total_win_percentage/100} 
                                    height={20}
                                    width={190} 
                                    >
                                    <Text style={styles.progrssBarText}>{topEntry.total_win_percentage.toFixed(2)}%</Text> 
                                </Progress.Bar>
                                <Text style={styles.subtitle1}>{topEntry.total_win} of {topEntry.total_games} games won</Text>
                            </View>
                    )
                })
                :
                topLeague.map(topEntry => {
                    return(
                        <View style={styles.row} key={topEntry.total_games + topEntry.country + topEntry.league}>
                                <Text style={styles.subtitle}>{topEntry.country} - {topEntry.league}</Text>
                                <Progress.Bar 
                                    color='green'
                                    borderColor="wheat"
                                    unfilledColor="rgb(95, 67, 14)"
                                    progress={topEntry.total_win_percentage/100} 
                                    height={20}
                                    width={200} 
                                    >
                                    <Text style={styles.progrssBarText}>
                                        {topEntry.total_win_percentage.toFixed(2)}%
                                    </Text> 
                                </Progress.Bar>
                                <Text style={styles.subtitle1}>{topEntry.total_win} of {topEntry.total_games} games won</Text>
                            </View>
                    )
                    })

            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"rgba(129, 133, 137, 0.25)",
        marginVertical:30
    },
    title:{
        color:'wheat',
        fontSize:22,
        textAlign:"center",
        marginVertical:20,
        fontWeight:"bold",
    },
    title1:{
        color:'wheat',
        fontSize:16,
        display:"flex",
        textAlign:"center",
        marginVertical:10,
        fontWeight:"bold",
        flexDirection:"row",
        alignItems:"center"
    },
    text:{
        color:'wheat',
        fontSize:16,
        textAlign:"center",
        marginTop:10,
        marginHorizontal:15,
        fontWeight:"bold",
        alignItems:"center"
    },
    subtitle:{
        color:'wheat',
        fontSize:10,
        textAlignVertical:"center",
        marginHorizontal:12,
        width:80,
        maxWidth:100,
    },
    subtitle1:{
        color:'wheat',
        fontSize:10,
        textAlignVertical:"center",
        marginLeft:12,
        width:60,
        maxWidth:100,
    },
    querry:{
        alignItems:"center"
    },  
    numericInputContainer:{
        flexDirection:"row",
    },
    countryLeaguePicker:{
        flexDirection:"row",
    },
    topPicker:{
        flexDirection:"row",
    },
    row:{
        flexDirection:'row',
        marginVertical:10,
        alignItems:"center",
        flex:1
    },
    progrssBarText:{
        position:'absolute',
        alignSelf:"center",
        color:"wheat",
        fontWeight:"bold"
    },
    picker:{
        color:'wheat',
        fontWeight:"bold",
        backgroundColor:"rgb(95, 67, 14)",
        alignSelf:"flex-end",
        fontSize:15,
        borderRadius:115,
        alignSelf: 'center',
        width:150,
        height:60,
        transform: [
            { scaleX: 0.5 }, 
            { scaleY: 0.5 },
         ],
         marginHorizontal:-45,
         marginTop:-10
    },
    pickerLabel:{
        color:'wheat',
        fontWeight:"bold",
        fontSize:20,
        backgroundColor:"rgb(95, 67, 14)",
    }
})

export default StatisticsByTops