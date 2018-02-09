import React from 'react';
import { Animated, Text, View, Image } from 'react-native';

export default class LoginScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {isShowingText: true};

  setInterval(() => {
    this.setState(previousState => {
      return {isShowingText: !previousState.isShowingText};
    });
  }, 1000);
}

render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}