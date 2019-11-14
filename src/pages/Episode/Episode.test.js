import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../setupTests';
import { shallow } from 'enzyme';
import Episode from './Episode';

describe('<Episode /> with no props', () => {
  // testing whether the component renders in isolation from the child components
  test("renders", ()=>{
    const container = shallow(<BrowserRouter><Episode /></BrowserRouter>);
        expect(container.exists()).toBe(true);
  });

});