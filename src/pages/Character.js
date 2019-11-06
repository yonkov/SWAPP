import React from 'react';
import gql from "graphql-tag";
import { useParams } from 'react-router-dom';
import { Box } from 'rebass';
import { useQuery} from '@apollo/react-hooks';
import CharacterPreview from '../components/CharacterPreview/CharacterPreview';
import Loading from '../components/LoginForm/Loading';
import RedirectToLogin from '../components/RedirectToLogin';

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
     
       
    const {data, loading, error} = useQuery(episodeQuery, {
        variables: {characterId}
    })

    if (loading) return <Loading/>;
    if (error)return <RedirectToLogin/>

    const {...person} = data.person;
    
    return(
        <Box width={[400, 600, 1000]} mx="auto">
            <CharacterPreview  {...person} my={2} />
        </Box>
    )

};
export default Character;