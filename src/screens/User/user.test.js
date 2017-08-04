'use strict';

import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import UserScreen from './index';

describe('User', function() {
  it('should renders user screen', function() {
    const navigation = {
      state: {
        params: {
          user: 'Trueman',
        },
      },
    };
    const wrapper = shallow(<UserScreen navigation={navigation} />);
    expect(wrapper).toMatchSnapshot();
  });
});
