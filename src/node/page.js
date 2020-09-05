import React from "react";
import Layout from "../components/layout/MainLayout";
import HomePage from '../components/routes/Home/Home'

export default ({ pageContext }) => {
  // const blocks = data.wordpressPage.acf ? data.wordpressPage.acf.block_page : null;
  // const yoast = data.wordpressPage.yoast_meta
  let RenderThis = null;
  const route = pageContext.slug
  switch(route){
    case('home'):
      RenderThis = <HomePage /> 
      break;
    default:
      RenderThis = <h2>No Page template for <em>{pageContext.slug}</em> route! {console.log(pageContext)}</h2>
  }
  return (
    <Layout>
      {RenderThis}
    </Layout>
  );
};

