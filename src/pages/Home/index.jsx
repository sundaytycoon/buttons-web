import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { HomeBanner } from 'src/components/banner';

import MainTitlebar from 'src/components/titlebars/MainTitlebar';
import MainFooter from 'src/components/footers/MainFooter';
import Typography from 'src/components/common/Typography';
import RoundedButton from 'src/components/button/RoundedButton';
import theme from 'src/styles/theme';
import {
  Main,
  IntroSection,
  IntroLink,
  IntroBackground,
  MobilePreviewWrapper,
  MobilePreviewContentWrapper,
  MobilePreviewContent,
  MobilePreviewContentHeader,
  MobilePreviewContentProfileWrapper,
  MobilePreviewContentProfilePictureSource,
  MobilePreviewContentProfilePictureImage,
  MobilePreviewButton,
  MobilePreviewSocialIconsWrapper,
  MobilePreviewSocialIcon,
  IntroRegisterWrapper,
  IntroLinkLine,
  IntroLinkFormWrapper,
  IntroLinkForm,
  IntroLinkFormImage,
  IntroLinkInputWrapper,
  IntroLinkInputInnerWrapper,
} from './styles';
import { Instagram, Spotify, Twitch } from 'src/assets/icons';
import Logo from 'src/assets/images/logo.png';

const IntroLinkInputPretext = () => {
  const [pretext, setPretext] = useState('');

  useEffect(() => {
    const text = 'yournamehere';
    let index = 0;

    const interval = setInterval(() => {
      setPretext(text.substring(0, index));

      if (index >= text.length) {
        clearInterval(interval);
      }

      index++;
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      {pretext}
      <span
        style={{
          position: 'absolute',
          top: 0,
          width: '1px',
          fontSize: 0,
          background: 'black',
        }}
      >
        |
      </span>
    </div>
  );
};

const Home = () => {
  const [hidingBanner, setHidingBanner] = useState(false);
  const $bannerTrigger = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHidingBanner(entry.rootBounds.y > entry.boundingClientRect.y);
      },
      { threshold: 0.5, rootMargin: '74px' }
    );
    observer.observe($bannerTrigger.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HomeBanner />
      <MainTitlebar moveUp={hidingBanner} />
      <div ref={$bannerTrigger} />

      <Main>
        {/* The Only ... */}
        <div>
          <IntroSection>
            <Typography level={4}>The Only Link You'll Ever Need</Typography>
            <Typography level={1.25}>
              Connect audiences to all of your content with just one link
            </Typography>
            <Typography level={1.25}>
              Already on Linktree? <IntroLink to="/login">Log in</IntroLink>
            </Typography>
            <RoundedButton hoverable color={theme.color.purple} to="/register">
              <Typography color={theme.color.white} level={1.25}>
                GET STARTED FOR FREE
              </Typography>
            </RoundedButton>
          </IntroSection>
          <IntroBackground />
          <MobilePreviewWrapper>
            <MobilePreviewContentWrapper>
              <MobilePreviewContent>
                <span>
                  <MobilePreviewContentHeader>
                    <MobilePreviewContentProfileWrapper>
                      <div
                        aria-hidden="true"
                        style={{ width: '100%', paddingBottom: '100%' }}
                      />
                      <picture>
                        <MobilePreviewContentProfilePictureSource type="image/webp" />
                        <MobilePreviewContentProfilePictureSource />
                        <MobilePreviewContentProfilePictureImage
                          alt="Join the PRO's on Linktree"
                          title="linktree-marketing-website-profile-images"
                          loading="lazy"
                        />
                      </picture>
                    </MobilePreviewContentProfileWrapper>
                  </MobilePreviewContentHeader>
                </span>
                <span>
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <MobilePreviewButton key={i} />
                    ))}
                </span>
                <span>
                  <MobilePreviewSocialIconsWrapper>
                    <MobilePreviewSocialIcon>
                      <Instagram />
                    </MobilePreviewSocialIcon>
                    <MobilePreviewSocialIcon>
                      <Spotify />
                    </MobilePreviewSocialIcon>
                    <MobilePreviewSocialIcon>
                      <Twitch />
                    </MobilePreviewSocialIcon>
                  </MobilePreviewSocialIconsWrapper>
                </span>
              </MobilePreviewContent>
            </MobilePreviewContentWrapper>
          </MobilePreviewWrapper>
          <IntroRegisterWrapper>
            <IntroLinkLine />
            <IntroLinkFormWrapper>
              <IntroLinkForm onSubmit={() => navigate('/register')}>
                <IntroLinkFormImage src={Logo} />
                <IntroLinkInputWrapper>
                  <span>linktr.ee/</span>
                  <IntroLinkInputInnerWrapper>
                    <IntroLinkInputPretext />
                  </IntroLinkInputInnerWrapper>
                </IntroLinkInputWrapper>
                <span>button</span>
              </IntroLinkForm>
            </IntroLinkFormWrapper>
          </IntroRegisterWrapper>
        </div>

        {/* Use it anywhere ... */}
        <section></section>

        {/* Link to ... */}
        <section></section>

        {/* Collect ... */}
        <section></section>

        {/* Easily ... */}
        <section></section>

        {/* Safe ... */}
        <section></section>

        {/* 3 cards ... */}
        <section></section>

        {/* 4 cards ... */}
        <section></section>

        {/* 4 featured ... */}
        <section></section>
      </Main>

      <MainFooter />
    </>
  );
};

export default Home;
