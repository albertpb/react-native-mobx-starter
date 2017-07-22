/* @flow */

import { inject, observer } from 'mobx-react';
import { Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

@inject('store')
@observer
export default class MainScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    store: PropTypes.object,
  };

  componentDidMount() {
    this.props.store.users.getUsers();
  }

  goToAbout(user: string) {
    this.props.navigation.navigate('Users', {
      user: user,
    });
  }

  render() {
    const styles = StyleSheet.create({
      background: {
        padding: 30,
      },
    });

    const users = this.props.store.users.users.map((user, k) => {
      return (
        <TouchableOpacity
          key={k}
          onPress={this.goToAbout.bind(this, user.first_name)}>
          <Text>
            {user.first_name}
          </Text>
        </TouchableOpacity>
      );
    });

    return (
      <ScrollView style={styles.background}>
        {users}
      </ScrollView>
    );
  }
}
