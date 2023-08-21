import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "react-native-elements";
import AboutUsCard from "../components/AboutUsCard";
import { ScrollView } from "react-native-gesture-handler";

const AboutUsScreen = () => {
    const [renderCard, setRenderCard] = useState('')

    const cardTitles = ["Way of calculating", "Exemples", "Recommendations", ""]
    const cardTexts = ["See how it's done", "See some exemples", "A couple of recommendations"]
    const cardImages = [require('../assets/images/about-us/analysis.png'),require('../assets/images/about-us/exemples.png'),require('../assets/images/about-us/recommended.png')]

    const onPressCard = (container) => {
        setRenderCard(container)
    }

    const render = () => {
        switch(renderCard){
            case 'Way of calculating':
                return(
                    <>
                        <Text style={styles.cardTitle}>Way of calculating:</Text>
                        <Text style={styles.cardText}>The automation is done by extracting all the games and their respective leagues, for each team of the league a form score is calculated based on the result of last five matches played and the position in the standing of those teams (see firts image). After this a difference is calculated between the 2 facing teams meaning a difference in form.
    This is done for all games playing in the next day. Finally, the output will contain all matches together with this form difference. By filtering those, and including only the ones with the highest score difference the final prediction are made for the winners, and including those with the lowest as a draw.(see image 2).
    Statistical, it is confirmed that home teams have a 15% higher rate of winning, so for a prediction of "2", maning that the away team is going to win,from the score difference is subtracted 15%.</Text>
                        <View style={styles.wayOfCalculatingImagesContainer}>
                            <Image
                                source={require('../assets/images/about-us/formImage1.png')}    
                                style={styles.wayOfCalculatingImages}
                            />
                            <Image
                                source={require('../assets/images/about-us/formImage2.png')}    
                                style={styles.wayOfCalculatingImages}
                            />
                        </View>
                        <Text style={styles.cardText}>Note that the above explenation and images are just a short description, additionally, there are taken in account the teams home form vs. away form, how long ago those matches had been played and goal difference.</Text>
                    </>
            )
            case 'Exemples':
                return(
                    <>
                        <Text style={styles.cardTitle}>Exemples:</Text>
                        <View style={styles.renderContainer}>
                            <Text style={styles.cardText}>For this first example we have Hoffenheim playng agains Dortmund. Next we can se that Dortmund comes after 5 wins in a row, so it is in a good form, on the other hand,
                                    we have Hoffenheim with no win, just one equal and 4 loses. In this case the output will come as a victory for Dotmund.</Text>
                            <Image
                                source={require('../assets/images/about-us/firstExample.png')}    
                                style={styles.exemplesImages}
                                />
                        </View>

                        <View style={styles.renderContainer}>
                            <Text style={styles.cardText}>In this second example the form difference between Sheffield and Charlton is not so obvious, but in this case it's taken into account the teams aganst they have
                                    played. Sheffield's poorest result (1 draw) being against the 3rd team of the standing, while Charlton best to results (2 wins) are agains the last team and one
                                    from the second part of the standing. By calculating also the wins (for Sheffield) and the losses (for Charlton) against the teams they had meet, a total score
                                    difference is establish. The higher the score difference is, the higher the chances of win are (you can sort every day predictions by this value).In this case Sheffield 
                                    would be considered the winner.</Text>
                            <Image
                                source={require('../assets/images/about-us/secondExample.png')}    
                                style={styles.exemplesImages}
                                />
                        </View>

                        <View style={styles.renderContainer}>
                            <Text style={styles.cardText}>This is the third example, here the form between teams is almost equal. The calculation it's done the same ,but compared with the previous example, where a
                                    higher score difference predicts the winner, here we take the opposite end, with the score difference as low as possible (slightly advantage for away team) and 
                                    predicting a possible draw. To increase the chances of a positive result, another criteriea to meet, is in one of the previous 5 matches, each team 
                                    must have at least one draw result.</Text>
                            <Image
                                source={require('../assets/images/about-us/thirdExample.png')}    
                                style={styles.exemplesImages}
                                />
                        </View>
                    </>
            )
            case 'Recommendations':
                return(
                    <>
                        <Text style={styles.cardTitle}>Recommendations:</Text>
                        <View style={styles.renderContainer}>
                            <Text style={styles.cardText}>Sport betting should be a fun activity, in no way to cause you financial problems. So our first recommendation would be to safe bet, using low-risk strategies or to stick to a budget when you play. Don’t expect to win back money you’ve lost, nor think of gambling as a way to earn money. It’s important to remember that all gambling activities have risk and to enjoy safer gambling, you must be aware of the risks and how you can minimize them.</Text>
                            <Image
                                source={require('../assets/images/about-us/low-risk.png')}    
                                style={styles.recommendationsImages}
                                />
                        </View>

                        <View style={styles.renderContainer}>
                            <Text style={styles.cardText}> The sneaky thing about problem gambling is, by the time you’re wondering if it’s a problem, it likely already is. You could lose money you can’t afford to lose, put strain on your relationships with friends and family, or it could negatively affect school or work. All things you probably don’t want to happen. It makes sense to keep an eye out for the signs. You can ask yourself if gambling is affecting your mental or physical health. Are you choosing to gamble instead of meeting your friend to work out at the gym? Have you missed or slacked off at school or work in order to gamble?</Text>
                            <Image
                                source={require('../assets/images/about-us/find-support.png')}    
                                style={styles.recommendationsImages}
                                />
                        </View>
                        <Text style={styles.title}>Don't let the gamble industry destroy your life!</Text>
                        <View style={{marginBottom:40}}></View>
                    </>
            )
            default:
                return (
                    <View style={{flex:1, backgroundColor:"black", height:227}}></View>
                )
        }          
    }

    return(
        <ScrollView style={styles.container}>
            <Image
                source={require('../assets/images/about-us/aboutusImage.jpg')}    
                style={styles.image}
                >
                <Text style={styles.title}>What we do, how we do</Text>
                <Text style={styles.imageText}>  Using an automate software, we are trying to predict the fotbal matches results. The automation is done by scanning all the fotbal matches that are going to be played tomorrow, and base on the teams form it is going to predict the winner (see below).
                                Each day there will be at least 10 games that are most likely to be correct, depending of overall loading. The scanning is done only on competition where there is a standing. Cups, frendly matches and other such events being ignored.
                </Text>
            </Image>
            <View style={styles.cardContainer}>
                <AboutUsCard cardTitle={cardTitles[0]} cardText={cardTexts[0]} imgSource={cardImages[0]} onPressCard={onPressCard}/>
                <AboutUsCard cardTitle={cardTitles[1]} cardText={cardTexts[1]} imgSource={cardImages[1]} onPressCard={onPressCard}/>
                <AboutUsCard cardTitle={cardTitles[2]} cardText={cardTexts[2]} imgSource={cardImages[2]} onPressCard={onPressCard}/>
            </View>
            {render()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"black",
        flex:1,
    },
    cardContainer:{
        flexDirection:"row",
        marginTop: 30,
        justifyContent:"space-around"
    },
    title:{
        fontSize:25,
        color:'wheat',
        marginTop:30,
        fontWeight:"bold",
        textAlign:"center"
    },
    cardTitle:{
        fontSize:20,
        marginTop:15,
        marginLeft:15,
        color:'wheat',
    },
    cardText:{
        fontSize:11,
        color:'wheat',
        marginVertical: 10,
        marginHorizontal:20,
        textAlign:"center"
    },
    image:{
        height:300,
        marginTop:70,
        backgroundColor: 'rgba(0,0,0,.3)'
    },
    imageText:{
        color:'wheat',
        textAlign:"center",
        marginTop:50,
        marginHorizontal:22,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 3
    },
    wayOfCalculatingImagesContainer:{
        flexDirection:"row",
        justifyContent:"space-around"
    },
    wayOfCalculatingImages:{
        height:150,
        width:170
    },
    exemplesImages:{
        marginLeft:"12%",
        height:350,
        width:270,
        marginBottom:40,
    },
    renderContainer:{
        borderBottomColor:"wheat",
        borderBottomWidth:1
    },
    recommendationsImages:{
        height:200,
        width:250,
        marginLeft:"15%",
        marginBottom:40,
    }
})

export default AboutUsScreen