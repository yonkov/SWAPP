import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Redirect, Route } from 'react-router-dom';
import gql from 'graphql-tag.macro';
import Login from '../Login';
export const AUTHENTICATED_QUERY = gql`
  query IsAuthenticated {
    authenticated @client
  }
`;

const PrivateRoute = (props) => {
    const { data } = useQuery(AUTHENTICATED_QUERY);
    console.log(data.authenticated);
    
    return(
        data.authenticated ? props.children : 
        <div>
            <Login/>
            <Redirect to={'/login'} />
        </div>
    )
}

export default PrivateRoute

