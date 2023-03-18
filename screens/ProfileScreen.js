import React, { useState, useCallback, useEffect } from 'react'
import { SafeAreaView, StyleSheet, View, Dimensions } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import { light } from '@eva-design/eva';
import { ApplicationProvider, Layout, IconRegistry, Icon, Button, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Header from "../components/Header";
import PostList from "../components/PostList";
import FriendList from "../components/FriendList";
import { supabase } from '../env/Supabase';

// get screen dimensions
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default ProfileScreen = () => {
    const [yourPosts, setYourPosts] = useState([]);
    const [friends, setFriends] = useState([]);

    useEffect(() => {
      const fetchYourPosts = async () => {
        const { data: yourPosts, error } = await supabase
          .from('YourPosts')
          .select('*')
        if (error) {
          console.log(error);
        } else {
          setYourPosts(yourPosts);
        }
      };
      fetchYourPosts();

      const fetchFriends = async () => {
        const { data: friends, error } = await supabase
          .from('Friends')
          .select('*')
        if (error) {
          console.log(error);
        } else {
          setFriends(friends);
        }
      };
      fetchFriends();
    }, []);

    return (
    <Layout style={styles.container}>
        <Header iconName='person-outline' title='Profile'/>  
        <Text style={styles.subTitles}>Your Friends</Text>  
        <FriendList friends={friends}/>
        <Text style={styles.subTitles}>Your Posts</Text>  
        <PostList posts={yourPosts}/>
    </Layout>
    )
};

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
