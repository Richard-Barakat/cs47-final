import React, { useState, useCallback, useEffect } from 'react'
import { SafeAreaView, StyleSheet, View, Dimensions } from "react-native";
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, IconRegistry, Icon, Button, Text, BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Header from "../components/Header";
import PostList from "../components/PostList";
import { createStackNavigator } from '@react-navigation/stack';
import { GiftedChat } from 'react-native-gifted-chat'
import { supabase } from '../env/Supabase';

const Stack = createStackNavigator();

// get screen dimensions
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const UploadPostButton = ({navigation}) => {
  return <Button 
    style={{position: 'absolute', bottom: 85, right: 24, borderRadius: "100%", zIndex: 1}} 
    accessoryLeft={<Icon name="plus" />}
    onPress={() => navigation.navigate("New Post")}
    >
      Post
    </Button>
}

const Post = () => {
  return (
    <View style={styles.post}>
      <Text style={styles.postText}>Create New Post</Text>
    </View>
  );
};

const Chat = ({route, navigation}) => {
  const [messages, setMessages] = useState([]);

  const { name } = route.params;
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

const Home = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data: posts, error } = await supabase
        .from('Posts')
        .select('course, caption')
      if (error) {
        console.log(error);
      } else {
        setData(posts);
      }
    };
    fetchPosts();
  }, []);

  console.log(data)

  return (
    <Layout style={styles.container}>
      <UploadPostButton navigation={navigation}/>
      <Header iconName='book-outline' title='StudBud'/>
      <PostList posts={data} navigation={navigation}/>
      
    </Layout>
  );
};

// const data = [
//   { course: 'CS 107', caption: 'stuck on 3rd problem but got first two' },
//   { course: 'CS 106B', caption: 'HELP!!! stuck on 3rd problem but got first two' },
//   { course: 'CS 161', caption: 'stuck on 3rd problem but got first two' },
//   { course: 'CS 229', caption: 'HELP!!! stuck on 3rd problem but got first two' },
//   { course: 'AA 247A', caption: 'stuck on 3rd problem but got first two' },
//   { course: 'AA 228', caption: 'stuck on 3rd problem but got first two' },
//   { course: 'CS 107', caption: 'stuck on 3rd problem but got first two' },
//   { course: 'CS 106B', caption: 'stuck on 3rd problem but got first two' },
//   { course: 'CS 161', caption: 'stuck on 3rd problem but got first two' },
//   { course: 'CS 229', caption: 'stuck on 3rd problem but got first two' },
//   { course: 'AA 247A', caption: 'stuck on 3rd problem but got first two' },
//   { course: 'AA 228', caption: 'stuck on 3rd problem but got first two ' },
// ];

export default HomeScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
    <Stack.Screen name="Chat" component={Chat} />
    <Stack.Screen name="New Post" component={Post} />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
  },post: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postText: {
    fontSize: windowHeight* 0.05,
    fontWeight: 'bold',
    color: "black",
}
});