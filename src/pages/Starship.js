import React from 'react';
import { useParams} from 'react-router-dom';
import { Box } from 'rebass';
import { useQuery} from '@apollo/react-hooks';
import StarshipPreview from '../components/StarshipPreview/StarshipPreview';
import {starshipQuery} from '../client/queries/starshipQuery'
import RedirectToLogin from '../components/RedirectToLogin/RedirectToLogin';
import Loading from '../components/Loading/Loading';

const Starship = () => {
    const { starshipId } = useParams() ;
     
    const {data, loading, error} = useQuery(starshipQuery, {
        variables: {starshipId}
    })

    if (loading) return <Loading/>;
    if (error) return <RedirectToLogin/>


    const {...starship} = data.starship;
    
    
    return(
        <Box width={[400, 600]} mx="auto">
            <StarshipPreview  {...starship} my={2} />
        </Box>
    )

};
export default Starship;