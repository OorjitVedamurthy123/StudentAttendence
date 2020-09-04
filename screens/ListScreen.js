import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'
import SecondScreen from '../components/secondScreen'


export default class AttendencePage extends React.Component {
  render(){
    return(
      <View>
        <AppHeader/>
        <SecondScreen color={this.props.navigation.getParam('color')}/>
      </View>
    )
  }
}