import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, IconRegistry, Icon, Button, Text, BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { light } from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./screens/HomeScreen";
import MessagesScreen from "./screens/MessagesScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { supabase } from './env/Supabase';

const { Navigator, Screen } = createBottomTabNavigator();

const HomeIcon = (props) => (
  <Icon {...props} name='home-outline'/>
);

const BellIcon = (props) => (
  <Icon {...props} name='message-square-outline'/>
);

const PersonIcon = (props) => (
  <Icon {...props} name='person-outline'/>
);

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    style={{ borderTopWidth: 0 }}
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab icon={HomeIcon}/>
    <BottomNavigationTab icon={BellIcon}/>
    <BottomNavigationTab icon={PersonIcon}/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
    <Screen name='Messages' component={MessagesScreen} options={{ headerShown: false }}/>
    <Screen name='Profile' component={ProfileScreen} options={{ headerShown: false }}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer independent={true}>
    <TabNavigator/>
  </NavigationContainer>
);


const theme = {
  ...light,
  'color-primary-default': "black", // accent color
  'background-basic-color-1': '#F3F3F3' // light gray background
};

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={theme}>
      <AppNavigator />
    </ApplicationProvider>
  </>
);

