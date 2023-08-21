import React, { useContext } from "react";
import { View, StyleSheet, Text, Button, Linking, SafeAreaView, ScrollView, StatusBar} from "react-native";
import { StatisticsContext } from "../context/statistics.context";
import { Image } from "react-native-elements";
import CustomButton from "../components/CustomButton";
import { LinearGradient } from "expo-linear-gradient";
import VideoComponent from "../components/VideoSysytem";
import LogoVideoComponent from "../components/MainLogoVideo";


const HomeScreen = ({ navigation }) => {
    const {statistics} = useContext(StatisticsContext)

    let total_wins = 0
    let total_lost = 0
  
    if (statistics){
      total_wins = statistics.reduce((acc, obj) => {
        return acc + obj.total_win
      }, 0)
      total_lost = statistics.reduce((acc, obj) => {
        return acc + obj.total_lost
      }, 0)
    }

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <LogoVideoComponent/>
                <Text style={styles.heroTitile}>Auto-Generated Football Tips, Using Binary Power</Text>
                <View style={styles.heroTextView} elevation={15}>
                    <Text style={styles.heroText}>Find us on our official website:</Text>
                    <Text style={styles.heroTextWebsite} onPress={ () => Linking.openURL('https://fotbal-predictions.netlify.app')}>TheOracle.com</Text>
                </View>

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
                <View>
                    <Text style={styles.subTitle}>Our platform offers curated data, automated analysis, and trends, reducing time spent on research and enhancing betting strategies for success.</Text>
                    <CustomButton title={"See Statistics"} navigation={navigation} routeTo={"Statistics"}/>

                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['black', 'wheat']} style={styles.statisticsHero}>
                            <Text style={styles.statisticsHeroText}>With a total of</Text>
                            <Text style={styles.statisticsHeroTextHighlight}>{total_wins}</Text>
                            <Text style={styles.statisticsHeroText}>games won</Text>
                        </LinearGradient>

                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['black', 'wheat']} style={styles.statisticsHero}>
                            <Text style={styles.statisticsHeroText}>An average of</Text>
                            <Text style={styles.statisticsHeroTextHighlight}>{(total_wins/(total_wins+total_lost)*100).toFixed(0)}%</Text>
                            <Text style={styles.statisticsHeroText}>win percentage</Text>
                        </LinearGradient>

                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['black', 'wheat']} style={styles.statisticsHero}>
                            <Text style={styles.statisticsHeroText}>Days with over</Text>
                            <Text style={styles.statisticsHeroTextHighlight}>150</Text>
                            <Text style={styles.statisticsHeroText}>tips</Text>
                        </LinearGradient>

                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['black', 'wheat']} style={styles.statisticsHero}>
                            <Text style={styles.statisticsHeroText}>Highest odd win</Text>
                            <Text style={styles.statisticsHeroTextHighlight}>7.92</Text>
                            <Text style={styles.statisticsHeroText}>on 26 May 2023</Text>
                        </LinearGradient>
                </View>
                <View style={styles.subTitleSystemContainer}>
                    <Text style={styles.subTitleSystem}>Universal Football Fortune: Precise Global League Predictions from Every Corner of the World.</Text>
                    <CustomButton title={"See Today's Picks"} navigation={navigation} routeTo={"Today Matches"}/>
                </View>
                <VideoComponent />
                <View style={styles.transparencyComponent}>
                    <Image
                        source={require('../assets/images/transparency-photo.png')}    
                        style={styles.transparencyImage}
                        onPress={() => navigation.navigate("Tomorrow Predictions")}  
                        >
                    <Text style={styles.subTitle}>We provide 100% full transparency of our results, either is lost or win with 1.01 odd, the data is available and used for further analyse.</Text>
                    <CustomButton title={"See All Results"} navigation={navigation} routeTo={"Result History"}/>
                    </Image>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"black",
        flex:1,
    },
    heroImage:{
        height:'auto',
        width:"100%",
        marginVertical:"15%"
    },
    heroTitile:{
        color:"wheat",
        fontWeight:"bold",
        textAlign: 'center',
        textAlignVertical: "center",
        marginBottom:"12%",
        fontSize:22,
        textShadowColor: 'wheat',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 20,
    },
    heroText:{
        color:"wheat",
        fontWeight:"bold",
        textAlign: 'center',
        textAlignVertical: "center",
        marginVertical:"3%",
        fontSize:14,
        opacity:0.4,
    },
    heroTextWebsite:{
        color:"wheat",
        fontWeight:"bold",
        textAlign: 'center',
        textAlignVertical: "center",
        fontSize:20,
        textShadowColor: 'wheat',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 20,
    },
    heroTextView:{
        marginBottom:"15%",
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
    imageText1:{
        textAlign: 'center',
        textAlignVertical: "center",
        color:"wheat",
        fontWeight:"bold",
        fontSize:14,
        opacity: 0.0,
        marginHorizontal:55,
        marginVertical:33,
        padding:10
    },
    subTitle:{
        color:"wheat",
        fontWeight:"bold",
        textAlign: 'center',
        textAlignVertical: "center",
        marginTop:"12%",
        marginBottom:"5%",
        fontSize:18,
        textShadowColor: 'wheat',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 20,
    },
    statisticsHero:{
        paddingVertical:15,
        marginVertical:1,
    },
    statisticsHeroText:{
        color:"rgb(95, 67, 14)",
        alignSelf:"center",
        fontSize:18,
        fontWeight:"bold",
        textShadowColor: 'wheat',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 10,
    },
    statisticsHeroTextHighlight:{
        color:"wheat",
        alignSelf:"center",
        fontSize:25,
        paddingVertical:10,
        fontWeight:"bold",
        textShadowColor: 'wheat',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 20,
    },
    subTitleSystemContainer:{
        marginBottom:"-55%",
    },
    subTitleSystem:{
        color:"wheat",
        fontWeight:"bold",
        textAlign: 'center',
        textAlignVertical: "center",
        marginTop:"18%",
        marginBottom:"5%",
        marginHorizontal:20,
        fontSize:18,
        textShadowColor: 'wheat',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 20,
    },
    transparencyComponent:{
        
    },
    transparencyImage:{
        height:400,
        marginHorizontal:20
    }
})

export default HomeScreen