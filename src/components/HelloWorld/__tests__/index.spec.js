import React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from '..';
import Home from '../Home';
import Topics from '../Topics';

describe('<HelloWorld />', () => {
  const props = {
    routes: [{
      path: '/home',
      component: Home,
    }, {
      path: '/topics',
      component: Topics,
    }],
  };
  const wrapper = shallow(<HelloWorld {...props} />);
  it('Renders an img', () => {
    expect(wrapper.find('.hlwd-top').find('img').length).toBe(1);
  });

  it('Before click the Link', () => {
    expect(wrapper.find('.hlwd').children('div').length).toBe(1);
  });

  // it('After click the btn', () => {
  //   console.log(wrapper.find('Link').at(0))
  //   wrapper.find('li').at(0).simulate('click');
  //   expect(wrapper.find('.hlwd').children('div').at(1).text()).toBe('Home');
  // });
});
