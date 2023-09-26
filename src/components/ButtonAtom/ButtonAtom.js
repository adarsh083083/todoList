import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

const ButtonAtom = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonAtom;

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 12,
    backgroundColor: 'blue',
    alignItems: 'center',
    borderRadius: 4,
  },
  textStyle: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },
});
