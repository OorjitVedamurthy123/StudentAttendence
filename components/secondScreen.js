import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

class SecondScreen extends React.Component {

  render() {
    return (
      <TouchableOpacity
        style={[styles.button,{backgroundColor:this.props.color}]}>
        <Text style={styles.text}>
        
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    width: 320,
    height: 755,
    backgroundColor: 'red',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign:'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign:'center',
    marginTop:50
  }
});

export default SecondScreen;