import React from 'react';


const EpisodePreview = ({...props}) => {
    const episode = {...props};
    const characters = episode.people.edges;
    console.log(characters);
    
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
                {characters.map(character => <li key={character.node.id}>{character.node.name}</li>)}
            </ul>
            <button className="card-button">Load more ...</button>
        </div>
    )

};
export default EpisodePreview;