import React from 'react';
import { Query } from "react-apollo";
import { Link as RouterLink } from 'react-router-dom';
import {Link} from 'rebass';
import gql from "graphql-tag";
import RedirectToLogin from '../../components/RedirectToLogin';
import Loading from '../../components/LoginForm/Loading';
import './Episodes.css'

const Episodes = () => (

  <Query query={gql`
      {
        allEpisodes (first:8) {
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
      if (loading) return <Loading/>;
      if (error) return <RedirectToLogin/>;

      return data.allEpisodes.edges.map(({ node }) => (
        <div key={node.episodeId} className="content">
          <Link className="blog-entry"
            as={RouterLink}
            variant="nav"
            key={node.episodeId}
            to={`/episodes/${node.episodeId}`}>
            <img src={node.image} alt='starwars-episode-thumbnail' />
            <div className="blog-content-body">
              <h2 className="header">{node.title}</h2>
              <p className="description">{node.openingCrawl.substring(0, 221) + "..."}</p>
            </div>
          </Link>
        </div>
      ));
    }}
  </Query>
);
export default Episodes;