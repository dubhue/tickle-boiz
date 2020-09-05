// import Theme from "./src/vars/ThemeOptions";

// const path = require(`path`);

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage, createRedirect } = actions;
//   createRedirect({
//     fromPath: "/",
//     toPath: `${Theme.paths.home}`,
//     isPermanent: true,
//     redirectInBrowser: true
//   });
//   const pageTemplate = path.resolve("./src/node/page.js");
//   createRedirect({
//     fromPath: "/home",
//     toPath: `/`,
//     isPermanent: true,
//     redirectInBrowser: true
//   });
//   createRedirect({
//     fromPath: `${Theme.paths.home}`,
//     toPath: `/`,
//     isPermanent: true,
//     redirectInBrowser: true
//   });
//   return graphql(`
//     {
//       pages: allContentfulPages {
//         edges {
//           node {
//             slug
//             title
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       throw result.errors;
//     }

//     // Create site pages
//     result.data.pages.edges.forEach(edge => {
//       createPage({
//         // Path for this page — required
//         path: `${edge.node.slug}`,
//         component: pageTemplate,
//         context: edge.node
//       });
//     });
//   });
// };
