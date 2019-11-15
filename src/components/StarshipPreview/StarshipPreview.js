import React from 'react';
import Loading from '../Loading/Loading';
import RedirectToLogin from '../RedirectToLogin/RedirectToLogin';
import {starshipsQuery} from '../../client/queries/starshipQuery'
import { useQuery} from '@apollo/react-hooks';
import RadarChartComponent from './../RadarChartComponent'
const StarshipPreview = ({ ...props }) => {
    const starship = { ...props };

    const {starshipClass} = starship;
    const {data, loading, error} = useQuery(starshipsQuery, {
        variables: {starshipClass}
    })

    if (loading) return <Loading/>;
    if (error) return <RedirectToLogin/>
    

    return (
        <div className="card" style={{ 'width': '100%', 'marginTop': '10px' }}>
            <div className="card-heading">
                <img src={starship.image} className="episode-thumbnail" alt="episode-poster" />
                <h2 className="card-title">{starship.name}</h2>
            </div>

            <h5 className="card-subtitle mb-2 text-muted">Class: {starship.starshipClass} </h5>
            <h5 className="card-subtitle mb-2 text-muted">Cost: {starship.cost} </h5>
            <h5 className="card-subtitle mb-2 text-muted">Crew: {starship.crew} </h5>
            <h5 className="card-subtitle mb-2 text-muted">Max Atmospheric Speed: {starship.maxAtmosphericSpeed} </h5>
            <h5 className="card-button">Hyperdrive rating: {starship.hyperdriveRating}</h5>
            <RadarChartComponent starship={starship} data={data} />
        </div>
        
    )

};
export default StarshipPreview;