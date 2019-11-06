import React, {Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import './Characters.css'
import gql from "graphql-tag";
import RedirectToLogin from '../../components/RedirectToLogin';
import Loading from '../../components/LoginForm/Loading';

const charactersQuery = gql`
  query CharactersQuery($first: Int!, $after: String) {
    allPeople(first: $first, after: $after){
      edges{
        node{
          id
          image
          name
        }
      }
      pageInfo{
        hasNextPage
        endCursor
      }
    }
      
    }
`;

const Characters = () => {
  let first = 12;

  const { data, loading, error, fetchMore } = useQuery(charactersQuery, {
    variables: { first }
  })

  if (loading) return <Loading/>;
  if (error)return <RedirectToLogin/>

  const [...allPeople] = data.allPeople.edges;
  let { hasNextPage, endCursor } = data.allPeople.pageInfo;


  const loadMoreResults = () => {
    fetchMore({
      variables: {
        after: endCursor,
        first: 12
      },
      updateQuery: (prev, { fetchMoreResult: { allPeople } }) => {

        return {
          allPeople: {
            ...allPeople,
            edges: [
              ...prev.allPeople.edges,
              ...allPeople.edges]
          },
        };
      },
    });
  };

  const characterLinsting = allPeople.map(({ node }) => (
    <div key={node.id} className="character-box">
      <NavLink className="character-entry"
        variant="nav"
        key={node.id}
        to={`/characters/${node.id}`}>
        <img src={node.image} alt='starwars-episode-thumbnail' />
        <div className="character-content-body">
          <h2 className="header">{node.name}</h2>
        </div>
      </NavLink>
    </div>
  ));

  return (
    <Fragment>
    <div className="page-content">
      {characterLinsting}
    </div>
    {hasNextPage && (
      <div className="page-content center-text">
        <button onClick={loadMoreResults}>Load More</button>
      </div>
    )}
  </Fragment>
  );

}

export default Characters;