import React from 'react';
import { CollectionTile } from '../CollectionTile';
import { RemainingCollections } from './styles';

export function HomepageCollectionsGrid({ collections }) {
  const mainCollection = collections.find(
    collection => collection.title === 'All collection 2020'
  );
  const remainingCollections = collections.filter(
    collection => collection.title !== 'All collection 2020'
  );

  return (
    <div>
      {!!mainCollection && (
        <CollectionTile
          main
          title={mainCollection.title}
          description={mainCollection.description}
          backgroundImage={mainCollection.image.localFile.childImageSharp.fluid}
        />
      )}
      <RemainingCollections>
        {remainingCollections.map(collection => (
          <CollectionTile
            title={collection.title}
            description={collection.description}
            backgroundImage={collection.image.localFile.childImageSharp.fluid}
            key={collection.shopifyId}
          />
        ))}
      </RemainingCollections>
    </div>
  );
}
