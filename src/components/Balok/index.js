import React, {PureComponent} from 'react';
import {View, StyleSheet} from 'react-native';
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
} from '../../helpers/constants';

export default class Balok extends PureComponent {
  constructor(props) {
    super(props);
    this.returnStyle = this.returnStyle.bind(this);
  }

  returnStyle() {
    const {type} = this.props;
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
    return {backgroundColor: typeColor};
  }

  render() {
    return <View style={this.returnStyle()}></View>;
  }
}
