import React, { Component } from 'react';
import { View, StyleSheet, Modal, Button, Text } from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {isVisible: false};
  }

  render () {
    return(
      <View style={styles.container}>

        <Modal
          animationType={'slide'}
          transparent={true}
          visible={this.state.isVisible}
          onRequestClose={() => {
            this.setState({ isVisible: false });
          }}
        >
          <View  style={styles.modal}>
            <Text  style={styles.text}>MODAL ESTA {this.state.isVisible?"ABTO":"FCHDO"}</Text>
            <Button
              title="Clique Para Fechar Modal"
              onPress={() => {
                this.setState({ isVisible: false });
              }}
            />
          </View>

        </Modal>

        <Button
          title="Clique Para Abrir Modal v3"
          onPress={() => {
            this.setState({ isVisible: true });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
  //  flex: 1,
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 10,
  },
  text: {
    color: '#000000',
    marginTop: 10,
  },
});
