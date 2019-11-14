import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import '../../setupTests';
import { shallow } from 'enzyme';

describe('<PrivateRoute /> with no props', () => {
  // testing whether the LoginForm component renders in isolation from the child components
  test("renders", ()=>{
    const container = shallow(<BrowserRouter><PrivateRoute /></BrowserRouter>);
        expect(container.exists()).toBe(true);
  });

});