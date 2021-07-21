import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { CIRCLE, CROSS } from './constants';
import WhitePawn from './WhitePawn';
import BlackPawn from './BlackPawn';

export default class Tile extends Component {
  _renderContent() {
    switch (this.props.value) {
      case CIRCLE:
        return <WhitePawn/>;
      case CROSS:
        return <BlackPawn/>;
      default:
        return <Text style={styles.text} onPress={this._handlePress} />;
    }
  }

  _handlePress = () => {
    this.props.onPress(this.props.index);
  };

  render() {
    return (
      <View
        style={[
          styles.container,
          {
            width: this.props.currentSquareWidth,
            height: this.props.currentSquareWidth,
          },
        ]}>
        {this._renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    // width: Dimensions.get('window').width/5,
    // height: Dimensions.get('window').width/5,
  },
  text: {
    width: 100,
    height: 100,
  },
});
