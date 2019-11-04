import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { useParams, withRouter } from 'react-router-dom';
import { Box } from 'rebass';
import { useQuery, useMutation } from '@apollo/react-hooks';
import StarshipPreview from '../components/StarshipPreview';

const starshipQuery = gql`
  query starshipQuery($starshipId: ID!) {
    starship(id: $starshipId) {
        id
        name
        image
        cost
        starshipClass
        crew
        maxAtmosphericSpeed
        hyperdriveRating
      }
    }
`;


const Starship = () => {
    let { starshipId } = useParams() ;
     
    const {data, loading, error, refetch} = useQuery(starshipQuery, {
        variables: {starshipId}
    })

    if (loading) return <p>Loading...</p>;
    if (error) return (localStorage.clear())


    const {...starship} = data.starship;
    
    return(
        <Box width={[400, 600]} mx="auto">
            <StarshipPreview  {...starship} my={2} />
        </Box>
    )

};
export default Starship;