/* @flow */

import { Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class UserScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  render() {
    const styles = StyleSheet.create({
      background: {
        padding: 30,
      },
    });

    return (
      <ScrollView style={styles.background}>
        <TouchableOpacity>
          <Text>
            {this.props.navigation.state.params.user}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
