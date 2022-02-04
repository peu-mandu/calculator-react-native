import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import Styles from './Styles';

export default props => {
  return (
    <TouchableHighlight onpress={props.onClick}>
      <Text style={Styles.button}>{props.label}</Text>
    </TouchableHighlight>
  );
};
