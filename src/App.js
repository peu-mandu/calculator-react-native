import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';
import ButtonComponent from './components/ButtonComponent/ButtonComponent';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          <ButtonComponent label={'AC'} />
          <ButtonComponent label={'/'} />
          <ButtonComponent label={'7'} />
          <ButtonComponent label={'8'} />
          <ButtonComponent label={'9'} />
          <ButtonComponent label={'*'} />
          <ButtonComponent label={'4'} />
          <ButtonComponent label={'5'} />
          <ButtonComponent label={'6'} />
          <ButtonComponent label={'-'} />
          <ButtonComponent label={'1'} />
          <ButtonComponent label={'2'} />
          <ButtonComponent label={'3'} />
          <ButtonComponent label={'+'} />
          <ButtonComponent label={'0'} />
          <ButtonComponent label={'.'} />
          <ButtonComponent label={'='} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
