import React from 'react';

import { Wrapper, Content, ContentLink } from './styles';

const HomeBanner = ({ hide }) => {
  return (
    <Wrapper hide={hide}>
      <Content>
        <span>🎉 We just announced our new Shopify store feature! </span>
        <ContentLink to="/stores">Learn more</ContentLink>
      </Content>
    </Wrapper>
  );
};

export default HomeBanner;
