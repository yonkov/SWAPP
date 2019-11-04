import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { useParams } from 'react-router-dom';
import { Box } from 'rebass';
import { useQuery, useMutation } from '@apollo/react-hooks';
import CharacterPreview from '../components/CharacterPreview';

const episodeQuery = gql`
  query EpisodeQuery($characterId: ID!) {
    person(id: $characterId){
        name
        height
        mass
        image
        species{
            name
        }
        homeworld{
            name
        }
        starships{
            edges{
                node{
                    id
                    image
                    name
                }
            }
        }
      }
            
    }
`;


const Character = () => {
    let { characterId } = useParams()
     
       
    const {data, loading, error, refetch} = useQuery(episodeQuery, {
        variables: {characterId}
    })

    if (loading) return <p>Loading...</p>;
    if (error) return (localStorage.clear())

    const {...person} = data.person;
    
    return(
        <Box width={[400, 600]} mx="auto">
            <CharacterPreview  {...person} my={2} />
        </Box>
    )

};
export default Character;