/* @flow */

import { inject, observer } from 'mobx-react';
import { Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

@inject('store')
@observer
export default class UsersScreen extends Component {
  static propTypes = {
    store: PropTypes.object,
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
