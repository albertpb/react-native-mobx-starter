/* @flow */

import { inject, observer } from 'mobx-react';
import { Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

@inject('stores')
@observer
export default class MainScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    stores: PropTypes.object,
  };

  componentDidMount() {
    this.props.stores.user.fetchData();
  }

  goToUser(user: string) {
    this.props.navigation.navigate('User', {
      user: user,
    });
  }

  render() {
    const styles = StyleSheet.create({
      background: {
        padding: 30,
      },
    });

    const userList = this.props.stores.user.data.map((u, k) => {
      return (
        <TouchableOpacity
          key={k}
          onPress={this.goToUser.bind(this, u.first_name)}>
          <Text>
            {u.first_name}
          </Text>
        </TouchableOpacity>
      );
    });

    return (
      <ScrollView style={styles.background}>
        {userList}
      </ScrollView>
    );
  }
}
