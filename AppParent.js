//Test de CHILD UPDATE FROM PARENT
//causas de erro no "super"
//0-import errado de componentes ( ex import componente de "react-native" ao inves de reat)
//1-Forgotten export The first culprit is usually that you have forgotten to export the component that you are trying to use and hence React finds that the Component you are trying to extend from is undefined 
//2-Using a default export incorrectly If a component is exported with the default keyword then it must be imported as a default import and not as a named import.
//3-circular dependencies


import React, { Component } from 'react';
import {  AppRegistry, StyleSheet, Text, TextInput, View, Button, Drawer, Switch} from 'react-native';



export class ParentComponent extends Component {
   constructor(props) {
      super(props);
      this.state = {
        open: false,
        toggle:false,
      };

      this.toggleChildMenu = this.toggleChildMenu.bind(this);
   }

   toggleChildMenu() {
      this.setState(state => ({
        open: !state.open
      }));
   }

   render() {
      return (
         <div>
           <button onClick={this.toggleChildMenu}>
              Toggle Menu from Parent
           </button>
           <Text>open:{this.state.open==true?"true":"false"}</Text> 
           <ChildComponent open={this.state.open} />
         </div>
       );
    }
}



export class ChildComponent extends Component {
   constructor(props) {
      super(props);
      this.state = {
        //open: false,
        toggle:false,
      };
   }
    render() {
      console.log("Render Child");
      return ( 
        <View>
         {/*<Drawer open={this.props.open}/>*/}
         <Switch
          trackColor={{false: 'gray', true: 'teal'}}
          thumbColor="blue"
          ios_backgroundColor="gray"
          /*onValueChange={(value) => this.setState({toggle: value})}*/
          value={this.props.open}
        />
        </View>         
      );
    }
}


export default class App1 extends Component {

  render() {
    return (
      <View>
        <ParentComponent/>
      </View>
      )
  }
}

AppRegistry.registerComponent('App1', () => App1);
