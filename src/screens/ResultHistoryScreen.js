import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ActivityIndicator, FlatList } from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import MatchesContainer from "../components/MatchesContainer";
import { ScrollView } from "react-native-gesture-handler";

const ResultHistoryScreen = () => {
    const [selectedDate, setSelecteDate] = useState('')

    const [yesterdayMatches, setYesterdayMatches] = useState([])
    const [error, setError] = useState(null)
    const [loadingData, setLoadingData] = useState(true)
    
    const getYesterdayMatches = async () => {
        setLoadingData(true)
        try{
            const response = await fetch(`https://fotbal.herokuapp.com/matches/yesterdayResults/?date=${selectedDate}`)
            const data = await response.json()
            setYesterdayMatches(data)
        }catch(error){
            setError(error.message)
        }
        setLoadingData(false)
    }
    
    useEffect(() => {
        getYesterdayMatches()
    }, [selectedDate])

    let content;
    if (selectedDate){
        if(loadingData){
            content = <ActivityIndicator size={70} color="rgb(95, 67, 14)" style={{marginTop:100, backgroundColor:'black'}}/>
        }else{
            content = <MatchesContainer matches={yesterdayMatches}/>
        }
    }else{
        content =  <Text style={styles.title}>Choose a date from which you want to see the results</Text>
    }

    return(
        
        <View style={styles.container}>
            <FlatList
            ListHeaderComponent={
                <>
                    <Text style={styles.title}>Results History</Text>
                    <Calendar
                    style={styles.calendar}
                    theme={{
                        backgroundColor: 'black',
                        calendarBackground: 'black',
                        textSectionTitleColor: 'wheat',
                        selectedDayBackgroundColor: 'black',
                        selectedDayTextColor: 'black',
                        todayTextColor: 'black',
                        dayTextColor: 'wheat',
                        textDisabledColor: 'rgb(95, 67, 14)',
                        arrowColor:"wheat",
                        indicatorColor:"wheat",
                        monthTextColor:"wheat",
                        todayBackgroundColor:"rgb(95, 67, 14)",
                    }}
                    onDayPress={day => {
                        let date = new Date(day.dateString)
                        let today = new Date()
                        today.setDate(today.getDate() +- 1)
                        today >= date ? setSelecteDate(day.dateString) : null
                    }}
                    markedDates={
                        {[selectedDate]:{selected: true, marked: true, selectedColor: 'wheat'}}
                    }
                    />
                    {content}
                </>
            }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"black",
        flex:1
    },
    title:{
        textAlign:"center",
        fontSize:25,
        marginVertical:30,
        color:"wheat",
        fontWeight:"bold",
    },
    calendar:{
        borderWidth: 1,
        borderColor: 'gray',
        height: 330,
    }
})

export default ResultHistoryScreen