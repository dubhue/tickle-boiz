/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
// import PropTypes from "prop-types";
// import { useStaticQuery, graphql } from "gatsby";
import Header from "./Header";
import styled from "styled-components";

const Wrap = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Overpass+Mono&display=swap");
`;

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <Wrap>
      <Header //siteTitle={data.site.siteMetadata?.title || `Title`} 
      />
      <div>
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`
          }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </Wrap>
  );
};


export default Layout;
