import React, {PureComponent} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';

import LowerComponent from './components/LowerComponent';
import UpperComponent from './components/UpperComponent';

export default class App extends PureComponent {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.globalContainer}>
          <UpperComponent />
          <LowerComponent />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  globalContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
});
