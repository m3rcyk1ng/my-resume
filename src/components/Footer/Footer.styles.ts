import styled from 'styled-components';
import { theme } from '../../utils/Theme';

export const FooterWrapper = styled.div`
  background: ${theme.blueColor};
  padding: 7rem 0 3rem;
  text-align: center;
  margin-top: 7rem;

  @media screen and (max-width: 950px) {
    padding: 3rem 0 2rem;
  }
`;

export const FooterLinksRow = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  width: 70%;

  @media screen and (max-width: 950px) {
    display: grid;
    grid-template-rows: repeat(0, 1fr);
  }
`;

export const FooterLink = styled.a`
  color: ${theme.backgroundColor};
  transition: 0.3s;

  &:hover {
    color: ${theme.whiteColor};
  }
`;

export const SocialsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin: 2rem 0 4rem;

  @media screen and (max-width: 950px) {
    margin: 1rem 0 2rem;
  }
`;

export const SocialButton = styled.a`
  transition: 0.3s;
  
  &:hover {
    transform: scale(1.1);
  }
`;

export const SocialButtonImg = styled.img`
  background-color: ${theme.blueColor};
  border-radius: 3px;
  width: 2.5rem;
  height: 2.5rem;

  @media screen and (max-width: 950px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const StyledCopyright = styled.h4`
  color: ${theme.backgroundColor};
  user-select: none;
`;
