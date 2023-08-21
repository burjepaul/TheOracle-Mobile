import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import MatchesContainer from "../components/MatchesContainer";

let date = new Date()
date.setDate(date.getDate() - 1)
const day = date.getDate()
const month = date.getMonth() + 1
const year = date.getFullYear()
const build_date = year + "-" + month + "-" + day


const YesterdayResultsScreen = () => {
    const [yesterdayMatches, setYesterdayMatches] = useState([])
    const [error, setError] = useState(null)
    const [loadingData, setLoadingData] = useState(true)
    
    const getYesterdayMatches = async () => {
        try{
            const response = await fetch(`https://fotbal.herokuapp.com/matches/yesterdayResults/?date=${build_date}`)
            const data = await response.json()
            setYesterdayMatches(data)
        }catch(error){
            setError(error.message)
        }
        setLoadingData(false)
    }
    
    useEffect(() => {
        getYesterdayMatches()
    }, [])

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Yesterday's Results</Text>
            {loadingData ? 
            <ActivityIndicator size={70} color="rgb(95, 67, 14)" style={{marginTop:100, backgroundColor:'black'}}/>
            :
            <MatchesContainer matches={yesterdayMatches}/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        textAlign:"center",
        fontSize:25,
        marginVertical:30,
        color:"wheat",
        fontWeight:"bold",
    },
    container:{
        backgroundColor:"black",
        flex:1
    }
})

export default YesterdayResultsScreen