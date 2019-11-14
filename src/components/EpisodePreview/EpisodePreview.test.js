import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import EpisodePreview from './EpisodePreview';
import '../../setupTests';
import { shallow } from 'enzyme';

describe('<EpisodePreview /> with no props', () => {
  // testing whether the LoginForm component renders in isolation from the child components
  test("renders", ()=>{
    const container = shallow(<BrowserRouter><EpisodePreview /></BrowserRouter>);
        expect(container.exists()).toBe(true);
  });

});