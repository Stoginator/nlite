import React, { useState } from "react"
import { Text, View, TouchableOpacity } from "react-native"
import styles from "../styles"
import TestContext from "../TestContext"


const Choice = (props) => {
    return(
        <View style = {styles.paragraphChooseView}>
            <TouchableOpacity style = {styles.paragraphChooseBox} onPress = {() => Paragraph.navigateNext()}><Text style = {styles.paragraphChooseWords}>{props.p1}</Text></TouchableOpacity> 
            <TouchableOpacity style = {styles.paragraphChooseBox}><Text style = {styles.paragraphChooseWords}>{props.p2}</Text></TouchableOpacity>
        </View> 
    )
}

const Paragraph = () => {
    const [score, setScore] = useState(0)

    const navigateNext = (paragraph) => {
        navigation.navigate("ParagraphRead", {paragraph: paragraph})
    } 

    return( 
            <TestContext.Consumer>
                { //(state.state.assessment.paragraphs)
                    context => context ? <Choice p1 = {context.state.assessment.paragraphs[0]} p2={context.state.assessment.paragraphs[1]}/>
                        : 
                        console.log("no state")
                }
            </TestContext.Consumer>
    )
}

export default Paragraph



// "state": Object {
//     "assessment": Object {
//       "letters": Array [
//         "g",
//         "z",
//         "t",
//         "a", 
//         "u",
//         "d",
//         "r",
//         "h",
//         "w",
//         "y",
//       ],
//       "paragraphs": Array [
//         "We live in a hut. It is very big. It has four windows. Our mother built it last year.",
//         "This is my elder sister. She is a nurse. She works in the big hospital. She treats sick people.",
//       ],
//       "questions": Array [
//         "When did our school open?",
//         "What did the teacher do when she came from the office?",
//       ],
//       "story": "Our school opened on fifth May. Many children came to school early. They were all happy to be back. Peter and Kim were also there. The two boys are my good friends. Peter told us he visited his aunt. She bought him a black pair of shoes. Jim wanted to wear the new shoes. Peter told him that his feet were dirty. Jim got angry and shouted at Peter. Some children came to look at them. They made a lot of noise. The teacher came from the office. She told Peter and Jim not to fight.",
//       "words": Array [
//         "map",
//         "head",
//         "bird",
//         "pet",
//         "wall",
//         "jug",
//         "finger",
//         "seed",
//         "soap",
//         "eye",
//       ],
//     },
//   },
// }