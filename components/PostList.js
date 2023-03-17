import React from 'react';
import { FlatList, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { IconRegistry, Icon, Text, ApplicationProvider, Layout } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import Post from "../components/Post";

// get screen dimensions
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function PostList({ posts, navigation }) {
    console.log(navigation)
    return (
        <FlatList style={styles.List}
          data={posts}
          renderItem={({ item }) => {
            return  <Post course={item.course} caption={item.caption} navigation={navigation}/>
          }}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
    );
};

const styles = StyleSheet.create({
    List: {
        paddingTop: 10,
        paddingBottom: 110,
        marginBottom: 35,
    }
});