import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "react-native-elements";
import { FlatList} from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import Match from "./Match";
import { useState } from "react";
import { AntDesign } from '@expo/vector-icons';

const MatchesContainer = ({matches}) => {
    const [sort, setSort] = useState("Playing Hour")
    const [activePage, setActivePage] = useState(1)
    const [matchesToRender, setMatchesToRender] = useState('')

    
    const separateDataByPrediction = (data) => {
        let on_goals = []
        let on_final_result = []
        for (const entry in data){
            if (data[entry].prediction == 1){
                on_final_result.push(data[entry])
            }
            else if (data[entry].prediction == 2){
                on_final_result.push(data[entry])
            }
            else if(data[entry].prediction == "X"){
                on_final_result.push(data[entry])
            }
            else on_goals.push(data[entry])
        }
        return [on_goals, on_final_result]
    }

    let separatedMatches = separateDataByPrediction(matches)
    
    const onImageClick = (value) => {
        setMatchesToRender(value)
        setActivePage(1)
    }

    switch (matchesToRender){
        case "Goals":
            matches = separatedMatches[0]
            break
        case "1 X 2":
            matches = separatedMatches[1]
            break
    }

    let totalPages = Math.ceil(matches.length/10)

    switch(sort){
        case "Odd":
            matches.sort((a,b) => (a.odd > b.odd) ? 1 : ((b.odd > a.odd) ? -1 : 0))
            break
        case "Win Chance":
            matches.sort((a,b) => b.score_difference - a.score_difference)
            break
        case "Country":
            matches.sort((a,b) => (a.country > b.country) ? 1 : ((b.country > a.country) ? -1 : 0))
            break
        case "Playing Hour":
            matches.sort((a,b) => (a.playing_hour > b.playing_hour) ? 1 : ((b.playing_hour > a.playing_hour) ? -1 : 0))
            break
    }

    const changeActivePage = (increment) => {
        if ((activePage + increment) > 0 && (activePage + increment) < totalPages + 1){
            setActivePage(activePage + increment)
        }
    }

    let perPageMatches = matches.slice((activePage-1)*10, (activePage-1)*10 + 9)

    return(
        <View style={styles.container}>
                <View style={styles.imagesContainer}>
                    <Image
                        source={require('../assets/images/1x2Image.png')}
                        style={styles.image}
                        onPress={() => onImageClick('1 X 2')}
                        >
                        <Text style={styles.imageText}>1 X 2</Text>
                    </Image>
                    <Image
                        source={require('../assets/images/GoalsImage.png')}
                        style={styles.image}
                        onPress={() => onImageClick('Goals')}
                        >
                        <Text style={styles.imageText}>Goals</Text>
                    </Image>
                </View>

                {matchesToRender == '' ? 
                    <Text style={styles.title}>Select a category from above</Text>
                :
                    <>
                        <View style={styles.headerContainer}>
                                <View style={styles.paginationContainer}>
                                    <AntDesign name="left" size={20} color="wheat" onPress={() => changeActivePage(-1)}/>
                                    <Text style={styles.page}>Page {activePage} / {totalPages}</Text>
                                    <AntDesign name="right" size={20} color="wheat" onPress={() => changeActivePage(+1)}/>
                                </View>

                                <View style={{flexDirection:'row', marginRight:-25}}>
                                    <Text style={{color:'wheat', marginTop:20, marginRight:-30}}>Sort By:</Text>
                                    {
                                        matchesToRender == "Goals" ?
                                        <Picker
                                        style={styles.picker}
                                        selectedValue={sort}
                                        dropdownIconColor={"wheat"}
                                        color={"rgb(95, 67, 14)"}
                                        mode="dropdown"
                                        onValueChange={(itemValue, itemIndex) =>
                                            setSort(itemValue)
                                        }>
                                        <Picker.Item style={styles.pickerLabel} label="Playing Hour" value="Playing Hour" />
                                        <Picker.Item style={styles.pickerLabel} label="Country" value="Country" />
                                    </Picker>
                                    :
                                        <Picker
                                        style={styles.picker}
                                        selectedValue={sort}
                                        dropdownIconColor={"wheat"}
                                        color={"rgb(95, 67, 14)"}
                                        mode="dropdown"
                                        onValueChange={(itemValue, itemIndex) =>
                                            setSort(itemValue)
                                        }>
                                        <Picker.Item style={styles.pickerLabel} label="Playing Hour" value="Playing Hour" />
                                        <Picker.Item style={styles.pickerLabel} label="Win Chance" value="Win Chance" />
                                        <Picker.Item style={styles.pickerLabel} label="Odd" value="Odd" />
                                        <Picker.Item style={styles.pickerLabel} label="Country" value="Country" />
                                    </Picker>
                                    }
                                </View>
                        </View>
                        <FlatList
                            ListHeaderComponent={
                                <></>
                            }
                            data={perPageMatches}
                            keyExtractor={(match) => match.id}
                            nestedScrollEnabled
                            renderItem={({item}) => {
                                return(
                                    <Match
                                    league={item.league}
                                    country={item.country}
                                    homeTeam={item.home_team}
                                    awayTeam={item.away_team}
                                    date={item.playing_date}
                                    hour={item.playing_hour}
                                    prediction={item.prediction}
                                    odd={item.odd}
                                    result={item.result}
                                    />
                                    )
                                }}
                                ListFooterComponent={
                                    <View style={{height:320}}/>
                                }
                                
                        />  
                     </>
        
            }
                            </View>
                            )
                        }

const styles = StyleSheet.create({
    container:{
        marginVertical:10,
    },
    title:{
        textAlign:"center",
        fontSize:18,
        marginVertical:35,
        color:"wheat",
        fontWeight:"bold",
    },
    paginationContainer:{
        flexDirection:'row',
        justifyContent:"space-between",
        marginLeft:65,
        marginTop:16
    },
    page:{
        textAlign:"center",
        fontSize:15,
        marginHorizontal:15,
        color:"wheat",
        fontWeight:"bold",
    },
    headerContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:20,
    },
    picker:{
        color:'wheat',
        fontWeight:"bold",
        backgroundColor:"rgb(95, 67, 14)",
        alignSelf:"flex-end",
        fontSize:13,
        borderRadius:115,
        alignSelf: 'center',
        width:160,
        transform: [
            { scaleX: 0.6 }, 
            { scaleY: 0.6 },
         ],
    },
    pickerLabel:{
        color:'wheat',
        fontWeight:"bold",
        backgroundColor:"rgb(95, 67, 14)",
    },
    imagesContainer:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    image:{
        height:120,
        width:170
    },
    imageText:{
        flex: 1,
        textAlign: 'center',
        textAlignVertical: "center",
        color:"wheat",
        fontWeight:"bold",
        fontSize:14,
        backgroundColor:"black",
        opacity: 0.6,
        marginHorizontal:45,
        marginVertical:43,
    }
})

export default MatchesContainer