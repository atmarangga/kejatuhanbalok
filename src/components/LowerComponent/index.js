import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

export default class LowerComponent extends PureComponent {
  render() {
    return (
      <View style={styles.outerContainer}>
        <Text>LowerComponent</Text>
      </View>
    );
  }
}
