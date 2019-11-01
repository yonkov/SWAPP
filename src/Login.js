import React from 'react';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import LoginForm from './components/LoginForm';

const LOG_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password){
        token
    }
  }
`;

export default function Login() {
  const client = useApolloClient();
  
  
  const [login, { loading, error }] = useMutation(LOG_IN, {
    onCompleted: ({ signIn: token}) => {
        
      localStorage.setItem('token', token.token);
      client.writeData({ data: { authenticated: true } });
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return console.log(error);

  return <LoginForm login={login} />;
}