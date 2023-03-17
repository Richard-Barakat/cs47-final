import React, { useState, useCallback, useEffect } from 'react'
import { SafeAreaView, StyleSheet, View } from "react-native";
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, IconRegistry, Icon, Button, Text, BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { createStackNavigator } from '@react-navigation/stack';
import Header from "../components/Header";
import MessageList from "../components/MessageList";
import { GiftedChat } from 'react-native-gifted-chat'

const data = [
    { name: 'Tony', course: 'ME 210', preview: 'stuck on 3rd problem but got first two' },
    { name: 'Michael', course: 'CS 107', preview: 'stuck on 3rd problem' },
    { name: 'Aaron', course: 'AA 247A', preview: 'stuck on 3rd problem but got first two' },
    { name: 'Poom', course: 'CS 106B', preview: 'stuck on 3rd problem but got first two' },
    { name: 'Temesgen', course: 'CS 106A', preview: 'stuck on 3rd problem but got first two' },
    { name: 'Emily', course: 'ME 310C', preview: "i can't find my teammates" },
];


const Stack = createStackNavigator();

const Chat = ({route, navigation}) => {
    const { name, message } = route.params;

    console.log(name); // should log the name prop
    console.log(message); // should log the message prop

    const [messages, setMessages] = useState([
        {
          _id: 1,
          text: message,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: name,
          },
        },
    ]);
  
    
    React.useLayoutEffect(() => {navigation.setOptions({ title: name })}, [navigation, name]);
  
    return (
      <GiftedChat
        messages={messages}
        onSend={newMessages => setMessages(GiftedChat.append(messages, newMessages))}
        user={{
          _id: 1,
        }}
      />
    );
};

const Message = ({navigation}) => {
  return (
    <Layout style={styles.container}>
        <Header iconName='message-square-outline' title='Messages'/>
        <MessageList messages={data} navigation={navigation}/>
    </Layout>
  );
};

export default MessagesScreen = () => (
    <Stack.Navigator>
        <Stack.Screen name="Message" component={Message} options={{ headerShown: false }}/>
        <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
);

const styles = StyleSheet.create({
    container: {
      //flex: 1,
      //justifyContent: "center",
      //alignItems: "center",
    }
});