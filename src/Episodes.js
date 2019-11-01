import React from 'react';
import { Query } from "react-apollo";

import gql from "graphql-tag";

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
            }
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.allEpisodes.edges.map(({ node }) => (
        <div key={node.episodeId} className="content">
            <a className="blog-entry"
              href="http://phototravelworld.com/2019/08/30/%d0%ba%d0%b0%d0%ba-%d0%b4%d0%b0-%d1%81%d1%82%d0%b0%d0%bd%d0%b5%d0%bc-%d1%84%d1%80%d0%b8%d0%b9%d0%bb%d0%b0%d0%bd%d1%81%d1%8a%d1%80%d0%b8-%d0%b7%d0%b0-%d1%81%d0%b5%d0%b4%d0%bc%d0%b8%d1%86%d0%b0-%d0%b8/">
              <img src={node.image} className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt='starwars-episode-thumbnail'/>
              <div className="blog-content-body">
                <h2 className="header">{node.title}</h2>
              </div>
            </a>;
          </div>
      ));
    }}
  </Query>
);
export default Episodes;