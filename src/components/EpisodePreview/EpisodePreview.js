import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'rebass';
import './EpisodePreview.css'

const EpisodePreview = ({...props}) => {
    const episode = {...props};
    const characters = episode.people.edges;
    
    return(
        <div className="card" style={{'width': '100%', 'marginTop': '10px'}}>
            <div className="card-heading">
                <img src={episode.image} className="episode-thumbnail" alt="episode-poster"/>
                <h2 className="card-title">{episode.title}</h2>
            </div>
            <div className = "episode-description">
                <p className="description">{episode.openingCrawl}</p>
            </div>
            <h5 className="card-subtitle mb-2 text-muted">Director: {episode.director} </h5>
            <h5 className="card-subtitle mb-2 text-muted">Release date: {episode.releaseDate} </h5>

            <ul key={characters.id} className="characters">
                {characters.map(character => 
                <li key={character.node.id} className="character">
                    <Link className="character-entry"
                            as={RouterLink}
                            variant="nav"
                            key={character.node.id}
                            to={`/characters/${character.node.id}`}>
                            <img src={character.node.image} className="starship-thumbnail" alt="character-poster" />
                            <div className="character-content-body"><h2 className="header">{character.node.name}</h2></div>
                        </Link>
                </li>)}
            </ul>
        </div>
    )

};
export default EpisodePreview;