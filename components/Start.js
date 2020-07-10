import React, {useState} from "react"
import { createStackNavigator } from '@react-navigation/stack';
import {View} from "react-native"
import Choose from "./Choose"
import HiPage from "./HiPage"
import Paragraph from "./Paragraph"
import Letter from "./Letter"
import Word from "./Word"
import styles from "../styles"
import ParagraphRead from "./ParagraphRead"

const Stack = createStackNavigator();

const Start = () => {
  return (
    <View style = {styles.fullview}>
        <Stack.Navigator>
            <Stack.Screen name="Choose" component={Choose} />
            <Stack.Screen name= "HiPage" component = {HiPage}/>
            <Stack.Screen name= "Paragraph" component = {Paragraph}/>
            <Stack.Screen name= "Letter" component = {Letter}/>
            <Stack.Screen name= "Word" component = {Word}/>
            <Stack.Screen name= "ParagraphRead" component = {ParagraphRead}/>
        </Stack.Navigator>
    </View>
  );
}

export default Start