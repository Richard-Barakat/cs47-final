import React from 'react';
import { FlatList, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { IconRegistry, Icon, Text, ApplicationProvider, Layout } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import Message from "../components/Message";

// get screen dimensions
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function MessageList({ messages, navigation }) {
  
    return (
        <FlatList style={styles.List}
          data={messages}
          renderItem={({ item }) => {
            return  <Message name={item.name} course={item.course} preview={item.preview} navigation={navigation}/>
          }}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
    );
};

const styles = StyleSheet.create({
    List: {
        //paddingTop: 10,
        //paddingBottom: 110,
        //marginBottom: 65,
    }
});