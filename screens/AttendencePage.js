import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import fb from '../config';

export default class AttendencePage extends React.Component {
    goToBuzzerScreen=(buzzercolor)=> {
      this.props.navigation.navigate('ListScreen')
    }

  constructor() {
    super();
    this.state = {
      color: "white",
      color2:"white",
      color3:"white",
      color4:'white',
      color5:'white',
      color6:'white',
      color7:'white',
      color8:'white',
      color9:'white',
      color10:'white',
      color11:'white',
      color12:'white',
      color13:'white',
      color14:'white',
      color15:'white',
      color16:'white',
      color17:'white',
      color18:'white',
      ViratKohli:"present"
    };
  }
  componentDidMount() {}
  changeColor = (present) => {
    var color = 'green';
    this.setState({ color: color });
    fb.ref('Virat Kohli/'+'/').update({
      present:"yes",
      absent:"no"
    })
  };
  changeColor2 = (absent) => {
    var color2 = 'red';
    this.setState({ color2: color2 });
    fb.ref('Virat Kohli/'+'/').update({
      absent:"yes",
      present:"no"
    })
  };
  changeColor3 = (present) =>{
    var color3 = 'green';
    this.setState({color3:color3});
    fb.ref('MS Dhoni/'+'/').update({
      present:"yes",
      absent:"no"
    })
  }
  changeColor4 = () =>{
    var color4 = 'red';
    this.setState({color4:color4});
    fb.ref('MS Dhoni/'+'/').update({
      absent:"yes",
      present:"no"
    })
  }
  changeColor5 = () =>{
    var color5 = 'green';
    this.setState({color5:color5});
    fb.ref('Rohit Sharma/'+'/').update({
      present:"yes",
      absent:"no"
    })
  }
  changeColor6 = () =>{
    var color6 = 'red';
    this.setState({color6:color6});
    fb.ref('Rohit Sharma/'+'/').update({
      present:"no",
      absent:"yes"
    })
  }
  changeColor7 = () =>{
    var color7 = 'green';
    this.setState({color7:color7});
    fb.ref('AB de Villiers/'+'/').update({
      present:"yes",
      absent:"no"
    })
  }
  changeColor8 = () =>{
    var color8 = 'red';
    this.setState({color8:color8});
    fb.ref('AB de Villiers/'+'/').update({
      present:"no",
      absent:"yes"
    })
  }
  changeColor9 = () =>{
    var color9 = 'green';
    this.setState({color9:color9});
    fb.ref('Hardik Pandya/'+'/').update({
      present:"yes",
      absent:"no"
    })
  }
  changeColor10 = () =>{
    var color10 = 'red';
    this.setState({color10:color10});
    fb.ref('Hardik Pandya/'+'/').update({
      present:"no",
      absent:"yes"
    })
  }
  changeColor11 = () =>{
    var color11 = 'green';
    this.setState({color11:color11});
    fb.ref('Yuzvendra Chahal/'+'/').update({
      present:"yes",
      absent:"no"
    })
  }
  changeColor12 = () =>{
    var color12 = 'red';
    this.setState({color12:color12});
    fb.ref('Yuzvendra Chahal/'+'/').update({
      present:"no",
      absent:"yes"
    })
  }
  changeColor13 = () =>{
    var color13 = 'green';
    this.setState({color13:color13});
    fb.ref('KL Rahul/'+'/').update({
      present:"yes",
      absent:"no"
    })
  }
  changeColor14 = () =>{
    var color14 = 'red';
    this.setState({color14:color14});
    fb.ref('KL Rahul/'+'/').update({
      present:"no",
      absent:"yes"
    })
  }
  changeColor15 = () =>{
    var color15 = 'green';
    this.setState({color15:color15});
    fb.ref('Ravindra Jadeja/'+'/').update({
      present:"yes",
      absent:"no"
    })
  }
  changeColor16 = () =>{
    var color16 = 'red';
    this.setState({color16:color16});
    fb.ref('Ravindra Jadeja/'+'/').update({
      present:"no",
      absent:"yes"
    })
  }
  changeColor17 = () =>{
    var color17 = 'green';
    this.setState({color17:color17});
    fb.ref('Krunal Pandya/'+'/').update({
      present:"yes",
      absent:"no"
    })
  }
  changeColor18 = () =>{
    var color18 = 'red';
    this.setState({color18:color18});
    fb.ref('Krunal Pandya/'+'/').update({
      present:"no",
      absent:"yes"
    })
  }
  

  render() {
    return (
      <View>
        <AppHeader />
        <Text>1) Virat Kohli </Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: this.state.color }]}
          onPress={()=>
          { 
            this.changeColor();
          }}
          >
          <Text style={styles.buttonText}>P</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button2, { backgroundColor: this.state.color2 }]}
          onPress={()=>
          {this.changeColor2}}
          
          >
          <Text style={styles.buttonText}>A</Text>
        </TouchableOpacity>
        <br></br>
        <Text>2) MS Dhoni </Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: this.state.color3 }]}
          onPress={this.changeColor3}>
          <Text style={styles.buttonText}>P</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button2, { backgroundColor: this.state.color4 }]}
          onPress={this.changeColor4}>
          <Text style={styles.buttonText}>A</Text>
        </TouchableOpacity>
        <br></br>
        <Text>3) Rohit Sharma </Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: this.state.color5 }]}
        onPress={this.changeColor5}>
          <Text style={styles.buttonText}>P</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button2, { backgroundColor: this.state.color6 }]}
        onPress={this.changeColor6}>
          <Text style={styles.buttonText}>A</Text>
        </TouchableOpacity>
        <br></br>
        <Text>4) AB de Villiers </Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: this.state.color7 }]}
        onPress={this.changeColor7}>
          <Text style={styles.buttonText}>P</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button2, { backgroundColor: this.state.color8 }]}
        onPress={this.changeColor8}>
          <Text style={styles.buttonText}>A</Text>
        </TouchableOpacity>
        <br></br>
        <Text>5) Hardik Pandya </Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: this.state.color9 }]}
        onPress={this.changeColor9}>
          <Text style={styles.buttonText}>P</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button2, { backgroundColor: this.state.color10 }]}
        onPress={this.changeColor10}>
          <Text style={styles.buttonText}>A</Text>
        </TouchableOpacity>
        <br></br>
        <Text>6) Yuzvendra Chahal </Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: this.state.color11 }]}
        onPress={this.changeColor11}>
          <Text style={styles.buttonText}>P</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button2, { backgroundColor: this.state.color12 }]}
        onPress={this.changeColor12}>
          <Text style={styles.buttonText}>A</Text>
        </TouchableOpacity>
        <br></br>
        <Text>7) KL Rahul </Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: this.state.color13 }]}
        onPress={this.changeColor13}>
          <Text style={styles.buttonText}>P</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button2, { backgroundColor: this.state.color14 }]}
        onPress={this.changeColor14}>
          <Text style={styles.buttonText}>A</Text>
        </TouchableOpacity>
        <br></br>
        <Text>8) Ravindra Jadeja </Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: this.state.color15 }]}
        onPress={this.changeColor15}>
          <Text style={styles.buttonText}>P</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button2, { backgroundColor: this.state.color16 }]}
        onPress={this.changeColor16}>
          <Text style={styles.buttonText}>A</Text>
        </TouchableOpacity>
        <br></br>
        <Text>9) Krunal Pandya</Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: this.state.color17 }]}
        onPress={this.changeColor17}>
          <Text style={styles.buttonText}>P</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button2, { backgroundColor: this.state.color18 }]}
        onPress={this.changeColor18}>
          <Text style={styles.buttonText}>A</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitButton} onPress={()=>this.goToBuzzerScreen("green")}>
            <Text style={styles.submitButtonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    marginLeft: 150,
    borderWidth: 2,
    borderRadius: 2,
    marginTop: -20,
    width: 60,
    height: 30,
  },
  button2: {
    justifyContent: 'center',
    marginLeft: 250,
    borderWidth: 2,
    borderRadius: 2,
    marginTop: -30,
    width: 60,
    height: 30,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
  },
  submitButton:{
    width:310,
    height:60,
    justifyContent:"center",
    marginTop:20,
    backgroundColor:"orange",
    alignSelf:"center",
  },
  submitButtonText:{
    alignSelf:"center"
  }
});
