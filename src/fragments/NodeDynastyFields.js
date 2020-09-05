import { graphql } from "gatsby";

export const NodeDynastyFields = graphql`
  fragment NodeDynastyFields on DynastyJson {
    playerId
    age
    draftId
    dynastyRank
  }
`;
