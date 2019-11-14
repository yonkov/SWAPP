import gql from 'graphql-tag';

export const episodesQuery = gql`
  query EpisodesQuery($first: Int!) {
    allEpisodes (first: $first) {
      totalCount
      edges{
        node{
          episodeId
          title
          image
          openingCrawl
        }
      }
    }
      
    }
`;