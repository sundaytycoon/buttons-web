import styled from 'styled-components';
import { Link } from 'react-router-dom';

import HomeIntroBackground from 'src/assets/images/home-intro-background.png';
import MobileDeviceFrame from 'src/assets/images/mobile-device-frame.png';

export const Main = styled.main`
  padding-top: ${({ theme }) => {
    const { banner, titlebar } = theme.height;
    return theme.combine(banner, titlebar);
  }};
  display: flex;
  flex-direction: column;
`;

export const IntroSection = styled.section`
  padding: 8.8vw 0 10vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:first-child) {
    padding-top: ${({ theme }) => theme.spacing(1.25)};
    line-height: 1.5;
  }

  & > :last-child {
    padding-top: ${({ theme }) => theme.spacing(4)};
  }
`;

export const IntroLink = styled(Link)`
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

export const IntroBackground = styled.div`
  margin-top: ${({ theme }) => `calc(-27.7778vw - ${theme.height.titlebar})`};
  width: 100%;
  height: 55vh;
  background-image: url(${HomeIntroBackground});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center bottom;
`;

export const MobilePreviewWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const MobilePreviewContentWrapper = styled.div`
  position: relative;
`;

export const MobilePreviewContent = styled.div`
  width: ${({ theme }) => theme.width.mobileDevice};
  height: ${({ theme }) => theme.height.mobileDevice};
  border-radius: 2%;
  background-image: linear-gradient(
    155deg,
    rgb(11, 175, 255),
    rgb(57, 224, 155) 50%,
    rgb(255, 194, 19)
  );
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 8%) 0 96px 96px 0;

  &::after {
    content: '';
    position: absolute;
    background-image: url(${MobileDeviceFrame});
    background-repeat: round;
    inset: -1.8% -5.6%;
  }
`;

export const MobilePreviewContentHeader = styled.div`
  position: relative;
  border-radius: 50%;
  width: 96px;
  height: 96px;
  margin: 32px auto;
  /* will-change: transform, opacity; */
  background-color: ${({ theme }) => theme.color.white};
  overflow: hidden;
`;

export const MobilePreviewContentProfileWrapper = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const profileSrcUrl =
  '//images.ctfassets.net/lbsm39fugycf/5n5fnT964RZWws7B16FIoB/a8e310d76ed53370a7c2e199c0492e98/linktree-marketing-website-profile-images.gif';
const PictureImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  opacity: 1;
  transition: opacity 0.5s ease 0s;
`;

export const MobilePreviewContentProfilePictureSource = (props) => (
  <source
    srcSet={`
      ${profileSrcUrl}?w=24&h=24&q=75&fm=webp 24w,
      ${profileSrcUrl}?w=48&h=48&q=75&fm=webp 48w,
      ${profileSrcUrl}?w=96&h=96&q=75&fm=webp 96w,
      ${profileSrcUrl}?w=144&h=144&q=75&fm=webp 144w,
      ${profileSrcUrl}?w=192&h=192&q=75&fm=webp 192w,
      ${profileSrcUrl}?w=288&h=288&q=75&fm=webp 288w,
      ${profileSrcUrl}?w=480&h=480&q=75&fm=webp 480w,
    `}
    sizes="(max-width: 96px) 100vw, 96px"
    {...props}
  />
);

export const MobilePreviewContentProfilePictureImage = (props) => (
  <PictureImage
    srcSet={`
      ${profileSrcUrl}?w=24&h=24&q=75&fm=webp 24w,
      ${profileSrcUrl}?w=48&h=48&q=75&fm=webp 48w,
      ${profileSrcUrl}?w=96&h=96&q=75&fm=webp 96w,
      ${profileSrcUrl}?w=144&h=144&q=75&fm=webp 144w,
      ${profileSrcUrl}?w=192&h=192&q=75&fm=webp 192w,
      ${profileSrcUrl}?w=288&h=288&q=75&fm=webp 288w,
      ${profileSrcUrl}?w=480&h=480&q=75&fm=webp 480w,
    `}
    src={`${profileSrcUrl}?w=96&h=96&q=75&fm=webp 96w`}
    sizes="(max-width: 96px) 100vw, 96px"
    {...props}
  />
);

export const MobilePreviewButton = styled.div`
  width: ${({ theme }) => theme.combine(theme.width.mobileDevice, '-48px')};
  height: 0;
  margin: ${({ theme }) => `0 auto ${theme.spacing(2)}`};
  padding-top: ${({ theme }) => theme.spacing(7)};
  border-radius: ${({ theme }) => theme.spacing(1)};
  background-color: ${({ theme }) => theme.color.white};
`;

export const MobilePreviewSocialIconsWrapper = styled.div`
  width: 136px;
  margin: ${({ theme }) => `${theme.spacing(3)} auto 0`};
  display: flex;
  justify-content: space-between;
`;

export const MobilePreviewSocialIcon = styled.div`
  width: ${({ theme }) => theme.width.icon};
  height: ${({ theme }) => theme.height.icon};
  position: relative;
  color: ${({ theme }) => theme.color.white};
`;

export const IntroRegisterWrapper = styled.div`
  min-height: 300px;
`;

export const IntroLinkLine = styled.div`
  width: 0px;
  height: 168px;
  margin-top: 0;
  display: block;
  border-width: 0px 0px 0px 2px;
  border-top-style: initial;
  border-right-style: initial;
  border-bottom-style: initial;
  border-top-color: initial;
  border-right-color: initial;
  border-bottom-color: initial;
  border-image: initial;
  margin: 0px auto;
  border-left-style: dashed;
  border-left-color: rgb(117, 81, 233);
`;

export const IntroLinkFormWrapper = styled.div`
  margin: 0px auto;
  padding: 0px;
  width: 576px;
  height: 80px;
  border-radius: 48px;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid rgb(117, 81, 233);
  transform-origin: 50% 50%;
  transform: translateY(-50%);
  overflow: hidden;
  max-width: 84vw;
`;

export const IntroLinkForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `0 ${theme.spacing(2)} 0 ${theme.spacing(4)}`};
  position: absolute;
  inset: 0px;
`;

export const IntroLinkFormImage = styled.img`
  width: 32px;
  height: 32px;
`;

export const IntroLinkInputWrapper = styled.span`
  display: flex;
  justify-content: flex-start;
  font-size: 2rem;
  letter-spacing: -0.64px;
  color: rgb(38, 50, 56);
  width: 332px;
  white-space: nowrap;
`;

export const IntroLinkInputInnerWrapper = styled.div`
  width: 200px;
  height: 36px;
  position: relative;
  line-height: 38px;
  font-size: 2rem;
`;
