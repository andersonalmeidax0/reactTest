import React from 'react';
import {StyleSheet, ActivityIndicator, View} from "react-native";

export default class Example extends React.Component {

    constructor(props) {
        super(props);

        this.state = {loading: true}
    }

    render() {
        return (
            <View
                style={{flex: 1}}
            >
                  HELLO
                  {this.state.loading &&
                  <View style={styles.loading}>
                      <ActivityIndicator/>
                  </View>
                  }
                </View>
            );
        }
    

    showLoading() {
       this.setState({loading: true})
    }

    hideLoading() {
       this.setState({loading: false})
    }
}

    const styles = StyleSheet.create({
        loading: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            opacity: 0.5,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
