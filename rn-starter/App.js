import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen'
import ListScreen from './src/screens/ListScreen'
import ReusableComponentsScreen from './src/screens/ReusableComponentsScreen'

const navigator = createStackNavigator(
  {
    HomeScreen,
    ComponentsScreen,
    ListScreen,
    ReusableComponentsScreen
  },
  {
    initialRouteName: "HomeScreen",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
