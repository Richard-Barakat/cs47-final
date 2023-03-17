import React from 'react';
import { StyleSheet, SafeAreaView, View, Dimensions } from 'react-native';
import { IconRegistry, Icon, Text, ApplicationProvider, Layout } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

// get screen dimensions
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Message({ name, course, preview }) {
    return (
        <SafeAreaView style={styles.container}>
            <Icon name='person' style={styles.icon} fill="black"/>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.divider}> | </Text>
            <Text style={styles.course}>{course}</Text>
        </SafeAreaView>
    );
    
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        //backgroundColor: "white",
        borderBottomColor: "white",
        borderBottomWidth: 2,
        //marginTop: windowWidth* 0.02,
        //marginBottom: windowWidth* 0.005,
    },
    name: {
        //paddingTop: windowWidth* 0.04,
        paddingLeft: windowWidth* 0.01,
        paddingRight: windowWidth* 0.01,
        paddingBottom: windowWidth* 0.01,
        fontSize: windowHeight* 0.035,
        fontWeight: 'bold',
        color: "black",
    },
    course: {
        //paddingTop: windowWidth* 0.04,
        paddingLeft: windowWidth* 0.01,
        paddingRight: 0,
        paddingBottom: windowWidth* 0.01,
        fontSize: windowHeight* 0.035,
        fontWeight: 'normal',
        color: "black",
    },
    divider: {
        //paddingTop: windowWidth* 0.037,
        paddingBottom: windowWidth* 0.013,
        fontSize: windowHeight* 0.035,
        fontWeight: 'bold',
        color: "black",
    },
    icon: {
        height: windowWidth * 0.11,
        width: windowWidth * 0.11,
        marginRight: windowWidth * 0.02,
        marginLeft: windowWidth * 0.04,
        marginBottom: windowWidth* 0.012,
        marginTop: windowWidth* 0.012,
        shadowColor: "black",
        shadowOpacity: 0.4,
        shadowRadius: 5,
        shadowOffset: { width: -1, height: 5 }
    },
});
