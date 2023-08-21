import React, { useReducer, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

const reducer = (state, action) => {
    switch(action.type){
        case 'change_name':
            return {...state, name:action.payload}
        case 'change_email':
            return {...state, email:action.payload}
        case 'change_phone':
            return {...state, phone:action.payload}
        case 'change_message':
            return {...state, message:action.payload}
        case 'change_name_color':
            return {...state, nameColor:action.payload}
        case 'change_email_color':
            return {...state, emailColor:action.payload}
        case 'change_phone_color':
            return {...state, phoneColor:action.payload}
        case 'change_message_color':
            return {...state, messageColor:action.payload}
        case 'check_all_fields':
            return {...state, allFeldsCorrect:action.payload}
        default:
            return state
    }
}

const Contact = () => {
    const INITIAL_VALUES = {
        name: '',
        nameColor: 'wheat',
        email: '',
        emailColor:'wheat',
        phone: '',
        phoneColor:'wheat',
        message: '',
        messageColor: 'wheat',
    }
    const [sentMessageColor, setSentMessageColor] = useState('black')
    const [state, dispatch] = useReducer(reducer, INITIAL_VALUES)

    const checkInputFields = () => {
        const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        const phoneFormat = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/

        if (state.name.length < 1){
            state.nameColor == "wheat" ?
                dispatch({type:'change_name_color', payload:"red"})
                :
                null
            }
        else{
            dispatch({type:'change_name_color', payload:"wheat"})    
        }

        if (!state.email.match(emailFormat)){
            state.emailColor == "wheat" ?
                dispatch({type:'change_email_color', payload:"red"})
                :
                null
            }
        else{
            dispatch({type:'change_email_color', payload:"wheat"})    
        }

        if (!state.phone.match(phoneFormat)){
            state.phoneColor == "wheat" ?
                dispatch({type:'change_phone_color', payload:"red"})
                :
                null
            }
        else{
            dispatch({type:'change_phone_color', payload:"wheat"})    
        }

        if (state.message.length < 50){
            state.messageColor == "wheat" ?
                dispatch({type:'change_message_color', payload:"red"})
                :
                null
            }
        else{
            dispatch({type:'change_message_color', payload:"wheat"})    
        }

        setSentMessageColor("wheat")
    }

    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Contact</Text>
                <Input
                    placeholder='Enter your name *'
                    label="Name:"
                    labelStyle={{color:state.nameColor, fontSize:18, marginTop:20}}
                    inputStyle={{color:'wheat', fontSize:18}}
                    autoCorrect={false}
                    fontWeight="bold"
                    value={state.name}
                    onChangeText={(newName) => {dispatch({type:'change_name', payload:newName})}}
                    />
                {/* <Input
                    placeholder='Enter your email *'
                    label="Email:"
                    labelStyle={{color:state.emailColor, fontSize:18, marginTop:20}}
                    inputStyle={{color:'wheat', fontSize:18}}
                    autoCorrect={false}
                    autoCapitalize="none"
                    fontWeight="bold"
                    value={state.email}
                    onChangeText={(newEmail) => {dispatch({type:'change_email', payload:newEmail})}}
                    />
                <Input
                    placeholder='Enter your phone number *'
                    label="Phone:"
                    labelStyle={{color:state.phoneColor, fontSize:18, marginTop:20}}
                    inputStyle={{color:'wheat', fontSize:18}}
                    autoCorrect={false}
                    autoCapitalize="none"
                    fontWeight="bold"
                    value={state.phone}
                    onChangeText={(newPhone) => {dispatch({type:'change_phone', payload:newPhone})}}
                    /> */}
                <Input
                    placeholder='Your message (min 50 characters) *'
                    label="Message:"
                    labelStyle={{color:state.messageColor, fontSize:18, marginTop:20}}
                    inputStyle={{color:'wheat', fontSize:18}}
                    containerStyle={{textDecorationUnderline:"none", marginBottom:5}}
                    autoCorrect={false}
                    autoCapitalize="none"
                    fontWeight="bold"
                    value={state.message}
                    onChangeText={(newMessage) => {dispatch({type:'change_message', payload:newMessage})}}
                    />
                {
                    state.nameColor == 'red' || state.emailColor == 'red' || state.phoneColor == 'red' || state.messageColor == 'red' ?
                            <Text style={{color:"red", textAlign:"center", marginBottom:10, fontWeight:"bold"}}>Something is Wrong!</Text>
                            :
                            <Text style={{color:sentMessageColor, textAlign:"center", marginBottom:10, fontWeight:"bold"}}>Message sent!</Text>
                }
                <Button
                    title="SEND"
                    titleStyle={{ fontWeight: '700', color:'wheat'}}
                    buttonStyle={{
                        backgroundColor: 'rgba(95, 67, 14, 1)',
                        borderColor: 'transparent',
                        borderWidth: 0,
                        borderRadius: 5,
                    }}
                    containerStyle={{
                        width: 130,
                        alignSelf:"center",
                        marginBottom:400
                    }}
                    onPress={() => {checkInputFields()}}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"black",
        flex:1
    },
    title:{
        color:'wheat',
        fontSize:28,
        textAlign:"center",
        marginTop:60,
        fontWeight:"bold",
    }
})

export default Contact