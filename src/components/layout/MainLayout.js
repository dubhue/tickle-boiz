/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
//import { useStaticQuery, graphql } from "gatsby";
import { MainLayout, Copyright } from "wmk-lib";

//import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <MainLayout
        Header={() => null}
        Footer={() => (
          <footer>
            <Copyright>Watermark Agency</Copyright>
          </footer>
        )}
      >
        {children}
      </MainLayout>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
