import React from 'react';
import {
  CollectionTileWrapper,
  CollectionTileContent,
  Title,
  Description,
} from './styles';
import BacgroundImage from 'gatsby-background-image';
import { StyledLink } from '../StyledLink';

export function CollectionTile({
  destination,
  description,
  title,
  backgroundImage,
  main,
}) {
  return (
    <CollectionTileWrapper>
      <BacgroundImage fluid={backgroundImage} />
      <CollectionTileContent>
        <div>
          <Title main={main}>{title}</Title>
          <Description main={main}>{description}</Description>
          <StyledLink to={destination}>shop now</StyledLink>
        </div>
      </CollectionTileContent>
    </CollectionTileWrapper>
  );
}
