import {View, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const HeaderAtom = ({title}) => {
  return (
    <View style={{...styles.headerListContainer}}>
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
};
export default HeaderAtom;
