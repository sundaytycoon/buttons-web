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
} from './Footer.styles';
import { Logo } from './';

import {
  Linktree,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Tiktok,
  Youtube,
} from '../assets/icons';
import { Flag } from '../assets/images';

const Footer = () => {
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
          <Linktree />
          <Instagram />
          <Facebook />
          <Twitter />
          <Linkedin />
          <Tiktok />
          <Youtube />
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

export default Footer;
