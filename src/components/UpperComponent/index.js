import React, {Component} from 'react';
import {View} from 'react-native';

import GridScreen from './GridScreen';
import styles from './styles';
import {translate} from '../../helpers/operations';
import {I_PIECE} from '../../helpers/constants';

const THE_MATRIX = [
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 7, 7, 0, 4, 0, 0],
  [0, 0, 0, 0, 7, 7, 4, 4, 4, 0],
];

const startMatrix = [[3, 6], [2, 6], [1, 6], [0, 6]];
let c = 0;
export default class UpperComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matrix: THE_MATRIX,
      startMatrix: startMatrix,
    };

    this.doTranslation = this.doTranslation.bind(this);
  }
  componentDidMount() {
    this.doTranslation();
  }

  generateNewStart(oldStart) {
    const newStarts = [];
    for (let u = 0; u < oldStart.length; u += 1) {
      const newRow = oldStart[u][0] + 1;
      const newObject = [newRow, oldStart[u][1]];

      newStarts.push(newObject);
    }
    // console.log('newstarts _________', newStarts);
    return newStarts;
  }

  doTranslation() {
    const timedEvent = setInterval(() => {
      const {nabrak, matrix} = translate(
        this.state.startMatrix,
        this.state.matrix,
        I_PIECE,
      );
      let newStart = this.generateNewStart(this.state.startMatrix);

      this.setState({matrix, startMatrix: newStart}, () => {
        c = c + 1;

        if (c >= 25) {
          clearInterval(timedEvent);
        }
      });
      if (nabrak) {
        clearInterval(timedEvent);
      }
    }, 500);
  }

  render() {
    const {matrix} = this.state;
    // console.log('isRendering ?', matrix);
    return (
      <View style={styles.outerContainer}>
        <GridScreen matrix={matrix} />
      </View>
    );
  }
}
