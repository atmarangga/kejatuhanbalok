import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';

import GridScreen from "./GridScreen";
import styles from './styles';
export default class UpperComponent extends PureComponent {
  render() {
    return (
      <View style={styles.outerContainer}>
        <GridScreen />
      </View>
    );
  }
}
