import React from 'react';
import { useParams } from 'react-router-dom';
import { Box } from 'rebass';
import { useQuery} from '@apollo/react-hooks';
import CharacterPreview from '../../components/CharacterPreview/CharacterPreview';
import Loading from '../../components/Loading/Loading';
import RedirectToLogin from '../../components/RedirectToLogin/RedirectToLogin';
import {characterQuery} from '../../client/queries/characterQuery'

const Character = () => {
    
    let { characterId } = useParams();
    
    const {data, loading, error} = useQuery(characterQuery, {
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