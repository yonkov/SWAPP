import gql from 'graphql-tag';

export const starshipQuery = gql`
  query starshipQuery($starshipId: ID!) {
    starship(id: $starshipId) {
        id
        name
        image
        cost
        starshipClass
        crew
        maxAtmosphericSpeed
        hyperdriveRating
        maxMLPerHour
      }
    }
`;

export const starshipsQuery = gql `
  query Stats($starshipClass: String) {
    allStarships(first: 20, filter: { starshipClass: $starshipClass }) {
      totalCount
      edges {
        node {
          cost
          starshipClass
          maxAtmosphericSpeed
          crew
          hyperdriveRating
          maxMLPerHour
        }
      }
    }
  }
`;