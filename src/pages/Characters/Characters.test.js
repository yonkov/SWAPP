import React from 'react';
import Characters from './Characters'
import { ApolloProvider } from "react-apollo";
import {client} from '../../App'
const ReactTestRenderer = require('react-test-renderer');

describe('My second snapshot test', () => {
    it('Should compare the component with a snapshot', () => {
      const component = ReactTestRenderer.create(
        <ApolloProvider client={client}>
          <Characters />
        </ApolloProvider>
      );
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    })
  });