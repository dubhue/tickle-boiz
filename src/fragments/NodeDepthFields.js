import { graphql } from "gatsby";

export const NodeDepthFields = graphql`
  fragment NodeDepthFields on DepthJson {
    playerId
    pos
    team
    depthId
    status
    cost
  }
`;
