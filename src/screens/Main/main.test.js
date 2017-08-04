'use strict';

import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import MainScreen from './index';

jest.mock('../../stores/stores');
var Stores = require('../../stores/stores');
const store = new Stores();

describe('Main with users store', function() {
  beforeAll(function() {
    return store.user.fetchData();
  });

  it('should renders correctly', function() {
    // test if user list is > 1
    expect(store.user.data.length).toBeGreaterThanOrEqual(1);

    const wrapper = shallow(<MainScreen stores={store} />);
    expect(wrapper).toMatchSnapshot();
  });
});
