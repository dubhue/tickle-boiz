import { graphql } from "gatsby";

export const NodeRookiesFields = graphql`
  fragment NodeRookiesFields on RookiesJson {
    playerId
    age
    draftId
    rookieRank
  }
`;
