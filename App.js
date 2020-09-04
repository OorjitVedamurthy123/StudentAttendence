import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AttendencePage from './screens/AttendencePage';
import ListScreen from './screens/ListScreen';

import { createAppContainer, createSwitchNavigator} from 'react-navigation';


export default class App extends React.Component {
render(){
  return(
       <View>
          <AppContainer/>
      </View>
  )
}
}
var AppNavigator = createSwitchNavigator({
  AttendencePage:AttendencePage,
  ListScreen:ListScreen
})

const AppContainer = createAppContainer(AppNavigator)