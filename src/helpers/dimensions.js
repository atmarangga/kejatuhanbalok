import {Dimensions} from 'react-native';
import {TOTAL_MARGIN_HORIZONTAL, TOTAL_BOX_HORIZONTAL} from './constants';

export function getHeight() {
  return Math.floor(Dimensions.get('window').height);
}

export function getWidth() {
  return Math.floor(Dimensions.get('window').width);
}

export function getBoxWidth() {
  return Math.floor(
    (getWidth() - 3 * TOTAL_MARGIN_HORIZONTAL) / (TOTAL_BOX_HORIZONTAL * 1.8),
  );
}
