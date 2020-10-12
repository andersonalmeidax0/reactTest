import React, { Component } from 'react';
import {  AppRegistry, StyleSheet, Text, TextInput, View, Button, Drawer, Switch, TouchableOpacity,FlatList} from 'react-native';


class Test extends Component {
    constructor(props) {
      super(props);
      //tictac = new TicTacToe();
      this.state={text:'sddsffsdf\nsddsffsdf\nsddsffsdf\nLAST'};
    }
  onChangeText=(x) =>
  {
     this.setState({text:x});
  }
  onButtom=(x) =>
  {
     //var text2=this.state.text+'\n'+new Date();
     var text2=new Date()+'\n'+this.state.text;
     this.setState({text:text2});
  }
  render() {
  return  (
      <View style={{padding:0, flex: 1, flexDirection: 'column'}}  >
        <TouchableOpacity onPress={()=>this.onButtom()} >
            <Text>TEST</Text>
        </TouchableOpacity>
          <TextInput numberOfLines={8} 
          style={{ numberOfLines:8, borderColor: 'gray', borderWidth:1}}
          onChangeText={text => this.onChangeText(text)}  value={this.state.text}
          multiline='true'  textAlignVertical='bottom'
        />
        <FlatList
          data={[{key: 'One'}, {key: 'Two'}, {key: 'Three'}, {key: 'Four'}]}
          renderItem={({item}) => <View style={{flex:1,flexDirection:'row'}} ><Text>*</Text><Text> {item.key} </Text><Text>*</Text></View>}
         />
      </View>
  );
  }
}


const App = () => {
    return (
      <Test/>
    );
}      
export default App;
