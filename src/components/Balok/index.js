import React, {PureComponent} from 'react';
import {View, StyleSheet} from 'react-native';

export default class Balok extends PureComponent {
  render() {
    return <View style={styles.balokContainer}></View>;
  }
}

const styles = StyleSheet.create({
  balokContainer: {backgroundColor: '#ff0'},
});
