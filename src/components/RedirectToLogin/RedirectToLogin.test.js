import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RedirectToLogin from './RedirectToLogin';
import '../../setupTests';
import { shallow } from 'enzyme';

describe('<RedirectToLogin /> with no props', () => {
  // testing whether the LoginForm component renders in isolation from the child components
  test("renders", ()=>{
    const container = shallow(<BrowserRouter><RedirectToLogin /></BrowserRouter>);
        expect(container.exists()).toBe(true);
  });
});