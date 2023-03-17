import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { IconRegistry, Icon, Text, ApplicationProvider, Layout } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

// get screen dimensions
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Header({ iconName, title }) {
    return (
        <SafeAreaView style={styles.header}>
            <Icon name={iconName} style={styles.headerIcons} fill="black"/>
            <Text style={styles.title}>{title}</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: windowHeight * 0.04,
        marginBottom: 0,
    },
    headerIcons: {
        height: windowWidth * 0.1,
        width: windowWidth * 0.1,
        marginRight: windowWidth * 0.02,
    },
    title: {
        fontSize: windowHeight* 0.05,
        fontWeight: 'bold',
        color: "black",
    }
});

// import { StyleSheet, SafeAreaView, Text, Image, Dimensions } from 'react-native';
// import { Images } from "../assets/Themes";

// // get screen dimensions
// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

// // create body component (define content here)
// export default function Header() {
//     return (
//         <SafeAreaView style = {styles.header}>
//             <Image source={Images.spotify} style={styles.headerIcons}/>
//             <Text style={styles.title}>My Top Tracks</Text>
//         </SafeAreaView>
//     );
// };

// // define style (size, position, orienatation, color, etc)
// const styles = StyleSheet.create({
//     header: {
//         flexDirection: "row",
//         justifyContent: "center",
//         alignItems: "center",
//         // paddingTop: windowHeight * 0.01,
//     },
//     headerIcons: {
//         height: windowWidth * 0.075,
//         width: windowWidth * 0.075,
//         margin: windowWidth * 0.04,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: "white",
//     }
// });
