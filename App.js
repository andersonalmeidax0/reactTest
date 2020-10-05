import React, { Component } from 'react';
import {  AppRegistry, StyleSheet, Text, TextInput, View, Button} from 'react-native';

//https://habiletechnologies.com/blog/understanding-the-basic-components-of-react-native/
//funcionou em andoir e IOS

export  class NativeSample extends Component {
 constructor(props) {
     super(props)
     this.state = {
      count: 0,
      text:props.defaultText,
      textColor:'blue',
     }
  }
  handleClick = () =>  {
    this.setState((state) => {
        return {count: this.state.count + 1};
    });
  }
  handleChangeText  = (t) =>   {
    this.setState({text:t});
  }
  handleChangeTextState  = (t) =>   {
    this.setState({text:"New value"});
  }
  handleChangeTextProps  = (t) =>   {
    if(this.state.textColor=='blue')
      this.setState({textColor:'red'});
    else  
      this.setState({textColor:'blue'});
  }

 render() {
  return (
   <View style={{margin:50}}>
    <Text style={{padding: 10, fontSize: 16}}>TestApp v1.6</Text>
    <Button title="SetCounterState" onPress={this.handleClick}  color = "red" />
    <Text style={{ height: 20,  borderWidth: 0, fontSize: 16 }}>CountValue:</Text>
    <Text style={{ height: 20,  borderWidth: 0, fontSize: 16 }}>{this.state.count}</Text>
    <TextInput style={{height: 32,borderColor: 'gray', borderWidth: 2}} placeholder="Initial TEXT"
          onChangeText={(t) => this.setState({text:t})} value={this.state.text}   />
    <Text style={{padding: 10, fontSize: 16, color:this.state.textColor }}>  {this.state.text}  </Text>
    <Button title="Change Text State" onPress={this.handleChangeTextState}  color = "red" />
    <Button title="Change Text Props" onPress={this.handleChangeTextProps}  color = "red" />
   </View>
   );
 }
}

export default class App1 extends Component {
  render() {
    return (<NativeSample  defaultText="INITIAL111" />)
  }
}

AppRegistry.registerComponent('App1', () => App1);
