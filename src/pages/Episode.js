import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { useParams, withRouter } from 'react-router-dom';
import { Box } from 'rebass';
import { useQuery, useMutation } from '@apollo/react-hooks';
import EpisodePreview from '../components/EpisodePreview';

const episodeQuery = gql`
  query EpisodeQuery($episodeId: ID!) {
    episode(id: $episodeId) {
        id
        title
        image
        director
        releaseDate
        openingCrawl
        people {
          totalCount
          edges{
            cursor
            node{   
              id
              name
              image
            }
          }
        }
      }
    }
`;


const Episode = () => {
    let { episodeId } = useParams() ;
     episodeId = 'films.'+episodeId;
     
    
    
    const {data, loading, error, refetch} = useQuery(episodeQuery, {
        variables: {episodeId}
    })

    if (loading) return <p>Loading...</p>;
    if (error) return (localStorage.clear())


    const {...episode} = data.episode;
    
    return(
        <Box width={[400, 600]} mx="auto">
            <EpisodePreview  {...episode} my={2} />
        </Box>
    )

};
export default Episode;