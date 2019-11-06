import React, {Fragment} from 'react';
import { Query } from "react-apollo";
import { Link as RouterLink } from 'react-router-dom';
import { Box, Heading, Link, Button } from 'rebass';
import { useQuery, useMutation } from '@apollo/react-hooks';

import gql from "graphql-tag";
import RedirectToLogin from '../components/RedirectToLogin';

const charactersQuery = gql`
  query CharactersQuery($first: Int!, $after: String) {
    allPeople(first: $first, after: $after){
      edges{
        node{
          id
          image
          name
        }
      }
      pageInfo{
        hasNextPage
        endCursor
      }
    }
      
    }
`;

const Characters = () => {
  let first = 12;

const {data, loading, error, fetchMore} = useQuery(charactersQuery, {
  variables: {first}
})

if (loading) return <p>Loading...</p>;
if (error)return (
  <RedirectToLogin/>
)

const [...allPeople] = data.allPeople.edges;
let {hasNextPage, endCursor} = data.allPeople.pageInfo;


const loadMoreResults = () => {
  fetchMore({
    variables: {
      after: endCursor,
      first: 12
    },
    updateQuery: (prev, { fetchMoreResult: {allPeople}}) => {
              
              return {
                allPeople: {
                  ...allPeople,
                    edges: [
                    ...prev.allPeople.edges, 
                    ...allPeople.edges]
                },
              };
    },
  });
};

const characterLinsting= allPeople.map(({ node }) => (
  <div key={node.id} className="content">
      <Link  className="blog-entry"
          as={RouterLink}
          variant="nav"       
          key={node.id}
          to={`/characters/${node.id}`}>
        <img src={node.image} className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt='starwars-episode-thumbnail'/>
        <div className="blog-content-body">
          <h2 className="header">{node.name}</h2>
        </div>
      </Link>
  </div>
));

return (
  <Fragment>
    {characterLinsting}
    {hasNextPage && (
        <Box m={3} textAlign="center">
          <Button onClick={loadMoreResults}>Load More</Button>
        </Box>
      )}
  </Fragment>
);

}

export default Characters;