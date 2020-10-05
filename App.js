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
  handleChangeText  = (t) =>   {
    this.setState({text:t});
  }
  handleChangeTextState  = (t) =>   {
    this.setState({text:"######"});
  }
  handleChangeTextProps  = (t) =>   {
    this.setState({text:t});
  }

 render() {
  return (
   <View style={{margin:50}}>
    <Text style={{padding: 10, fontSize: 16}}>TestApp v1.5</Text>
    <Button title="SetCounterState" onPress={this.handleClick}  color = "red" />
    <Text style={{ height: 20,  borderWidth: 0, fontSize: 16 }}>CountValue:</Text>
    <Text style={{ height: 20,  borderWidth: 0, fontSize: 16 }}>{this.state.count}</Text>
    <TextInput style={{height: 32, borderWidth: 2}} placeholder="Type your text!" 
    onChangeText={(firstVar) => this.setState({firstVar})}   />

    <TextInput style={{height: 32,borderColor: 'gray', borderWidth: 2}} placeholder="Initial TEXT"
          onChangeText={(t) => this.setState({text:t})} value={this.state.text} 
      />

      
    <Text style={{padding: 10, fontSize: 16}}>  {this.state.firstVar}  </Text>
    <Text style={{padding: 10, fontSize: 16}}>  {this.state.text}  </Text>
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
