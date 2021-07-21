import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import Game from './Game';
import Result from './Result';
import ResizeButton from './ResizeButton';
import { Dimensions } from 'react-native';

export default class GameScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
      currentSquareWidth: Dimensions.get('window').width / 5,
    };
  }

  handleGameFinish = result => {
    this.setState({ result });
  };

  handleChangeSquareWidth = width => {
    this.setState({ currentSquareWidth: width });
  };

  handleGameRestart = () => {
    const { navigation } = this.props;

    navigation.dispatch(
      StackActions.reset({
        index: 1,
        actions: [
          NavigationActions.navigate({ routeName: 'Welcome' }),
          NavigationActions.navigate({ routeName: 'Game' }),
        ],
      }),
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ResizeButton
          handleChangeSquareWidth={this.handleChangeSquareWidth}
          currentSquareWidth={this.state.currentSquareWidth}
        />
        <View pointerEvents={this.state.result ? 'none' : 'auto'}>
          <Game currentSquareWidth={this.state.currentSquareWidth} onFinish={this.handleGameFinish} />
        </View>
        {this.state.result && (
          <Result
            result={this.state.result}
            onRestartGameBtnClick={this.handleGameRestart}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
