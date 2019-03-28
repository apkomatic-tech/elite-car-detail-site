/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const testData = {
  name: 'Foo'
};

module.exports.createPages = async ({ actions: { createPage } }) => {
  createPage({
    path: '/test',
    component: require.resolve('./src/templates/test.js'),
    context: { testData }
  });
};
