import React from 'react';

import {
  Wrapper,
  Navs,
  Nav,
  SubMenus,
  SubMenuHeader,
  SubMenuLink,
  BaseLine,
  SocialLinkWrapper,
  AcknowledgementStatmentWrapper,
  AcknowledgementStatmentDescription,
} from './styles';
import {
  Linktree,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Tiktok,
  Youtube,
} from 'src/assets/icons';
import { Logo, Flag } from 'src/assets/images';

const MainFooter = () => {
  return (
    <Wrapper>
      <Navs>
        <Nav>
          <SubMenus>
            <SubMenuHeader>Company</SubMenuHeader>
            <SubMenuLink to="/blog">Blog</SubMenuLink>
            <SubMenuLink to="/about">About</SubMenuLink>
            <SubMenuLink to="/press">Press</SubMenuLink>
            <SubMenuLink to="/careers">Careers</SubMenuLink>
            <SubMenuLink to="/social-good">Social Good</SubMenuLink>
            <SubMenuLink to="/contact">Contact</SubMenuLink>
          </SubMenus>
        </Nav>
        <Nav>
          <SubMenus>
            <SubMenuHeader>Partnerships</SubMenuHeader>
            <SubMenuLink to="/enterprise">Linktree for Enterprise</SubMenuLink>
            <SubMenuLink to="/charities">Charities</SubMenuLink>
            <SubMenuLink to="/linktree-ambassador">
              Linktree Ambassador
            </SubMenuLink>
          </SubMenus>
        </Nav>
        <Nav>
          <SubMenus>
            <SubMenuHeader>Support</SubMenuHeader>
            <SubMenuLink to="/help">Help Topics</SubMenuLink>
            <SubMenuLink to="/getting-started">Getting Started</SubMenuLink>
            <SubMenuLink to="/features">Features How To</SubMenuLink>
            <SubMenuLink to="/faqs">FAQs</SubMenuLink>
            <SubMenuLink to="/report">Report a violation</SubMenuLink>
          </SubMenus>
        </Nav>
        <Nav>
          <SubMenus>
            <SubMenuHeader>Trust &amp; Legal</SubMenuHeader>
            <SubMenuLink to="/terms">Terms &amp; Conditions</SubMenuLink>
            <SubMenuLink to="/privacy">Privacy Policy</SubMenuLink>
            <SubMenuLink to="/trust-centre">Trust Centre</SubMenuLink>
          </SubMenus>
        </Nav>
      </Navs>

      <BaseLine>
        <Logo />
        <SocialLinkWrapper>
          <Linktree size={21} to="https://linktr.ee/linktr.ee" />
          <Instagram size={20} to="https://www.instagram.com/linktr.ee/" />
          <Facebook size={20} to="https://www.facebook.com/Linktree/" />
          <Twitter size={20} to="https://twitter.com/linktree_" />
          <Linkedin size={20} to="https://www.linkedin.com/company/linktree/" />
          <Tiktok size={20} to="https://www.tiktok.com/@linktr.ee" />
          <Youtube
            size={20}
            to="https://www.youtube.com/channel/UC8We2IKQo4lbongz7uOn2vA"
          />
        </SocialLinkWrapper>
      </BaseLine>

      <AcknowledgementStatmentWrapper>
        <Flag />
        <AcknowledgementStatmentDescription>
          We acknowledge the Traditional Custodians of the land on which our
          office stands, The Wurundjeri people of the Kulin Nation, and pay our
          respects to Elders past, present and emerging.
        </AcknowledgementStatmentDescription>
      </AcknowledgementStatmentWrapper>
    </Wrapper>
  );
};

export default MainFooter;
