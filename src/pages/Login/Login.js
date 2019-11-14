import React from 'react';
import { withRouter } from 'react-router-dom';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import LoginForm from '../../components/LoginForm/LoginForm';
import Loading from '../../components/Loading/Loading';
import {authQuery} from '../../client/queries/authQuery'

function Login(props) {
  const client = useApolloClient();
  
  
  const [login, { loading, error }] = useMutation(authQuery, {
    onCompleted: ({ signIn: token}) => {
        
      localStorage.setItem('token', token.token);
      
      if (!localStorage.getItem('theme')) { 
        localStorage.setItem('theme', 'light');
      }
      client.writeData({ data: { authenticated: true } }); 
      props.history.push('/episodes');     
    },
  });

  if (loading) return <Loading/>;
  if (error) return (<p className="center-text">{error.graphQLErrors.map(({ message }, i) => (
    <span key={i}>{message}</span>
  ))}
  </p>)

  return <LoginForm login={login} toggleTheme={props.toggleTheme} />;
}

export default withRouter(Login);