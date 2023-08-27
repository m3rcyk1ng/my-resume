import styled from 'styled-components';
import { theme } from '../../utils/Theme';

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 1.2rem;
  
  @media screen and (max-width: 440px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ResumeButton = styled.a`
  display: inline-block;
  background-color: inherit;
  min-width: 150px;
  text-align: center;
  width: max-content;
  color: ${theme.blueColor};
  padding: 0.75rem 1.2rem;
  border-radius: 0.4rem;
  cursor: pointer;
  border: 1px solid ${theme.blueColor};
  transition: var(--transition);

  &:hover {
    background: ${theme.whiteColor};
    color: ${theme.backgroundColor};
    border-color: transparent;
  }

  @media screen and (max-width: 450px) {
    padding: 0.5rem 0.75rem;
  }
`;

export const ContactButton = styled(ResumeButton)`
  background-color: ${theme.blueColor};
  color: ${theme.backgroundColor};
`;

export const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  position: absolute;
  left: 10rem;
  bottom: 3rem;

  @media screen and (min-width: 1025px) {
    &::before {
      content: '';
      width: 1px;
      height: 2rem;
      background: ${theme.blueColor};
    }

    &::after {
      content: '';
      width: 1px;
      height: 2rem;
      background: ${theme.blueColor};
    }
  }

  @media screen and (max-width: 1024px) {
    flex-direction: row;
    position: initial;
    justify-content: center;
    margin-top: 2rem;
  }
`;

export const SocialButton = styled.a`
  &:hover {
    transform: scale(1.1);
  }
`;

export const SocialButtonImg = styled.img`
  background-color: ${theme.blueColor};
  border-radius: 3px;
  width: 1rem;
  height: 1rem;
`;

export const ProfileContainer = styled.div`
  width: 22rem;
  height: 30rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 3rem;
  overflow: hidden;

  @media screen and (max-width: 1280px) {
    width: 18rem;
  }
`;

export const ScrollDown = styled.a`
  position: absolute;
  color: ${theme.blueColor};
  right: 10rem;
  bottom: 5rem;
  transform: rotate(90deg);
  font-weight: 300;
  font-size: var(--fs-12);
  animation: up-down 4s ease infinite;
  animation-delay: 12.5s;
  &:hover {
    cursor: pointer;
  }

  @keyframes up-down {
    0% {
      bottom: 5rem;
    }
    50% {
      bottom: 4rem;
    }
    100% {
      bottom: 5rem;
    }
  }

  @media screen and (max-width: 1280px) {
    right: 2rem;
  }

  @media screen and (max-width: 1024px) {
    visibility: hidden;
  }
`;

export const StyledTitle = styled.h5`
  color: ${theme.greyColorText};
`;

export const PhotoProfile = styled.img`
  border-radius: 50%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border: 3px solid var(--blueColor);
  border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  animation: morph 8s ease-in-out infinite;
  @keyframes morph {
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }
    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
  }

  @media screen and (max-width: 400px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const LanguageContainer = styled.div`
  position: absolute;
  top: -2rem;
  right: 0;
  display: flex;
  &:hover {
    cursor: pointer;
  }
`;

export const LanguageIcon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  transition: .3s;
  &:hover {
    scale: 1.2;
  }

  @media screen and (max-width: 440px) {
    height: 1rem;
    width: 1.25rem;
  }
`;
