import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';
import '../../setupTests';
import { shallow } from 'enzyme';

describe('<Navigation /> with no props', () => {
  // testing whether the LoginForm component renders in isolation from the child components
  test("renders", ()=>{
    const container = shallow(<BrowserRouter><Navigation /></BrowserRouter>);
        expect(container.exists()).toBe(true);
  });

});