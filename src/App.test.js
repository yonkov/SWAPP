import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from "react-apollo";
import { client } from './App'
const ReactTestRenderer = require('react-test-renderer');

describe('test Episodes component', () => {
  //Check if the component renders
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  // Snapshot test to make sure the UI does not change unexpectedly
  it('Should compare the component with a snapshot', () => {
    const component = ReactTestRenderer.create(
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  })

});