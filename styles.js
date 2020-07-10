import React from "react"
import { StyleSheet, Dimensions } from "react-native"
import Colors from "./constants/Colors"

export default StyleSheet.create({
    fullview: { // pages template
        flex: 1
    },
    choose: { // view for choose.js
        flex: 1,
        paddingTop: 5,
        paddingHorizontal: 16
    }, 
    buttonText: {
        flex: 1,
        textAlign: "center",
        fontSize: 22
    },
    chooseButton: { // assessment button
        flex: 1,
        borderColor: Colors.black,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: Colors.appBlue,
        marginBottom: 10,
        justifyContent: "flex-end",
        height: "10%",
        alignItems: "center"
    },
    startButton: { //"Start" button
        height: 50,
        width: "40%",
        borderColor: Colors.black,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 100,
        backgroundColor: Colors.appBlue,
        alignItems: "center",
        justifyContent: "center"
    },
    startButtonWord: { //Styling for "Start" on button
        fontSize: 30,
    },
    hiWord: { //Hi! at beginning of assessment
        marginTop: 30,
        fontSize: 40
    },
    hiPage: { //HiPage View
        alignItems: "center",
        flex: 1
    },
    imageContainer: { //HiPage avatar
        marginTop: 100,
        height: 400,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    paragraphChooseView: { //Paragraph Choose View
        flex:1,
        paddingHorizontal: 16
    },
    paragraphChooseBox: { //Paragraph choose button
        marginTop: 20,
        marginBottom: 30,
        borderColor: Colors.black,
        borderWidth: 1,
        borderRadius: 5,
        width: "100%",
        height: "40%",
        flex: 1, 
        alignItems: "center"
    },
    paragraphChooseWords: { //Words in paragraph choose box
        fontSize: 45
    },
    leftLetterBox: { //Styling for letter boxes on left hand side

    },
    rightLetterBox: { //Styling for letter boxes on right hand side

    },
    letterText: { //Text inside letter boxes
        
    },
    nextButton: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.black,
        backgroundColor: Colors.appGray
    },
    nextText: {
        textAlign: "center",
        fontSize: 22,
        fontWeight: "bold"
    }
})