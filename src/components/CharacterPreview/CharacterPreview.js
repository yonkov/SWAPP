import React from 'react';
import { NavLink } from 'react-router-dom';
import './CharacterPreview.css'
const CharacterPreview = ({ ...props }) => {
    const person = { ...props };

    return (
        <div className="page-content">
            <div className="character-preview">
                <div className="card-heading">
                    <img src={person.image} className="character-thumbnail" alt="episode-poster" />
                    <h2 className="card-title">{person.name}</h2>
                </div>
                <div className="cad-body">
                    <h5 className="card-subtitle mb-2 text-muted">Height: {person.height} </h5>
                    <h5 className="card-subtitle mb-2 text-muted">Weight: {person.mass} </h5>
                    <h5 className="card-subtitle mb-2 text-muted">Species: {person.species.name} </h5>
                    <h5 className="card-subtitle mb-2 text-muted">Home World: {person.homeworld.name} </h5>
                </div>

            </div>
            <div className="starships-list">
            <h2 className="header">Piloted Starships</h2>
            <hr/>
            <ul key={person.id} className="starships">
                {person.starships.edges.map(starship =>
                    <li key={starship.node.id} className="starship">
                        <NavLink className="starship-entry"
                            variant="nav"
                            key={starship.node.id}
                            to={`/starships/${starship.node.id}`}>
                            <img src={starship.node.image} className="starship-thumbnail" alt="starship-poster" />
                            <div className="character-content-body"><h2 className="header">{starship.node.name}</h2></div>
                        </NavLink>
                    </li>)}
            </ul>

            </div>
        </div>
    )

};
export default CharacterPreview;