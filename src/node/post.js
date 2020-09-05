import React from "react";
import Layout from "../components/layout/MainLayout";

export default ({ pageContext }) => (
  <Layout>
    <h2>Post Here</h2> {console.log(pageContext)}
  </Layout>
);
