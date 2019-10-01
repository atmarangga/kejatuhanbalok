import React, {PureComponent} from 'react';
import {StyleSheet, View} from 'react-native';

import {getBoxWidth, getWidth} from '../../../helpers/dimensions';
import {TOTAL_BOX_HORIZONTAL} from '../../../helpers/constants';

const AMOUNT_OF_ROW = 21;

export default class GridScreen extends PureComponent {
  constructor() {
    super();
    this.initBoxGrid = this.initBoxGrid.bind(this);
    this.checkMatrix = this.checkMatrix.bind(this);
  }
  checkMatrix(matrix) {
    if (matrix > 0) {
      return styles.boxStyleFilled;
    }
    return styles.boxStyles;
  }
  initBoxGrid() {
    const {matrix} = this.props;
    const returnedObject = [];
    for (let a = 0; a < AMOUNT_OF_ROW; a += 1) {
      const objectPerRow = [];

      for (let b = 0; b < TOTAL_BOX_HORIZONTAL; b += 1) {
        const theObject = <View style={this.checkMatrix(matrix[a][b])} />;
        objectPerRow.push(theObject);
      }
      const pushedItems = (
        <View style={styles.stylePerRow}>{objectPerRow}</View>
      );
      returnedObject.push(pushedItems);
    }
    return returnedObject;
  }
  render() {
    return <>{this.initBoxGrid()}</>;
  }
}

const styles = StyleSheet.create({
  boxStyles: {
    width: getBoxWidth(),
    height: getBoxWidth(),
    backgroundColor: '#fff',
    margin: 1,
  },
  boxStyleFilled: {
    width: getBoxWidth(),
    height: getBoxWidth(),
    backgroundColor: '#ff0',
    margin: 1,
  },
  stylePerRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
