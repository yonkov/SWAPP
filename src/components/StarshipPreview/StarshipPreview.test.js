import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import StarshipPreview from './StarshipPreview';
import '../../setupTests';
import { shallow } from 'enzyme';

describe('<StarshipPreview /> with no props', () => {
  // testing whether the LoginForm component renders in isolation from the child components
  test("renders", ()=>{
    const container = shallow(<BrowserRouter><StarshipPreview /></BrowserRouter>);
        expect(container.exists()).toBe(true);
  });

});