import gql from 'graphql-tag';

export const characterQuery = gql`
  query CharacterQuery($characterId: ID!) {
    person(id: $characterId){
        name
        height
        mass
        image
        species{
            name
        }
        homeworld{
            name
        }
        starships{
            edges{
                node{
                    id
                    image
                    name
                }
            }
        }
      }
            
    }
`;