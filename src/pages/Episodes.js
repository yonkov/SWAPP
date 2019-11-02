import React from 'react';
import { Query } from "react-apollo";
import { Link as RouterLink } from 'react-router-dom';
import { Box, Heading, Link, Button } from 'rebass';

import gql from "graphql-tag";
import EpisodePreview from '../components/EpisodePreview';

const Episodes = () => (

  <Query query={gql`
      {
        allEpisodes (first:6) {
          totalCount
          edges{
            node{
              episodeId
              title
              image
              openingCrawl
            }
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) {
        localStorage.clear();
        return <p>Error :(</p>;
      }

      return data.allEpisodes.edges.map(({ node }) => (
        <div key={node.episodeId} className="content">
              <Link  className="blog-entry"
                as={RouterLink}
                variant="nav"       
                key={node.episodeId}
                to={`/episode/${node.episodeId}`}>
              <img src={node.image} className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt='starwars-episode-thumbnail'/>
              <div className="blog-content-body">
                <h2 className="header">{node.title}</h2>
                <p className="description">{node.openingCrawl.substring(0,221)+"..."}</p>
              </div>
            </Link>
          </div>
      ));
    }}
  </Query>
);
export default Episodes;