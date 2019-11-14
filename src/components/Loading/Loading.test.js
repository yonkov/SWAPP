import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Loading from './Loading';
import '../../setupTests';
import { shallow } from 'enzyme';

describe('<Loading /> with no props', () => {
  // testing whether the LoginForm component renders in isolation from the child components
  test("renders", ()=>{
    const container = shallow(<BrowserRouter><Loading /></BrowserRouter>);
        expect(container.exists()).toBe(true);
  });

});