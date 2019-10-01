import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import {getBoxWidth} from '../../../helpers/dimensions';
import {
  COLOR_I_PIECE,
  COLOR_J_PIECE,
  COLOR_L_PIECE,
  COLOR_O_PIECE,
  COLOR_S_PIECE,
  COLOR_T_PIECE,
  COLOR_Z_PIECE,
  I_PIECE,
  J_PIECE,
  L_PIECE,
  O_PIECE,
  S_PIECE,
  T_PIECE,
  Z_PIECE,
  TOTAL_BOX_HORIZONTAL,
} from '../../../helpers/constants';

const AMOUNT_OF_ROW = 21;

export default class GridScreen extends Component {
  constructor() {
    super();
    this.initBoxGrid = this.initBoxGrid.bind(this);
    this.checkMatrix = this.checkMatrix.bind(this);
    this.returnStyle = this.returnStyle.bind(this);
  }

  returnStyle(type) {
    // const {type} = this.props;
    let typeColor = '#FFF';
    switch (type) {
      case I_PIECE:
        typeColor = COLOR_I_PIECE;
        break;
      case J_PIECE:
        typeColor = COLOR_J_PIECE;
        break;
      case L_PIECE:
        typeColor = COLOR_L_PIECE;
        break;
      case O_PIECE:
        typeColor = COLOR_O_PIECE;
        break;
      case S_PIECE:
        typeColor = COLOR_S_PIECE;
        break;
      case T_PIECE:
        typeColor = COLOR_T_PIECE;
        break;
      case Z_PIECE:
        typeColor = COLOR_Z_PIECE;
        break;
      default:
        break;
    }
    return {
      ...styles.boxStyleFilled,
      backgroundColor: typeColor,
    };
  }

  checkMatrix(matrix) {
    if (matrix > 0) {
      return this.returnStyle(matrix);
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
