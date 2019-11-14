import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link as RouterLink } from 'react-router-dom';
import {Link} from 'rebass';
import RedirectToLogin from '../../components/RedirectToLogin/RedirectToLogin';
import Loading from '../../components/Loading/Loading';
import './Episodes.css'
import {episodesQuery} from '../../client/queries/episodesQuery'

const Episodes = () => {
  const first = 8;
  const { data, loading, error } = useQuery(episodesQuery, {
    variables: { first }
  })

      if (loading) return <Loading/>;
      if (error)return <RedirectToLogin/>
      

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
  ))
};
export default Episodes;