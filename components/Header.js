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


