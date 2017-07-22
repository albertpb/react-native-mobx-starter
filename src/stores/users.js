/* @flow */

import { action, observable } from 'mobx';
import axios from 'axios';

export default class Users {
  @observable users = [];

  @action
  getUsers() {
    axios
      .get('http://www.mocky.io/v2/5972d4581000009a00441855')
      .then(
        action('getting-users-success', response => {
          this.users = response.data;
        }),
      )
      .catch(
        action('getting-users-error', error => {
          console.error(error);
        }),
      );
  }
}
