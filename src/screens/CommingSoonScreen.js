import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import AboutUsCard from "../components/AboutUsCard";
import { Linking } from "react-native";

const CommingSoonScreen = () => {
    const [renderCard, setRenderCard] = useState('')

    const cardTitles = ["Coming Next", "Completed Projects"]
    const cardTexts = ["See upcoming projects", "See Accomplished projects"]
    const cardImages = [require('../assets/images/right-arrow.png'),require('../assets/images/checkered-flag.png')]

    const onPressCard = (container) => {
        setRenderCard(container)
    }

    const render = () => {
        switch(renderCard){
            case "Coming Next":
                return(
                    <>
                        <View style={styles.renderCardContainer}>
                            <Text style={styles.renderCardTitle}>Login service</Text>
                            <Text style={styles.renderCardText}> You can see in the navigation panel that there is a sign in entry, for now this is not available. Not so soon, it will be available and by singing in users can make an account, and have access to a private forum , discuss with other users and make their own betting slips.</Text>
                            <Image 
                                source={require("../assets/images/comingsoon-example3.jpg")}
                                style={styles.renderCardImage}
                                >
                            </Image>
                        </View>
                    </>
                )
            case "Completed Projects":
                return (
                    <>
                        <View style={styles.renderCardContainer}>
                            <Text style={styles.renderCardTitle}>Mobile App</Text>
                            <Text style={styles.renderCardText}>This mobile application was an objective since starting of the project, now is available on Google Play Store and Huawei App Gallery. Due to high costs for now it won't be published on App Store.</Text>
                            <Text style={styles.renderCardText}>This application it's in the early stage of construction and you may meet crushes or poor user experience, in this case you can take a look at the website:  
                                <Text style={{color: 'blue'}}
                                            onPress={() => Linking.openURL('https://fotbal-predictions.netlify.app')}>
                                         https://fotbal-predictions.netlify.app/coming-soon
                                </Text>
                             , although the predictions are 100% same.</Text>
                            <Image 
                                source={require("../assets/images/comingsoon-example2.jpg")}
                                style={styles.renderCardImage}
                                >
                            </Image>
                        </View>
                        <View style={styles.renderCardContainer}>
                            <Text style={styles.renderCardTitle}>Goals</Text>
                            <Text style={styles.renderCardText}> Each day, in adition to preditions made on final score result, there is another software which calculates the scoring goals probability.</Text>
                            <Text style={styles.renderCardText}> This is done by calculating the average goals scored and conceded by every team at home and away.</Text>
                            <Text style={styles.renderCardText}> In the next exemple we have Brighton with an average of 1.8 goals scored (45 divided by 24) and Leeds with an average of 1.6 goals conceded (42 divided by 26). Those two values are multiplied (1.8 multiplied by 1.6) and based on this calculation a top is made out of every game beeing played, from lowest to highest goals score chance.</Text>
                            <Image 
                                source={require("../assets/images/comingsoon-example1.png")}
                                style={styles.renderCardImage}
                                >
                            </Image>
                        </View>
                    </>
                )
            default:
                return(
                    <View style={{marginBottom:360}}></View>
                )
        }
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.heroContainer}>
                <Image
                    source={require('../assets/images/improvements-hero-image.jpg')}
                    style={styles.image}
                    >
                <Text style={styles.title}>Upcoming projects</Text>
                <Text style={styles.subtitle}>See below what's happening soon</Text>
                </Image>
            </View>
            <View style={styles.cardContainer}>
                <AboutUsCard cardTitle={cardTitles[0]} cardText={cardTexts[0]} imgSource={cardImages[0]} onPressCard={onPressCard}/>
                <AboutUsCard cardTitle={cardTitles[1]} cardText={cardTexts[1]} imgSource={cardImages[1]} onPressCard={onPressCard}/>
            </View>
            {render()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        marginTop:30,
        flex:1
    },
    heroContainer:{
        alignItems:'center',
    },
    cardContainer:{
        flexDirection:"row",
        marginTop: 30,
        justifyContent:"space-around",
    },
    title:{
        color:'wheat',
        fontSize:28,
        marginTop:50,
        fontWeight:"bold",
        textAlign:"center",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 3,
    },
    subtitle:{
        color:'wheat',
        fontSize:20,
        marginTop:85,
        fontWeight:"bold",
        textAlign:"center"
    },
    image:{
        width:400,
        height:250,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    renderCardContainer:{
        alignItems:"center",
        borderBottomColor:'wheat',
        borderBottomWidth:1
    },
    renderCardTitle:{
        color:'wheat',
        fontSize:24,
        fontWeight:"bold",
        textAlign:"center",
        marginTop:50,
    },
    renderCardText:{
        color:'wheat',
        fontSize:14,
        fontWeight:"bold",
        textAlign:"center",
        marginTop:30,
        marginHorizontal:25,
    },
    renderCardImage:{
        height:240,
        width:240,
        marginVertical:20,
    }
})

export default CommingSoonScreen