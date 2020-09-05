import { graphql } from "gatsby";

export const NodeByeFields = graphql`
  fragment NodeByeFields on ByesJson {
    city
    team
    bye
  }
`;
