import styled from "styled-components";
import { theme } from "../../utils/Theme";

export const ButtonsContainer = styled.div `
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 1.2rem;
`;

export const ResumeButton = styled.a `
  display: inline-block;
  background-color: inherit;
  min-width: 150px;
  text-align: center;
  width: max-content;
  color: ${theme.blueColor};
  padding: 0.75rem 1.2rem;
  border-radius: .4rem;
  cursor: pointer;
  border: 1px solid ${theme.blueColor};
  transition: var(--transition);
  &:hover {
    background: ${theme.whiteColor};
    color: ${theme.backgroundColor};
    border-color: transparent;
  }
`;

export const ContactButton = styled(ResumeButton) `
  background-color: ${theme.blueColor};
  color: ${theme.backgroundColor};
`;

export const SocialsContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  position: absolute;
  left: 10rem;
  bottom: 3rem;
  &::before {
    content: "";
    width: 1px;
    height: 2rem;
    background: ${theme.blueColor};
  }
  &::after {
    content: "";
    width: 1px;
    height: 2rem;
    background: ${theme.blueColor};
  }
`;

export const SocialButton = styled.a `
  &:hover {
    transform: scale(1.1);
  }
`;

export const SocialButtonImg = styled.img `
  background-color: ${theme.blueColor};
  border-radius: 3px;
  width: 1rem;
  height: 1rem;
`;

export const ProfileContainer = styled.div `
  background: linear-gradient(${theme.blueColor}, transparent);
  width: 22rem;
  height: 29rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 4rem;
  border-radius: 12rem 12rem 0 0;
  overflow: hidden;
  padding: 5rem 1.5rem 1.5rem 1.5rem;
`;

export const ScrollDown = styled.a `
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
  position: absolute;
  color: ${theme.blueColor};
  right: 10rem;
  bottom: 5rem;
  transform: rotate(90deg);
  font-weight: 300;
  font-size: 0.75rem;
  animation: up-down 6s ease infinite;
  &:hover {
    cursor: pointer;
  }
`;

export const PhotoProfile = styled.img `
  @keyframes corgi {
    0% {
      transform: translateY(0);
    }
    10% {
      transform: translateX(0);
    }
    40% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateY(-5px);
    }
    70% {
      transform: translateX(5px);
    }
    95% {
      transform: translateX(0);
    }
    100% {
      transform: translateY(0);
    }
  }
    animation: corgi 20s infinite ease-in-out;
`;