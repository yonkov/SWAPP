import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CharacterPreview from './CharacterPreview';
import '../../setupTests';
import { shallow } from 'enzyme';

describe('<CharacterPreview /> with no props', () => {
  // testing whether the LoginForm component renders in isolation from the child components
  test("renders", ()=>{
    const container = shallow(<BrowserRouter><CharacterPreview /></BrowserRouter>);
        expect(container.exists()).toBe(true);
  });

});