import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';
const styles = StyleSheet.create({
  headerListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 5,
    backgroundColor: COLORS.WHITE,
    elevation: 10,
    shadowColor: COLORS.BLACK,
    shadowOpacity: 0.2,
    marginHorizontal: 0,
    marginVertical: 10,
    borderRadius: 5,
    shadowOffset: {width: 0, height: 1},
    justifyContent: 'center',
  },

  titleStyle: {
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.GREEN,
  },
});
export default styles;
