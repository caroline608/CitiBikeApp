import React from 'react';

// import 3rd party libraries
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'

// import screens
import BikeStationListScreen from './screens/BikeStationsListScreen'
import BikeStationMapScreen from './screens/BikeStationsMapScreen'
import StationDetailScreen from './screens/StationDetailScreen'

// create a Nav Stack
const ListNavStack = createStackNavigator(
  {
    List: BikeStationListScreen,
    Details: StationDetailScreen
  }
)

// create Tab Stack
const RootStack = createBottomTabNavigator(
  {
      List: ListNavStack,
      Map: BikeStationMapScreen
    }
)

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    )
  }
}
