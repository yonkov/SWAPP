import React from 'react';


const CharacterPreview = ({...props}) => {
    const person = {...props};
    
    return(
        <div className="card" style={{'width': '100%', 'marginTop': '10px'}}>
            <div className="card-heading">
                <img src={person.image} className="episode-thumbnail" alt="episode-poster"/>
                <h2 className="card-title">{person.name}</h2>
            </div>
             
            <h5 className="card-subtitle mb-2 text-muted">Height: {person.height} </h5>
            <h5 className="card-subtitle mb-2 text-muted">Weight: {person.mass} </h5>
            <h5 className="card-subtitle mb-2 text-muted">Species: {person.species.name} </h5>
            <h5 className="card-subtitle mb-2 text-muted">Home World: {person.homeworld.name} </h5>
            <div className="card-button">Piloted Starships</div> 
        </div>
    )

};
export default CharacterPreview;