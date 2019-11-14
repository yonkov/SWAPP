import React from 'react';
import { useParams} from 'react-router-dom';
import { Box } from 'rebass';
import { useQuery} from '@apollo/react-hooks';
import StarshipPreview from '../components/StarshipPreview/StarshipPreview';
import {starshipQuery} from '../client/queries/starshipQuery'
import RedirectToLogin from '../components/RedirectToLogin/RedirectToLogin';

const Starship = () => {
    let { starshipId } = useParams() ;
     
    const {data, loading, error} = useQuery(starshipQuery, {
        variables: {starshipId}
    })

    if (loading) return <p>Loading...</p>;
    if (error) return <RedirectToLogin/>


    const {...starship} = data.starship;
    
    return(
        <Box width={[400, 600]} mx="auto">
            <StarshipPreview  {...starship} my={2} />
        </Box>
    )

};
export default Starship;