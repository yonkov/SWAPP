import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Episodes from './Episodes'
import { ApolloProvider } from "react-apollo";
import {client} from '../../App'
const ReactTestRenderer = require('react-test-renderer');

describe('test Episodes component', () => {
  //Simple smoke test to check if Episodes component renders without crashing
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ApolloProvider client={client}>
      <Episodes />
    </ApolloProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
    // Snapshot test to make sure the UI does not change unexpectedly
    it('Should compare the component with a snapshot', () => {
      const component = ReactTestRenderer.create(
        <ApolloProvider client={client}>
          <Episodes />
        </ApolloProvider>
      );
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    })
  });