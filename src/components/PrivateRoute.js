import React, {Fragment} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Redirect} from 'react-router-dom';
import gql from 'graphql-tag.macro';
import Login from '../Login';
export const AUTHENTICATED_QUERY = gql`
  query IsAuthenticated {
    authenticated @client
  }
`;

const PrivateRoute = (props) => {
    const { data } = useQuery(AUTHENTICATED_QUERY);

    return(
        data.authenticated ? props.children : 
        <Fragment>
            <Login/>
            <Redirect to={'/login'} />
        </Fragment>
    )
}

export default PrivateRoute