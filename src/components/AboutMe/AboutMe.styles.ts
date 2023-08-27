import styled from 'styled-components';
import { theme } from '../../utils/Theme';

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;

  @media screen and (max-width: 940px) {
    gap: 3rem;
  }

  @media screen and (max-width: 676px) {
    grid-template-columns: auto;
  }
`;

export const PhotoBackground = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(45deg, transparent, ${theme.blueColor}, transparent);
  display: grid;
  place-items: center;

  @media screen and (max-width: 676px) {
    width: 50%;
    margin: 0 auto;
  }
`;

export const AboutPhoto = styled.img`
  border-radius: 2rem;
  overflow: hidden;
  transform: rotate(10deg);
  transition: all 400ms ease;

  &:hover {
    transform: rotate(0);
    box-shadow: 0 0 15px 5px ${theme.blueColor};
  }
`;

export const FrontEndCircle = styled.img`
  position: absolute;
  background-color: ${theme.whiteColor};
  border-radius: 50%;
  bottom: -60px;
  right: -50px;
  width: 10rem;
  height: 10rem;
  animation: rotate 9s linear infinite;
  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }

  @media screen and (max-width: 940px) {
    visibility: hidden;
  }
`;

export const FrontEndCircleImg = styled.img`
  position: absolute;
  width: 5rem;
  height: 5rem;
  bottom: -15px;
  right: -8px;

  @media screen and (max-width: 940px) {
    visibility: hidden;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-height: 50%;
  
  @media screen and (max-width: 940px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    max-height: 100%;
    justify-items: center;
  }
`;

export const Card = styled.div`
  text-align: center;
  background: ${theme.secondaryBlue};
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: 1rem;
  transition: all 400ms ease;

  &:hover {
    background: transparent;
    border-color: ${theme.blueColor};
  }

  @media screen and (max-width: 1440px) {
    padding: 1rem 0.5rem;
  }

  @media screen and (max-width: 940px) {
    padding: 1rem 0.5rem;
    width: 100%;
  }
`;

export const CardIcon = styled.img`
  margin: 0 auto 1.5rem;
  width: 2rem;
  height: 2rem;
  
  @media screen and (max-width: 1440px) {
    margin: 0 auto 0.75rem;
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const CardTitle = styled.h4`
  margin-bottom: 1rem;
`;

export const CardDescription = styled.h5`
  white-space: pre-wrap;
  color: ${theme.greyColorText};
`;

export const AboutDescription = styled.p`
  margin-top: 3rem;
  color: ${theme.whiteColor};

  @media screen and (max-width: 1024px) {
    margin-bottom: 5rem;
  }
`;