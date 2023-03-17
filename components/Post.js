import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions, Pressable } from 'react-native';
import { IconRegistry, Icon, Text, ApplicationProvider, Layout } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

// get screen dimensions
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Post({ course, caption, navigation }) {
    
    return (
        <Pressable onPress={() => navigation.navigate("Chat", { name: course})}>
            <SafeAreaView style={styles.block}>
                <Text style={styles.course}>{course}</Text>
                <Text style={styles.caption}>{caption}</Text>
            </SafeAreaView>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    block: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
        //width: "90%",
        backgroundColor: "white",
        borderRadius: 28,
        marginTop: windowWidth* 0.02,
        marginBottom: windowWidth* 0.02,
        marginLeft: windowWidth* 0.04,
        marginRight: windowWidth* 0.04,
        shadowColor: "black",
        shadowOpacity: 0.4,
        shadowRadius: 5,
        shadowOffset: { width: -1, height: 5 }
    },
    course: {
        paddingTop: windowWidth* 0.04,
        paddingLeft: windowWidth* 0.05,
        paddingRight: windowWidth* 0.05,
        paddingBottom: windowWidth* 0.01,
        fontSize: windowHeight* 0.04,
        fontWeight: 'bold',
        color: "black",
    },
    caption: {
        paddingBottom: windowWidth* 0.04,
        paddingLeft: windowWidth* 0.05,
        paddingRight: windowWidth* 0.03,
        fontSize: windowHeight* 0.025,
        fontWeight: 'normal',
        color: "black",
    }
});

