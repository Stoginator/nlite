import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../styles'

const StoryDisplay = (props) => {
    return (
        <View>
            <View style = {styles.storyTitleBox}><Text style = {styles.storyTitleText}>Story</Text></View>
            <TouchableOpacity style = {styles.storyContentBox}><Text style = {styles.storyContentText}>{props.story}</Text></TouchableOpacity>
        </View>
    )
}

const Story = () => {
    const [score, setScore] = useState(0)

    const navigateNext = (paragraph) => {
        navigation.navigate("ParagraphRead", {paragraph: paragraph})
    } 

    return( 
        <TestContext.Consumer>
            { 
                context => context ? <StoryDisplay story = {state.state.assessment.story[0]} />
                    : 
                    console.log("no state")
            }
        </TestContext.Consumer>
        )
    }

export default Story