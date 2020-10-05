import React, { Component } from 'react';
import {  AppRegistry, StyleSheet, Text, TextInput, View, Button} from 'react-native';

export  class NativeSample extends Component {
 constructor(props) {
     super(props)
     this.state = {
      firstVar: ' ',
      count: 0,
      text:props.defaultText,
     }
  }
  handleClick = () =>  {
      this.setState((state) => {
          return {count: this.state.count + 1};
      });
  }
  handleChangeText(t) {
    this.setState({text:t});
  }

 render() {
  return (
   <View style={{margin:50}}>
    <Text style={{padding: 10, fontSize: 30}}>TestApp v1.4</Text>
    <Button title="SetState" onPress={this.handleClick}  color = "red" />
    <Text style={{ height: 40,  borderWidth: 0, fontSize: 30 }}>CountValue:</Text>
    <Text style={{ height: 40,  borderWidth: 0, fontSize: 30 }}>{this.state.count}</Text>
    <TextInput style={{height: 40}} placeholder="Type your text!" 
    onChangeText={(firstVar) => this.setState({firstVar})}   />
    
    <TextInput style={{height: 40,borderColor: 'gray', borderWidth: 1}} placeholder="Initial TEXT"
          onChangeText={(t) => this.setState({text:t})} value={this.state.text} 
      />
      
    <Text style={{padding: 10, fontSize: 42}}>  {this.state.firstVar}  </Text>
    <Button title="Change Text State" onPress={this.handleClick}  color = "red" />
    <Button title="Change Text Props" onPress={this.handleClick}  color = "red" />
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
