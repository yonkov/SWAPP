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