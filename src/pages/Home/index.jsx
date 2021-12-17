import React, { useRef, useState, useEffect } from 'react';

import HomeBanner from 'src/components/banners/HomeBanner';
import MainTitlebar from 'src/components/titlebars/MainTitlebar';
import MainFooter from 'src/components/footers/MainFooter';
import Typography from 'src/components/common/Typography';
import RoundedButton from 'src/components/buttons/RoundedButton';
import { Main, IntroSection, IntroLink } from './styles';
import theme from 'src/styles/theme';

const Home = () => {
  const [hidingBanner, setHidingBanner] = useState(false);
  const $bannerTrigger = useRef(null);

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
      <HomeBanner hide={hidingBanner} />
      <MainTitlebar moveUp={hidingBanner} />
      <div ref={$bannerTrigger} />

      <Main>
        {/* The Only ... */}
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
