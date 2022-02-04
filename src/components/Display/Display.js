import React from 'react';
import {Text, View} from 'react-native';
import Styles from './Styles.js';

export default props => {
  return (
    <View style={Styles.dispĺay}>
      <Text style={Styles.displayValue} numberOfLines={1}>
        {props.value}
      </Text>
    </View>
  );
};
