import React from "react";
import { View, StyleSheet, Text, Button} from "react-native";
import { Image } from "react-native-elements";
import Video from 'react-native-video';

const HomeScreen = ({ navigation }) => {

    return(
        <View style={styles.container}>
            {/* <Video source={{ uri:'../assets/videos/LogoFirst.mp4'}}   // Can be a URL or a local file.
       style={styles.video} /> */}
            <View style={styles.containerRow}>
                <Image
                    source={require('../assets/images/YesterdayImage.png')}    
                    style={styles.image}
                    onPress={() => navigation.navigate("Yesterday Results")}  
                    >    
                    <Text style={styles.imageText}>Yesterday Results</Text>
                </Image>
                <Image
                    source={ require('../assets/images/TodayImage.png')}    
                    style={styles.image}
                    onPress={() => navigation.navigate("Today Matches")}  
                    >
                    <Text style={styles.imageText}>Today Matches</Text>
                </Image>
                <Image
                    source={require('../assets/images/TomorrowImage.png')}    
                    style={styles.image}
                    onPress={() => navigation.navigate("Tomorrow Predictions")}  
                    >
                    <Text style={styles.imageText} font>Tomorrow Predictions</Text>
                </Image>
                <Image
                    source={require('../assets/images/HistoryImage.png')}    
                    style={styles.image}
                    onPress={() => navigation.navigate("Result History")}  
                    >
                    <Text style={styles.imageText}>Result History</Text>
                </Image>
                <Image
                    source={require('../assets/images/StatisticsImage.png')}      
                    style={styles.image}
                    onPress={() => navigation.navigate("Statistics")}  
                    >
                    <Text style={styles.imageText}>Statistics</Text>
                </Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"black",
        
        flex:1,
    },
    video: {
        alignSelf: 'center',
        width: 320,
        height: 200,
      },
      buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
    containerRow:{
        justifyContent:"space-between",
        width:"100%",
        paddingHorizontal:"3%"
    },
    image:{
        height:'auto',
        width:"100%",
        resizeMode: 'stretch',
    },
    imageText:{
        textAlign: 'center',
        textAlignVertical: "center",
        color:"wheat",
        fontWeight:"bold",
        fontSize:14,
        backgroundColor:"black",
        opacity: 0.6,
        marginHorizontal:75,
        marginVertical:53,
        padding:10
    },
})

export default HomeScreen