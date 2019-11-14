import React from 'react';
import { useParams} from 'react-router-dom';
import { Box, Button } from 'rebass';
import { useQuery} from '@apollo/react-hooks';
import EpisodePreview from '../../components/EpisodePreview/EpisodePreview';
import Loading from '../../components/Loading/Loading';
import RedirectToLogin from '../../components/RedirectToLogin/RedirectToLogin';
import {episodeQuery} from '../../client/queries/episodeQuery'

const Episode = () => {
    let { episodeId } = useParams() ;
     episodeId = 'films.'+episodeId;
     //number of characters to display on page load
     const first = 5;
    
    const {data, loading, error, fetchMore} = useQuery(episodeQuery, {
        variables: {episodeId, first}
    })

    if (loading) return <Loading/>;
    if (error)return <RedirectToLogin/>


    const {...episode} = data.episode;
    let {hasNextPage, endCursor} = episode.people.pageInfo;
    

    const loadMorePeople = () => {
      fetchMore({
        variables: {
          after: endCursor,
          first: 5
        },
        updateQuery: (prev, { fetchMoreResult: {episode}}) => {
                  
          return {
            episode: {
              ...episode, 
              people: {
                ...episode.people,
                edges: [
                ...prev.episode.people.edges, 
                ...episode.people.edges]}
            },
          };
        },
      });
    };
    
    return(
      
        <Box width={[400, 600, 900]} mx="auto">
            <EpisodePreview  {...episode} my={2} />
            {hasNextPage && (
        <Box m={3} textAlign="center">
          <Button onClick={loadMorePeople}>Load More</Button>
        </Box>
      )}
        </Box>
    )

};
export default Episode;