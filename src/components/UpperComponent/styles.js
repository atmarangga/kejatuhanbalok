import {StyleSheet} from 'react-native';
import {
  MARGIN_LEFT,
  MARGIN_RIGHT,
  MARGIN_TOP,
  CONTROLLER_HEIGHT,
} from '../../helpers/constants';
import {getHeight} from '../../helpers/dimensions';

const heightTotal = Math.floor(
  getHeight() - (9 * MARGIN_TOP + CONTROLLER_HEIGHT),
);

export default StyleSheet.create({
  outerContainer: {
    backgroundColor: '#afafaf',
    marginTop: MARGIN_TOP,
    marginLeft: MARGIN_LEFT,
    marginRight: MARGIN_RIGHT,
    height: heightTotal,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
