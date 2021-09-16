import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen'
import ListScreen from './src/screens/ListScreen'
import ReusableComponentsScreen from './src/screens/ReusableComponentsScreen'
import CounterScreen from './src/screens/CounterScreen'
import ColorScreen from './src/screens/ColorScreen'

const navigator = createStackNavigator(
  {
    HomeScreen,
    ComponentsScreen,
    ListScreen,
    ReusableComponentsScreen,
    CounterScreen,
    ColorScreen
  },
  {
    initialRouteName: "HomeScreen",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
