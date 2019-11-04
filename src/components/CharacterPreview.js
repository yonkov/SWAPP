import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'rebass';
const CharacterPreview = ({ ...props }) => {
    const person = { ...props };

    return (
        <div className="card" style={{ 'width': '100%', 'marginTop': '10px' }}>
            <div className="card-heading">
                <img src={person.image} className="episode-thumbnail" alt="episode-poster" />
                <h2 className="card-title">{person.name}</h2>
            </div>

            <h5 className="card-subtitle mb-2 text-muted">Height: {person.height} </h5>
            <h5 className="card-subtitle mb-2 text-muted">Weight: {person.mass} </h5>
            <h5 className="card-subtitle mb-2 text-muted">Species: {person.species.name} </h5>
            <h5 className="card-subtitle mb-2 text-muted">Home World: {person.homeworld.name} </h5>
            <div className="card-button">Piloted Starships</div>

            <ul key={person.id} className="starships-list">
                {person.starships.edges.map(starship =>
                    <li key={starship.node.id}>
                        <Link className=""
                            as={RouterLink}
                            variant="nav"
                            key={starship.node.id}
                            to={`/starships/${starship.node.id}`}>
                            <img src={starship.node.image} className="starship-thumbnail" alt="starship-poster" />
                            {starship.node.name}
                        </Link>
                    </li>)}
            </ul>
        </div>
    )

};
export default CharacterPreview;