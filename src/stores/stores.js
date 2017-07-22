/* @flow */

import { useStrict } from 'mobx';

/* Stores */
import Users from './users';

/**
  Enables MobX strict mode globally.
  In strict mode, it is not allowed to
  change any state outside of an action
 */
useStrict(true);

export default class Stores {
  users = new Users();
}
