import React from 'react';
import { SafeAreaView, StyleSheet, View, Dimensions } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import { light } from '@eva-design/eva';
import { ApplicationProvider, Layout, IconRegistry, Icon, Button, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Header from "../components/Header";
import PostList from "../components/PostList";
import FriendList from "../components/FriendList";

const data = [
  { course: 'CS 107', caption: 'stuck on 3rd problem but got first two' },
  { course: 'CS 106B', caption: 'HELP!!! stuck on 3rd problem but got first two' },
];

const friends= [
    { name: 'Tony', course: 'ME 210' },
    { name: 'Michael', course: 'CS 107' },
    { name: 'Aaron', course: 'AA 274A' },
  ];

// get screen dimensions
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default ProfileScreen = () => (
  <Layout style={styles.container}>
    <Header iconName='person-outline' title='Profile'/>  
    <Text style={styles.subTitles}>Your Friends</Text>  
    <FriendList friends={friends}/>
    <Text style={styles.subTitles}>Your Posts</Text>  
    <PostList posts={data}/>
  </Layout>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //justifyContent: "center",
      //alignItems: "center",
    },
    subTitles: {
        fontSize: windowHeight* 0.04,
        paddingTop: windowHeight* 0.02,
        marginLeft: windowWidth* 0.04,
        fontWeight: 'bold',
        color: "black",
    }
});

// const TabNavigator = () => (
//     <Navigator>
//         <Screen name='Posts' component={PostsScreen} options={{ tabBarLabel: 'Posts' }}/>
//         <Screen name='Friends' component={FriendsScreen} options={{ tabBarLabel: 'Friends' }}/>
//     </Navigator>
// );

// import { StyleSheet } from 'react-native';
// import { WebView } from "react-native-webview";
// import { Themes } from "../assets/Themes";


// const PreviewScreen = ({ route }) => {
//     return (
//             <WebView style={styles.Background} source={{ uri: route.params.url}} />
//     )
// }

// export default PreviewScreen;

// const styles = StyleSheet.create({
//     Background: {
//         backgroundColor: Themes.colors.background
//     }
// });