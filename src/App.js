/* @flow */

import { Platform } from 'react-native';
import { Provider } from 'mobx-react';
import { StackNavigator } from 'react-navigation';
import { routes } from './routes/routes';
import React, { Component } from 'react';
import Stores from './stores/stores';

const stores = new Stores();

export default class App extends Component {
  render() {
    const AppNavigator = StackNavigator(routes, {
      initialRouteName: 'Main',
      headerMode: 'none',
      /**
       * Use modal on iOS because the card mode comes from the right,
       * which conflicts with the drawer example gesture
       */
      mode: Platform.OS === 'ios' ? 'modal' : 'card',
    });
    return (
      <Provider store={stores}>
        <AppNavigator />
      </Provider>
    );
  }
}
