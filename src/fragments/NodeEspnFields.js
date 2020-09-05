import { graphql } from "gatsby";

export const NodeEspnFields = graphql`
  fragment NodeEspnFields on EspnJson {
    playerId
    pos
    team
    espnRankPos
    espnRankOverall
    bye
    auction
  }
`;
