import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import ButtonComponent from './components/ButtonComponent/ButtonComponent';
import Display from './components/Display/Display';

const initialState = {
  showValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default class App extends Component {
  state = {...initialState};

  clearTell = () => {
    console.log('rodow');
    // this.setState({showValue: '1'});
    this.setState({...initialState});
  };

  setValue = value => {
    const clearDisplay =
      this.state.showValue === '0' || this.state.clearDisplay;

    if (value === '.' && !clearDisplay && this.state.showValue.includes('.'))
      return;

    const currentValue = clearDisplay ? '' : this.state.showValue;
    const showValue = currentValue + value;
    this.setState({showValue, clearDisplay: false});

    if (value !== '.') {
      const newValue = parseFloat(showValue);
      const values = [...this.state.values];
      values[this.state.current] = newValue;
      this.setState({values});
    }
  };

  setAction = operation => {
    console.log(this.state.values, 'arroz');
    if (this.state.current === 0) {
      this.setState({operation, current: 1, clearDisplay: true});
      console.log('', 'arroz1');
    } else {
      const equals = operation === '=';
      const values = [...this.state.values];
      try {
        values[0] = eval(`
        ${values[0]} 
        ${this.state.operation} 
        ${values[1]}`);
        console.log(values, 'arroz222');
      } catch (error) {
        console.log(
          error,
          '-----------------------------------------------------------------',
        );
        values[0] = this.state.values[0];
      }

      values[1] = 0;
      this.setState({
        showValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        // clearDisplay: !equals,
        clearDisplay: true,
        values,
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.showValue} />
        <View style={styles.buttons}>
          <ButtonComponent label={'AC'} triple onClick={this.clearTell} />
          <ButtonComponent label={'/'} action onClick={this.setAction} />
          <ButtonComponent label={'7'} onClick={this.setValue} />
          <ButtonComponent label={'8'} onClick={this.setValue} />
          <ButtonComponent label={'9'} onClick={this.setValue} />
          <ButtonComponent label={'*'} action onClick={this.setAction} />
          <ButtonComponent label={'4'} onClick={this.setValue} />
          <ButtonComponent label={'5'} onClick={this.setValue} />
          <ButtonComponent label={'6'} onClick={this.setValue} />
          <ButtonComponent label={'-'} action onClick={this.setAction} />
          <ButtonComponent label={'1'} onClick={this.setValue} />
          <ButtonComponent label={'2'} onClick={this.setValue} />
          <ButtonComponent label={'3'} onClick={this.setValue} />
          <ButtonComponent label={'+'} action onClick={this.setAction} />
          <ButtonComponent label={'0'} onClick={this.setValue} />
          <ButtonComponent label={'.'} onClick={this.setValue} />
          <ButtonComponent label={'='} double onClick={this.setAction} />
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
