import React from 'react';
import {
  CollectionTileWrapper,
  CollectionTileContent,
  Title,
  Description,
} from './styles';
import BacgroundImage from 'gatsby-background-image';

export function CollectionTile({ description, title, backgroundImage, main }) {
  return (
    <CollectionTileWrapper>
      <BacgroundImage fluid={backgroundImage} />
      <CollectionTileContent>
        <div>
          <Title main={main}>{title}</Title>
          <Description main={main}>{description}</Description>
        </div>
      </CollectionTileContent>
    </CollectionTileWrapper>
  );
}
