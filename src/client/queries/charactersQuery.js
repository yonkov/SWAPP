import gql from 'graphql-tag';

export const charactersQuery = gql`
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