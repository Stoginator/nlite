import React, { useState } from "react"
import { Text, View, TouchableOpacity } from "react-native"


const Word = () => {
    const [score, setScore] = useState(0)

    const navigateNext = () => {
        navigation.navigate("Paragraph")
    } 

    return(
    <View>
        <TouchableOpacity style = {styles.leftWordBox}><Text style = {styles.wordText}>{props.word[0]}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.rightWordBox}><Text style = {styles.wordText}>{props.words[1]}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.leftWordBox}><Text style = {styles.wordText}>{props.words[2]}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.rightWordBox}><Text style = {styles.wordText}>{props.words[3]}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.leftWordBox}><Text style = {styles.wordText}>{props.words[4]}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.rightWordBox}><Text style = {styles.wordText}>{props.words[5]}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.leftWordBox}><Text style = {styles.wordText}>{props.words[6]}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.rightWordBox}><Text style = {styles.wordText}>{props.words[7]}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.leftWordBox}><Text style = {styles.wordText}>{props.words[8]}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.rightWordBox}><Text style = {styles.wordText}>{props.words[9]}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.nextButton}><Text style = {styles.nextText}>Next</Text></TouchableOpacity>
    </View>
    )
}

export default Word