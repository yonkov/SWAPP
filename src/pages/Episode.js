import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { useParams, withRouter } from 'react-router-dom';
import { Box, Button } from 'rebass';
import { useQuery, useMutation } from '@apollo/react-hooks';
import EpisodePreview from '../components/EpisodePreview';

const episodeQuery = gql`
  query EpisodeQuery($episodeId: ID!, $first: Int, $after: String) {
    episode(id: $episodeId) {
        id
        title
        image
        director
        releaseDate
        openingCrawl
        people(first: $first, after: $after) {
          totalCount
          pageInfo{
            hasNextPage
            endCursor
          }
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
     //number of characters to display on page load
     let first = 5;
    
    const {data, loading, error, fetchMore} = useQuery(episodeQuery, {
        variables: {episodeId, first}
    })

    if (loading) return <p>Loading...</p>;
    if (error)return(
      localStorage.clear()
      )
    


    const {...episode} = data.episode;
    const {...allPeople} = episode.people.edges;
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
      
        <Box width={[400, 600]} mx="auto">
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