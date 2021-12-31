import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import theme from 'src/styles/theme';
import { HEIGHT } from 'src/styles/layout';
import { MainLogo } from 'src/assets/images';
import { Button, IconButton } from 'src/components/button';
import { throttle } from 'src/utils';
import {
  Linktree,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Tiktok,
  Youtube,
} from 'src/assets/icons';
import {
  Container,
  LeftWrapper,
  NavMenuList,
  NavMenuItem,
  NavSubMenuWrappr,
  NavSubMenuItem,
  RightWrapper,
  SubContainer,
  SubMenuItem,
  SideContainer,
  SideHeader,
  SideMenuWrapper,
  SideMenuItem,
  SideDropdownMenuHeader,
  SideDropdownMenuWrapper,
  SideDropdownMenuItem,
  SideFooter,
  SideFooterMenuWrapper,
  SideFooterMenuItem,
  SideFooterSocailLinkWrapper,
} from './style';

const DropdownMenu = ({ label, menus }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SideDropdownMenuHeader
        open={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{label}</span>
        <IconButton
          icon={<i className="fas fa-bars"></i>}
          onClick={() => setOpenSide(true)}
        />
      </SideDropdownMenuHeader>
      <SideDropdownMenuWrapper open={open}>
        {menus.map(({ to, text }, i) => (
          <SideDropdownMenuItem>
            <Link key={i} to={to}>
              {text}
            </Link>
          </SideDropdownMenuItem>
        ))}
      </SideDropdownMenuWrapper>
    </>
  );
};

export const Mobile = ({ banner, hasAuthentication = false }) => {
  const [hidingBanner, setHidingBanner] = useState(!banner);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(''); // '' | 'up' | 'down'
  const [openSide, setOpenSide] = useState(false);
  const intersectionRef = useRef(null);

  useEffect(() => {
    let intersectionObserver = null;

    if (banner) {
      intersectionObserver = new IntersectionObserver(
        ([entry]) => {
          setHidingBanner(entry.rootBounds.y > entry.boundingClientRect.y);
        },
        { threshold: 0.5, rootMargin: `${HEIGHT.BANNER.MOBILE}px` }
      );
      intersectionObserver.observe(intersectionRef.current);
    }

    return () => {
      intersectionObserver && intersectionObserver.disconnect();
    };
  }, [banner]);

  useEffect(() => {
    const scrollEvent = throttle(() => {
      const scrollY = window.scrollY;

      setScrollDirection(scrollY <= lastScrollY ? 'up' : 'down');
      setLastScrollY(scrollY);
    }, 200);
    window.addEventListener('scroll', scrollEvent);

    return () => window.removeEventListener('scroll', scrollEvent);
  }, [lastScrollY, scrollDirection]);

  return (
    <>
      <Container mobile hidingBanner={hidingBanner}>
        <LeftWrapper>
          <Link to="/">
            <MainLogo />
          </Link>
        </LeftWrapper>
        <RightWrapper mobile>
          {!hasAuthentication && (
            <>
              <Link to="/login">
                <NavMenuItem>Log in</NavMenuItem>
              </Link>
              <Button
                to="/login"
                size="sm"
                bg={theme.button.secondary}
                color={theme.base.black}
              >
                SIGN UP FREE
              </Button>
            </>
          )}
          <IconButton
            icon={<i className="fas fa-bars"></i>}
            onClick={() => setOpenSide(true)}
          />
        </RightWrapper>
      </Container>
      <SubContainer show={scrollDirection === 'up'} hidingBanner={hidingBanner}>
        <SubMenuItem>
          <Link to="/blog">Blog </Link>
        </SubMenuItem>
        <SubMenuItem>
          <Link to="/s/pricing">Pricing</Link>
        </SubMenuItem>
        <SubMenuItem>
          <Link to="/help">Help</Link>
        </SubMenuItem>
      </SubContainer>
      <SideContainer show={openSide}>
        <SideHeader>
          <Link to="/">
            <MainLogo />
          </Link>
          <IconButton
            icon={<i className="fas fa-times"></i>}
            onClick={() => setOpenSide(false)}
          />
        </SideHeader>
        <SideMenuWrapper>
          <SideMenuItem>
            <Link to="/login">Log In</Link>
          </SideMenuItem>
          <SideMenuItem>
            <Link to="/blog">Blog</Link>
          </SideMenuItem>
          <SideMenuItem>
            <Link to="/s/pricing">Pricing & Features</Link>
          </SideMenuItem>
          <SideMenuItem>
            <Link to="/help">Help</Link>
          </SideMenuItem>
        </SideMenuWrapper>
        <SideFooter>
          <SideFooterMenuWrapper>
            <SideFooterMenuItem>
              <Link to="/s/report">Report a violation</Link>
            </SideFooterMenuItem>
            <SideFooterMenuItem>
              <Link to="/s/careers">Careers</Link>
            </SideFooterMenuItem>
            <SideFooterMenuItem>
              <Link to="/s/about">About</Link>
            </SideFooterMenuItem>
          </SideFooterMenuWrapper>
          <SideFooterSocailLinkWrapper>
            <Linktree size={21} to="https://linktr.ee/linktr.ee" />
            <Instagram size={20} to="https://www.instagram.com/linktr.ee/" />
            <Facebook size={20} to="https://www.facebook.com/Linktree/" />
            <Twitter size={20} to="https://twitter.com/linktree_" />
            <Linkedin
              size={20}
              to="https://www.linkedin.com/company/linktree/"
            />
            <Tiktok size={20} to="https://www.tiktok.com/@linktr.ee" />
            <Youtube
              size={20}
              to="https://www.youtube.com/channel/UC8We2IKQo4lbongz7uOn2vA"
            />
          </SideFooterSocailLinkWrapper>
        </SideFooter>
      </SideContainer>
      <div ref={intersectionRef} />
    </>
  );
};

export const Desktop = ({ banner, hasAuthentication = false }) => {
  const [hidingBanner, setHidingBanner] = useState(!banner);
  const intersectionRef = useRef(null);

  useEffect(() => {
    let intersectionObserver = null;

    if (banner) {
      intersectionObserver = new IntersectionObserver(
        ([entry]) => {
          setHidingBanner(entry.rootBounds.y > entry.boundingClientRect.y);
        },
        { threshold: 0.5, rootMargin: `${HEIGHT.BANNER.MOBILE}px` }
      );
      intersectionObserver.observe(intersectionRef.current);
    }

    return () => intersectionObserver && intersectionObserver.disconnect();
  }, [banner]);

  return (
    <>
      <Container hidingBanner={hidingBanner}>
        <LeftWrapper>
          <Link to="/">
            <MainLogo />
          </Link>
          <NavMenuList>
            <NavMenuItem>
              <span>Templates</span>
              <NavSubMenuWrappr>
                <NavSubMenuItem>
                  <Link to="/s/templates/sell">
                    <div>
                      <span>🛍</span>
                      <p>Sell My Products</p>
                    </div>
                    <p>
                      Linktree templates to help you sell your products to your
                      audience and followers
                    </p>
                  </Link>
                </NavSubMenuItem>
                <NavSubMenuItem>
                  <Link to="/s/templates/share">
                    <div>
                      <span>👀</span>
                      <p>Share My Content</p>
                    </div>
                    <p>
                      Linktree templates to help you share your content with
                      your audience and followers
                    </p>
                  </Link>
                </NavSubMenuItem>
                <NavSubMenuItem>
                  <Link to="/s/templates/grow">
                    <div>
                      <span>🌱</span>
                      <p>Sell My Products</p>
                    </div>
                    <p>
                      Linktree templates to help you grow your audience across
                      your socail media channels
                    </p>
                  </Link>
                </NavSubMenuItem>
              </NavSubMenuWrappr>
            </NavMenuItem>

            <NavMenuItem>
              <Link to="/blog">Blog</Link>
            </NavMenuItem>

            <NavMenuItem>
              {' '}
              <Link to="/s/pricing">Pricing </Link>
            </NavMenuItem>

            <NavMenuItem>
              <Link to="/help">Help</Link>
            </NavMenuItem>
          </NavMenuList>
        </LeftWrapper>
        <RightWrapper>
          {hasAuthentication ? (
            <>
              <NavMenuItem>
                <Link to="/logout">Sign out</Link>
              </NavMenuItem>

              <Button
                to="/admin"
                size="sm"
                bg={theme.button.secondary}
                color={theme.base.black}
              >
                ADMIN
              </Button>
            </>
          ) : (
            <>
              <NavMenuItem>
                <Link to="/login">Log in</Link>
              </NavMenuItem>

              <Button
                to="/login"
                size="sm"
                bg={theme.button.secondary}
                color={theme.base.black}
              >
                SIGN UP FREE
              </Button>
            </>
          )}
        </RightWrapper>
      </Container>
      <div ref={intersectionRef} />
    </>
  );
};
