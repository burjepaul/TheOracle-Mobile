import React from "react";
import { useState, useEffect } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import MatchesContainer from "../components/MatchesContainer";

const TodayMatches = () => {
    const [todayMatches, setTodayMatches] = useState([])
    const [error, setError] = useState(null)
    const [loadingData, setLoadingData] = useState(true)
    
    const getTodayMatches = async () => {
        try{
            const response = await fetch(`https://fotbal.herokuapp.com/todayMatches`)
            const data = await response.json()
            setTodayMatches(data)
        }catch(error){
            setError(error.message)
        }
        setLoadingData(false)
    }
    
    useEffect(() => {
        getTodayMatches()
    }, [])

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Today Matches</Text>
            {loadingData ? 
            <ActivityIndicator size={70} color="rgb(95, 67, 14)" style={{marginTop:100, backgroundColor:'black'}}/>
            :
            <MatchesContainer matches={todayMatches}/>
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

export default TodayMatches