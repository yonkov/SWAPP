import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag.macro';
import Navigation from './components/Navigation';
import Pages from './pages';

export const AUTHENTICATED_QUERY = gql`
  query IsAuthenticated {
    authenticated @client
  }
`;

const Home = (props) => {
  const { data } = useQuery(AUTHENTICATED_QUERY);

  return (
    <Fragment>
      {data.authenticated && <Navigation toggleTheme={props.toggleTheme} />}
      <div className="site-wrapper">
        <div className='container'>
          <Pages />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;