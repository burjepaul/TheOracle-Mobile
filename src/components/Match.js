import React from "react";
import { Text,View, StyleSheet, Image } from "react-native";
import flags from "../config/flags";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import MatchStatistics from "./MatchStatistics";
import { convertToUTC } from "../config/helpers";

const Match = ({league, country, homeTeam, awayTeam, date, hour, prediction, odd, result}) => {
    let colorToRender
    const utcTime = convertToUTC(date,hour)

    const [displayStats, setDisplayStats] = useState(false)

    if (result === "WIN"){
        colorToRender = "green"
    }else if (result === "LOST"){
        colorToRender = "red"
    }else if (result === "POSTPONED"){
        colorToRender = "blue"
    }else{
        colorToRender = "rgba(29, 85, 3, 0.836)"
    }

    let fullPrediction
    if (prediction[0] == '1'){
        if(prediction.length < 2) fullPrediction = homeTeam + ' to win'
        else fullPrediction = homeTeam + prediction.slice(1)
    }else if(prediction[0] == '2'){
        if(prediction.length < 2) fullPrediction = awayTeam + ' to win'
        else fullPrediction = awayTeam + prediction.slice(1)
    }
    else{
        fullPrediction = prediction
    }    


    return (
        <View style={styles.container}>
            <View style={styles.countryLeageContainer}>
                <Text style={styles.title}>
                    <Image
                    source={flags[country.replace(" ","").replace(" ","").replace(" ","")]}    
                    style={styles.flagImage}
                    >
                    </Image>
                    <Text>    </Text>
                    <Text>
                        {country} - {league} 
                        <Text>    </Text> 
                        <TouchableOpacity onPress={() => {setDisplayStats(!displayStats)}}>
                            {displayStats ? 
                            <AntDesign name="up" size={20} color="wheat"/>
                            :
                            <AntDesign name="down" size={20} color="wheat" />
                        }
                        </TouchableOpacity>
                    </Text>
                </Text>
                <View style={styles.statisticsContainer}>
                    {displayStats ? 
                    <MatchStatistics league={league} country={country} prediction={prediction}/>
                    :
                    null   
                }
                </View>
            </View>
            <View style={{backgroundColor:`${colorToRender}`}}>

                <View style={styles.dateGameContainer}>
                    
                    <View style={styles.time}>
                        <Text style={styles.date}>{utcTime[0]} at</Text>
                        <Text style={styles.hour}> {utcTime[1]} </Text>
                    </View>

                    <View style={styles.game}>
                        <Text style={styles.match}>{homeTeam} - {awayTeam}</Text>
                        <Text style={styles.prediction}>{fullPrediction}</Text>
                    </View>

                    <View>
                        <Text style={styles.prediction}>{result}</Text>
                        {
                            odd ? 
                            <Text style={styles.prediction}>odd:{odd}</Text>
                            :
                            null
                        }
                    </View>

                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom:20,
    },
    dateGameContainer:{
        marginVertical:5,
        flexDirection:"row",
    },
    countryLeageContainer:{
        color:"wheat",
        textAlign:"center",
        fontWeight:"bold",
        backgroundColor:"grey",
        fontSize:13,
        padding:4,
        paddingHorizontal:14,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        alignSelf: 'center',
    },
    title:{
        marginBottom:7,
        color:"wheat",
        textAlign:"center",
        alignSelf:"center"
    },
    flagImage:{
        height:15,
        width:20,
        marginRight:10,
    },
    match:{
        color:"wheat",
        textAlign:"center",
        fontWeight:"bold",
        fontSize:10
    },
    prediction:{
        color:"wheat",
        textAlign:"center",
        fontSize:10,
        paddingBottom:5,
        marginRight:10,
    },
    time:{
        color:"wheat",
        textAlign:"center",
        fontWeight:"bold",
        marginTop:5,
        marginLeft:10
    },
    date:{
        color:"wheat",
        fontWeight:"bold",
        fontSize:8
    },
    hour:{
        color:"wheat",
        textAlign:"center",
        fontWeight:"bold",
        fontSize:8
    },
    game:{
        marginHorizontal:15,
        alignSelf:"center",
        alignItems:"center",
        flex:1
    }
})

export default Match