import React from 'react';
import './App.css';
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from 'react-router-dom';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import Home from './Home';
import Navigation from './components/Navigation';
import authLink from './client/auth';
import {typeDefs} from './client/local'


const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: 'http://softuni-swapp-212366186.eu-west-1.elb.amazonaws.com/graphql',
});

const client = new ApolloClient({
  cache,
  link: authLink.concat(httpLink),
  typeDefs
});

const isAuthed = !!localStorage.getItem('token');


cache.writeData({
  data: {
    authenticated: isAuthed,
  },
});




function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <div className="App">
        <Home/>
      </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;