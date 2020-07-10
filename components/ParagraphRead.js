import React from 'react'
import { Text, View, TouchableOpacity } from "react-native"
import styles from "../styles"
import TestContext from "../TestContext"

const ParagraphRead = ({navigation},props) => {
    return (
        <View> 
            <TouchableOpacity style = {styles.box}>
                <Text>
                    {props.p1}
                </Text>
            </TouchableOpacity> 
        </View>
    )
}


export default ParagraphRead