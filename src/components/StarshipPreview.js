import React from 'react';

const StarshipPreview = ({ ...props }) => {
    const starship = { ...props };

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
          
        </div>
    )

};
export default StarshipPreview;