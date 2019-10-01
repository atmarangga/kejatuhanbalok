import {StyleSheet} from 'react-native';
import {
  MARGIN_LEFT,
  MARGIN_RIGHT,
  MARGIN_TOP,
  CONTROLLER_HEIGHT,
} from '../../helpers/constants';

export default StyleSheet.create({
  outerContainer: {
    backgroundColor: '#aaaaaa',
    height: CONTROLLER_HEIGHT,
    marginTop: MARGIN_TOP,
    marginLeft: MARGIN_LEFT,
    marginRight: MARGIN_RIGHT,
    marginBottom: MARGIN_TOP,
  },
});
