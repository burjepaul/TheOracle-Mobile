import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";

const CircularBar = ({leagueStats}) => {
    let hslValue
    leagueStats.total_win_percentage ?
    hslValue = 120*leagueStats.total_win_percentage/100
    :
    hslValue = 0
    
    return(

        <View style={styles.circularBar}>
            <CircularProgress
                value={leagueStats.total_win_percentage ? leagueStats.total_win_percentage:0}
                valueSuffix={'%'}
                radius={80}
                duration={1000}
                progressValueColor={`hsl(${hslValue}, 100%, 50%)`}
                activeStrokeColor={`hsl(${hslValue}, 100%, 50%)`}
                inActiveStrokeColor={'red'}
                inActiveStrokeOpacity={0.8}
                inActiveStrokeWidth={25}
                activeStrokeWidth={25}
                maxValue={100}
                title={`${leagueStats.total_win}/${leagueStats.total_games}`}
                titleColor={`hsl(${hslValue}, 100%, 50%)`}
                titleStyle={{fontWeight: 'bold'}}
                />
            {leagueStats.average_odd_win? 
            <>
                <Text style={styles.circleOddDisplay}>Average Odd Win:{leagueStats.average_odd_win.toFixed(2)}</Text>
            </>
                :
            <></>
            }{
            leagueStats.average_odd_lost ?
            <>
                <Text style={styles.circleOddDisplay}>Average Odd Lost: {leagueStats.average_odd_lost.toFixed(2)}</Text>
            </>
                :
            <></>
        }
        </View>
    )
}

const styles = StyleSheet.create({
    circleOddDisplay:{
        color:'wheat',
        marginVertical:4
    },
    circularBar:{
        marginTop:150,
        marginBottom:30,
        flexDirection:"column",
        flex:1,
        alignSelf:"center",
        alignItems:"center"
    }
})

export default CircularBar