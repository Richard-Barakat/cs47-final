import React from 'react';
import { FlatList, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { IconRegistry, Icon, Text, ApplicationProvider, Layout } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import Friend from "./Friend";

// get screen dimensions
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function FriendList({ friends }) {
    return (
        <FlatList style={styles.List}
          data={friends}
          renderItem={({ item }) => {
            return  <Friend name={item.name} course={item.course} />
          }}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
    );
};

const styles = StyleSheet.create({
    List: {
        //paddingTop: 10,
        paddingBottom: 100,
        //marginBottom: 65,
    }
});