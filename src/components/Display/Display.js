import React from 'react';
import {Text, View} from 'react-native';
import Styles from './Styles.js';

export default props => {
  console.log(props);
  // const operation = props.operationValue.map(showOperation);
  // showOperation = item => {
  //   return `${item}`;
  // };

  return (
    <View style={Styles.dispĺay}>
      {/* <Text numberOfLines={1}>{operation}</Text> */}
      <Text style={Styles.displayValue} numberOfLines={1}>
        {props.value}
      </Text>
    </View>
  );
};
