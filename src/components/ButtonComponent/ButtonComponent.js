import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import Styles from './Styles.js';

export default props => {
  const stylesButton = [Styles.button];
  props.action
    ? stylesButton.push(Styles.actionButton)
    : props.double
    ? stylesButton.push(Styles.buttonDouble)
    : props.triple
    ? stylesButton.push(Styles.buttonTriple)
    : stylesButton;
  return (
    <TouchableHighlight onPress={() => props.onClick(props.label)}>
      <Text style={stylesButton}>{props.label}</Text>
    </TouchableHighlight>
  );
};
