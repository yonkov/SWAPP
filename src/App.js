import React, { useState } from 'react';
import './App.css';
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from 'react-router-dom';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import Home from './Home';
import authLink from './client/auth';
import {typeDefs} from './client/local'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

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

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  console.log(toggleTheme);
  
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <div className="App">
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
        <Home toggleTheme = {{toggleTheme}}/>
      </ThemeProvider>
      </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;