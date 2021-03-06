import React from 'react';
import {
  Layout,
  SEO,
  HomepageCollectionsGrid,
  FeaturedProducts,
} from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = React.useContext(ProductContext);
  console.log(collections);
  return (
    <Layout>
      <SEO description="MINDSTIR Store Home" title="Home" />
      <HomepageCollectionsGrid
        collections={collections.filter(
          collection => collection.title !== 'Featured Products'
        )}
      />
      {!!collections.find(
        collection => collection.title === 'Featured Products'
      ) && <FeaturedProducts />}
    </Layout>
  );
};
export default IndexPage;
