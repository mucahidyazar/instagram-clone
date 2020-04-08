/* eslint-disable prettier/prettier */
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

//SCREENS
import IntroScreen from '../screens/Intro';
import IntroductionScreen from '../screens/Introduction';
import LoginScreen from '../screens/Login';
import LoginHelpScreen from '../screens/LoginHelp';
import CreateNewAccountScreen from '../screens/CreateNewAccount';

const loginStackNavigator = createStackNavigator({
  Intro: {
    screen: IntroScreen,
  },
  Introduction: IntroductionScreen,
  Login: LoginScreen,
  LoginHelp: LoginHelpScreen,
  CreateNewAccount: CreateNewAccountScreen,
}, {
  defaultNavigationOptions: {
    headerTransparent: true,
    headerTitle: () => null,
    headerLeft: () => null,
  }
});

export default createAppContainer(loginStackNavigator);