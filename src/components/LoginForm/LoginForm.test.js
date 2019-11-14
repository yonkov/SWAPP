import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LoginForm from './LoginForm';
import '../../setupTests';
import { shallow } from 'enzyme';

describe('<LoginForm /> with no props', () => {
  // testing whether the LoginForm component renders in isolation from the child components
  test("renders", ()=>{
    const container = shallow(<BrowserRouter><LoginForm /></BrowserRouter>);
        expect(container.exists()).toBe(true);
  });

});