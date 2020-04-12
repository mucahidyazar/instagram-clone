/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

//SCREENS
import IntroScreen from '../screens/Intro';
import IntroductionScreen from '../screens/Introduction';
import LoginScreen from '../screens/Login';
import LoginHelpScreen from '../screens/LoginHelp';
import CreateScreen from '../screens/Create';
import NameAndPasswordScreen from '../screens/Create/NameAndPassword';
import AddYourBirthdayScreen from '../screens/Create/AddYourBirthday';
import WelcomeScreen from '../screens/Create/Welcome';

//HOMEPAGE SCREENS
import HomePageScreen from '../screens/Home';
import ActivityPageScreen from '../screens/Home/Activity';
import MessagesPageScreen from '../screens/Home/Messages';
import MessageDetailPageScreen from '../screens/Home/Messages/MessageDetail';
import MessageRequestsPageScreen from '../screens/Home/Messages/MessageRequests';
import ProfilePageScreen from '../screens/Home/Profile';
import SearchPageScreen from '../screens/Home/Search';

const loginStackNavigator = createStackNavigator({
  Intro: {
    screen: IntroScreen,
  },
  Introduction: IntroductionScreen,
  Login: LoginScreen,
  LoginHelp: LoginHelpScreen,
  Create: CreateScreen,
  NameAndPassword: NameAndPasswordScreen,
  AddYourBirthday: AddYourBirthdayScreen,
  Welcome: WelcomeScreen,
}, {
  defaultNavigationOptions: {
    headerTransparent: true,
    headerTitle: () => null,
    headerLeft: () => null,
  },
});

const homeStackNavigator = createStackNavigator({
  loginStackNavigator,
  Home: HomePageScreen,
  Messages: MessagesPageScreen,
  MessageDetail: MessageDetailPageScreen,
  MessageRequests: MessageRequestsPageScreen,
}, {
  defaultNavigationOptions: {
    headerTransparent: true,
    headerTitle: "",
  },
});

const homeTabNavigator = createBottomTabNavigator({
  Home: {
    screen: homeStackNavigator,
    navigationOptions: ({navigation}) => {
      let { routeName } = navigation.state.routes[navigation.state.index];

      if (routeName === 'loginStackNavigator' || routeName === 'MessageDetail' ||  routeName === 'MessageRequestDetail' || routeName === 'Messages') {
        return {
          tabBarLabel: () => null,
          tabBarIcon: () => <Icon name="home" size={30} />,
          tabBarVisible: false,
        };
      }
      return {
        tabBarLabel: () => null,
        tabBarIcon: () => <Icon name="home" size={30} />,
      };
    },
  },
  Search: {
    screen: SearchPageScreen,
    navigationOptions:{
      tabBarLabel: () => null,
      tabBarIcon: () => <Icon name="search" size={30} />,
    },
  },
  Camera: {
    screen: SearchPageScreen,
    navigationOptions:{
      tabBarLabel: () => null,
      tabBarIcon: () => <Icon name="plus-square" size={30} />,
    },
  },
  Activity: {
    screen: ActivityPageScreen,
    navigationOptions:{
      tabBarLabel: () => null,
      tabBarIcon: () => <Icon name="heart" size={30} />,
    },
  },
  Profile: {
    screen: ProfilePageScreen,
    navigationOptions:{
      tabBarLabel: () => null,
      tabBarIcon: () => <Icon name="user" size={30} />,
    },
  },
});

const homeDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: homeTabNavigator,
    navigationOptions: {
      drawerLabel: () => null,
    }
  },
  Profile: ProfilePageScreen,
}, {
  drawerPosition: 'right',
  drawerType: 'slide',
  navigationOptions: {
    swipeEnabled: true,
  },
  overlayColor: 'transparent',
});

export default createAppContainer(homeDrawerNavigator);