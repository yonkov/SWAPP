import React from 'react';
import { Query } from "react-apollo";
import { Link as RouterLink } from 'react-router-dom';
import { Box, Heading, Link, Button } from 'rebass';

import gql from "graphql-tag";

const nodes = () => (

  <Query query={gql`
      {
        allPeople(first: 12){
            edges{
              node{
                id
                image
                name
              }
            }
          }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return (localStorage.clear())
      
      return data.allPeople.edges.map(({ node }) => (
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
    }}
  </Query>
);
export default nodes;